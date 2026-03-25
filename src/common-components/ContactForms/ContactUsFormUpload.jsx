"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Paperclip, Trash2 } from "lucide-react"; // ✅ lightweight icons
import Image from "next/image";
import SEOImage from "../SeoImage/SeoImage";

const ContactUsFormFileUpload = ({
  contact,
  lang,
  pathname,
  setFieldValue,
  resetFileUpload,
  setIsUploading,
}) => {
  const [filePreviews, setFilePreviews] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const API_URL = process.env.NEXT_PUBLIC_API_LINK;
  const [uploadError, setUploadError] = useState("");

  const handleIconClick = () => fileInputRef.current.click();

  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    const MAX_FILE_SIZE = 3 * 1024 * 1024;
    const validFiles = [];
    const previews = [];

    for (const file of files) {
      const alreadyExists = uploadedFiles.some(
        (u) => u.name === file.name && u.size === file.size
      );

      if (file.size > MAX_FILE_SIZE) {
        setUploadError(
          lang === "es"
            ? `El archivo "${file.name}" es demasiado grande. Tamaño máximo permitido: 3MB.`
            : `File "${file.name}" is too large. Max 3MB allowed.`
        );
        return;
      }

      if (alreadyExists) {
        setUploadError(
          lang === "es"
            ? `El archivo "${file.name}" ya existe.`
            : `File "${file.name}" already exists.`
        );
        return;
      }

      validFiles.push(file);
      previews.push({
        file,
        fileUrl: URL.createObjectURL(file),
        isUploading: true,
      });
    }

    if (!validFiles.length) return;
    setUploadError("");
    setFilePreviews((prev) => [...prev, ...previews]);

    const formData = new FormData();
    validFiles.forEach((f) => formData.append("files", f));

    try {
      setIsUploading(true);
      const response = await axios.post(`${API_URL}upload/image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const newFiles = response.data.files.map((resFile, i) => ({
        name: validFiles[i].name,
        url: resFile.url,
      }));

      const allFiles = [...uploadedFiles, ...newFiles];
      setUploadedFiles(allFiles);
      setFieldValue("files", allFiles);
      setFilePreviews((prev) =>
        prev.map((p) => ({ ...p, isUploading: false }))
      );
    } catch (err) {
      setUploadError(
        lang === "es" ? "Error al subir el archivo." : "File upload failed."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (index) => {
    const updatedPreviews = filePreviews.filter((_, i) => i !== index);
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setFilePreviews(updatedPreviews);
    setUploadedFiles(updatedFiles);
    setFieldValue("files", updatedFiles);
  };

  useEffect(() => {
    if (resetFileUpload) {
      setFilePreviews([]);
      setUploadedFiles([]);
      setFieldValue("files", null);
      setUploadError("");
    }
  }, [resetFileUpload]);

  return (
    <div className="w-full">
      {/* Upload Area Variants */}
      {contact ? (
        <>
          <p className="font-semibold mb-[1%]">
            {lang === "es"
              ? "Documento de Detalles de Requisitos"
              : "Requirement Details Document"}
          </p>

          <div
            onClick={handleIconClick}
            className="flex justify-between items-center w-full border-2 border-[#e8f4ff] rounded-md p-[2%] cursor-pointer hover:bg-[#f9fbff] transition-all"
          >
            <p className="text-gray-500">
              {lang === "es" ? "Subir archivos" : "Upload Files"}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
            <Paperclip className="text-gray-500 w-[clamp(14px, 1.1vw, 20px)] h-[clamp(14px, 1.1vw, 20px)]" />
          </div>

          {uploadError && (
            <p className="text-red-600 mt-[2%]">{uploadError}</p>
          )}
        </>
      ) : pathname ? (
        <>
          <div
            onClick={handleIconClick}
            className={`border-2 ${
              uploadError ? "border-red-500" : "border-[#292a76]"
            } border-dashed rounded-lg w-full text-center pb-[2%] cursor-pointer hover:bg-gray-50 transition`}
          >
            <Image
              src="/drag and drop.png"
              alt="upload"
              width={120}
              height={120}
              className="mx-auto mb-[2%] w-[100%]"
            />
            <p className="font-semibold ">
              {lang === "es"
                ? "Arrastra y suelta archivos aquí, o haz clic para explorar"
                : "Drag & drop files here, or click to browse"}
            </p>
            <p className="text-gray-500  mt-[1%]">
              {lang === "es"
                ? "(Tamaño máximo: 3MB por archivo)"
                : "(Max size: 3MB per file)"}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {uploadError && (
            <p className="text-red-600  mt-[2%]">{uploadError}</p>
          )}
        </>
      ) : (
        <>
          <div
            onClick={handleIconClick}
            className="border-b-2 border-white w-full text-center py-[5%] cursor-pointer hover:bg-white/10 transition"
          >
            <SEOImage
              src="/drag and drop white.png"
              alt="upload Image"
              width={160}
              height={160}
              className="mx-auto mb-2"
            />
            <p className="text-white ">
              {lang === "es"
                ? "Arrastra y suelta archivos aquí, o haz clic para explorar"
                : "Drag & drop files here, or click to browse"}
            </p>
            <p className="text-gray-200  mt-[1%]">
              {lang === "es"
                ? "(Tamaño máximo: 3MB por archivo)"
                : "(Max size: 3MB per file)"}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          {uploadError && (
            <p className="text-red-600 text-sm mt-2">{uploadError}</p>
          )}
        </>
      )}

      {/* File Previews */}
      {filePreviews.length > 0 && (
        <div className="my-[4%] overflow-hidden">
          {filePreviews.length > 3 ? (
            <Swiper spaceBetween={10} slidesPerView={3} grabCursor>
              {filePreviews.map((filePreview, idx) => (
                <SwiperSlide key={idx}>
                  <FilePreview
                    filePreview={filePreview}
                    handleDelete={() => handleDelete(idx)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
<div className={`flex w-full ${filePreviews.length===1 || filePreviews.length===2 ? "justify-start" : "justify-center"} items-center gap-3`}>
              {filePreviews.map((filePreview, idx) => (
                <FilePreview
                  key={idx}
                  filePreview={filePreview}
                  handleDelete={() => handleDelete(idx)}
                    totalFiles={filePreviews.length}

                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const FilePreview = ({ filePreview, handleDelete ,totalFiles }) => {
  const { file, fileUrl, isUploading } = filePreview;
  const isImage = file.type.startsWith("image/");
  const isPdf = file.type === "application/pdf";
 const widthClass =
    totalFiles === 1
      ? "w-[32%]"
      : totalFiles === 2
      ? "w-[34%]"
      : totalFiles === 3
      ? "w-[32%]"
      : "w-full";

  return (
    <div className={`relative flex items-center justify-center ${widthClass} h-[6rem] md:h-[6vw] rounded overflow-hidden bg-white shadow-sm border border-gray-200`}>
      {isImage ? (
        <Image
        fill
          src={fileUrl}
          alt={file.name}
          className={`w-full h-full object-cover transition ${
            isUploading ? "opacity-40" : ""
          }`}
        />
      ) : isPdf ? (
        <div
          className={`flex flex-col items-center justify-center w-full h-full bg-gray-100 text-xs ${
            isUploading ? "opacity-40" : ""
          }`}
        >
          <p className="truncate max-w-[90%]">{file.name}</p>
          <Link title=" View PDF"
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-xs mt-1"
          >
            View PDF
          </Link>
        </div>
      ) : null}

      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
        </div>
      )}

      {!isUploading && (
        <button
          onClick={handleDelete}
          className="absolute top-1 right-1 bg-white p-1 rounded-full shadow hover:bg-gray-100 transition"
          aria-label="Delete file"
        >
          <Trash2 className="w-4 h-4 text-red-600" />
        </button>
      )}
    </div>
  );
};

export default ContactUsFormFileUpload;
