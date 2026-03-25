"use client";
import { useEffect, useState, createContext, useCallback } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

export const CurrencyContext = createContext();

export const useRootLayout = () => {
  const [currency, setCurrency] = useState("USD");
  const pathname = usePathname();
  const [location, setLocation] = useState(null);
  const [currencies, setCurrencies] = useState({});
  const [exchangeRate, setExchangeRate] = useState({});
  const [loading, setLoading] = useState(true);

  // ✅ Only these will appear in dropdown
  const specificCountries = [
    "Pakistan",
    "United States",
    "Spain",
    "United Kingdom",
    "Euro",
    "Australia",
    "Saudi Arabia",
    "United Arab Emirates",
    "China",
  ];

  // ✅ Static currency symbol map
  const symbolMap = {
    USD: "$",
    GBP: "£",
    EUR: "€",
    PKR: "₨",
    AUD: "A$",
    SAR: "﷼",
    AED: "د.إ",
    CNY: "¥",
    ESP: "₧",
  };

  // ✅ 1. Fetch exchange rates
const fetchExchangeRate = useCallback(async () => {
    try {
      const res = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
      setExchangeRate(res.data.rates || {});
    } catch (error) {
      console.warn("Primary exchange rate API failed, using fallback...");
      try {
        const backupRes = await axios.get("https://open.er-api.com/v6/latest/USD");
        setExchangeRate(backupRes.data.rates || {});
      } catch (err) {
        console.error("Both exchange rate APIs failed.", err);
      }
    }
}, []);


  // ✅ 2. Fetch countries and map their currencies
  const fetchCurrencies = async () => {
    try {
      const res = await axios.get("https://countriesnow.space/api/v0.1/countries/currency");
      const data = res.data?.data || [];
      if (!data.length) throw new Error("No data from countries API");

      const filteredCountries = data.filter((item) =>
        specificCountries.includes(item.name)
      );

      const currencyData = {};

      for (const { currency: code, name: countryName, iso2 } of filteredCountries) {
        if (!code || !iso2) continue;
        currencyData[code] = {
          symbol: symbolMap[code] || "",
          currency: code,
          flag: `https://flagsapi.com/${iso2}/flat/64.png`,
          lat: 0,
          lng: 0,
        };
      }

      setCurrencies(currencyData);
    } catch (error) {
      console.error("Failed to fetch currencies:", error);
    }
  };

  // ✅ 3. Convert prices dynamically
  const convertPrice = (priceInUSD) => {
    const numericPrice =
      typeof priceInUSD === "string"
        ? parseFloat(priceInUSD.replace(/[^0-9.-]+/g, ""))
        : priceInUSD;

    const rate = exchangeRate?.[currency] || 1;
    const convertedPrice = numericPrice * rate;
    return Math.round(convertedPrice);
  };

  // ✅ 4. Get user location (with IP fallback)
  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          console.log("✅ Location detected via browser:", latitude, longitude);
          setLocation({ latitude, longitude });
        },
        async (err) => {
          console.warn("⚠️ Geolocation failed, using IP-based location:", err);
          try {
            const res = await fetch("https://ipapi.co/json/");
            const data = await res.json();
            if (data?.latitude && data?.longitude) {
              console.log("✅ Location detected via IP:", data.country_name);
              setLocation({ latitude: data.latitude, longitude: data.longitude });

              // Automatically set currency if country is Pakistan
              if (data.country_name === "Pakistan") {
                setCurrency("PKR");
              }
            } else {
              console.error("❌ Could not get IP-based location data.");
            }
          } catch (ipErr) {
            console.error("❌ IP-based location failed:", ipErr);
          }
        }
      );
    } else {
      console.warn("❌ Geolocation not supported, using IP-based fallback...");
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data?.latitude && data?.longitude) {
          console.log("✅ Location detected via IP:", data.country_name);
          setLocation({ latitude: data.latitude, longitude: data.longitude });

          // Automatically set currency if country is Pakistan
          if (data.country_name === "Pakistan") {
            setCurrency("PKR");
          }
        }
      } catch (err) {
        console.error("❌ IP-based fallback failed:", err);
      }
    }
  };

  // ✅ 5. Main initialization
  useEffect(() => {
    (async () => {
      await fetchCurrencies();
      await fetchExchangeRate();
      await getLocation();
      setTimeout(() => setLoading(false), 300);
    })();
  }, []);

  // ✅ 6. Auto-scroll on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  // ✅ 7. Handle currency selection
const handleCurrencyChange = (event) => {
  setCurrency(event.target.value);
};
useEffect(() => {
  fetchExchangeRate();
}, [currency]); // ⬅ Run exchange rate update only when currency changes

  // ✅ 8. Helper for canonical URLs
  const getCanonicalUrl = (path) => `https://www.pxlperfects.com${path}`;

  return {
    currency,
    currencies,
    handleCurrencyChange,
    convertPrice,
    loading,
    getCanonicalUrl,
    pathname,
  };
};
