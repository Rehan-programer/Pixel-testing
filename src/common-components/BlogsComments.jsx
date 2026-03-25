"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ThumbsDown, ThumbsUp, MessageCircle, MoreHorizontal, ArrowUpDown,
    ThumbsUpIcon
} from "lucide-react";

const PORTAL = process.env.NEXT_PUBLIC_PORTAL;

const getCount = (val) => {
    if (!val) return 0;
    if (typeof val === "number") return val;
    if (Array.isArray(val)) return val.length;
    return 0;
};

const timeAgo = (dateStr) => {
    const now = new Date();
    const date = new Date(dateStr);
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
};

const ActionBtn = ({ icon: Icon, count, hoverColor }) => (
    <div
        className={`flex items-center gap-1.5 text-gray-400 ${hoverColor} transition-colors duration-200 text-sm font-medium`}
    >
        <Icon size={15} />
        {count !== undefined && <span>{count}</span>}
    </div>
);

const BlogsComments = ({ data, blogId }) => {
    const [comments] = useState(data.comments || []);

    return (
        <div className="">

            {/* ── Header ── */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-[#292a76]">Comments</h2>
                    <span className="bg-[#00cfaa] text-white text-xs font-bold min-w-5 h-5 inline-flex items-center justify-center rounded-full">
                        <span className="mt-0.3 mr-[1%]">{comments.length}</span>
                    </span>
                </div>
                <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#292a76] transition-colors font-medium">
                    <ArrowUpDown size={14} />
                    Most recent
                </button>
            </div>

            {/* ── Comments List ── */}
            <div className="space-y-1">
                {comments.map((comment, cIndex) => (
                    <div
                        key={comment.id ?? cIndex}
                        className="group py-5 border-b border-gray-100 last:border-0"
                    >
                        <div className="flex gap-3">
                            {/* Avatar */}
                            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#00cfaa]/20">
                                <Image src={comment.img} alt={comment.name} fill className="object-cover" />
                            </div>

                            <div className="flex-1 min-w-0">
                                {/* Name + Time + Menu */}
                                <div className="flex items-center justify-between gap-2 mb-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-semibold text-[#292a76] text-sm">{comment.name}</span>
                                        <span className="text-gray-400 text-xs">{timeAgo(comment.currentDateTime)}</span>
                                    </div>
                                    <MoreHorizontal size={16} className="text-gray-300 group-hover:text-gray-400 flex-shrink-0 transition-colors" />
                                </div>

                                {/* Comment Text */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{comment.commentText}</p>

                                {/* Actions */}
                                <div className="flex items-center gap-5">
                                    <ActionBtn
                                        icon={ThumbsUpIcon}
                                        count={getCount(comment.likes)}
                                        hoverColor="hover:text-red-500"
                                    />
                                    <ActionBtn
                                        icon={ThumbsDown}
                                        count={getCount(comment.unlikes)}
                                        hoverColor="hover:text-blue-500"
                                    />
                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#292a76] bg-[#292a76]/8 hover:bg-[#292a76]/15 px-3 py-1.5 rounded-full transition-colors duration-200">
                                        <MessageCircle size={13} />
                                        Reply
                                    </div>
                                </div>

                                {/* Replies */}
                                {comment.replies?.length > 0 && (
                                    <div className="mt-4 space-y-4 pl-4 border-l-2 border-[#00cfaa]/30">
                                        {comment.replies.map((reply, rIndex) => (
                                            <div key={reply.id ?? rIndex} className="flex gap-3">
                                                <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#292a76]/10">
                                                    <Image
                                                        src={reply.img || comment.img}
                                                        alt={reply.name || comment.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                        <span className="font-semibold text-[#292a76] text-xs">{reply.name}</span>
                                                        <span className="bg-[#00cfaa] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">✓</span>
                                                        <span className="text-gray-400 text-xs">{timeAgo(reply.currentDateTime)}</span>
                                                    </div>

                                                    <p className="text-gray-600 text-xs leading-relaxed mb-2">{reply.replyText}</p>

                                                    <div className="flex items-center gap-4">
                                                        <ActionBtn
                                                            icon={ThumbsUpIcon}
                                                            count={getCount(reply.likes)}
                                                            hoverColor="hover:text-red-500"
                                                        />
                                                        <ActionBtn
                                                            icon={ThumbsDown}
                                                            count={getCount(reply.unlikes)}
                                                            hoverColor="hover:text-blue-500"
                                                        />
                                                        <span className="text-xs font-semibold text-[#292a76]">
                                                            Reply
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Add Comment ── */}
            <div className="mt-6">
                <Link
                    href={`https://portal.pxlperfects.com/dashboard/blogs/${blogId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-slider"
                >
                    Add Comment
                </Link>
            </div>
        </div>
    );
};

export default BlogsComments;