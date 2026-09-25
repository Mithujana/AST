"use client";

import React from "react";
import GB from "country-flag-icons/react/1x1/GB";
import AU from "country-flag-icons/react/1x1/AU";
import CA from "country-flag-icons/react/1x1/CA";
import EU from "country-flag-icons/react/1x1/EU";
import JP from "country-flag-icons/react/1x1/JP";
import { Globe } from "lucide-react";

interface CountryFlagProps {
  code?: string;
  className?: string;
}

export default function CountryFlag({ code, className = "w-full h-full object-cover" }: CountryFlagProps) {
  switch (code?.toUpperCase()) {
    case "GB":
    case "UK":
      return <GB title="United Kingdom" className={className} />;
    case "AU":
      return <AU title="Australia" className={className} />;
    case "CA":
      return <CA title="Canada" className={className} />;
    case "EU":
      return <EU title="Europe" className={className} />;
    case "JP":
      return <JP title="Japan" className={className} />;
    case "ASIA":
    default:
      return (
        <div className="w-full h-full bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-white">
          <Globe className="w-3.5 h-3.5" />
        </div>
      );
  }
}
