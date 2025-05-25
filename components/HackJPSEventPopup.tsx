// components/HackJPSEventPopup.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X, CalendarDays, MonitorPlay } from "lucide-react"; // Import Lucide icons

interface HackJPSEventPopupProps {
  eventPageUrl?: string;
  eventName?: string;
  eventDate?: string;
  eventDescription?: string;
}

const HackJPSEventPopup: React.FC<HackJPSEventPopupProps> = ({
  eventPageUrl = "/events/hackjps",
  eventName = "HackJPS is Coming!",
  eventDate = "June 10, 2025",
  eventDescription = "Get ready for an amazing coding experience at HackJPS. Don't miss out!",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("hackJPSEventPopupDismissed");
    if (!dismissed) {
      const visibilityTimer = setTimeout(() => {
        setIsVisible(true);
        const mountTimer = setTimeout(() => setIsMounted(true), 50);
        return () => clearTimeout(mountTimer);
      }, 1500);
      return () => clearTimeout(visibilityTimer);
    }
  }, []);

  const closePopup = () => {
    setIsMounted(false);
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("hackJPSEventPopupDismissed", "true");
    }, 500);
    return () => clearTimeout(timer);
  };

  const handleClose = () => {
    closePopup();
  };

  const handleRedirect = () => {
    closePopup();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={popupRef}
      className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 z-50 p-4 sm:p-6 rounded-none sm:rounded-xl shadow-2xl bg-neutral-800 border border-neutral-700 w-full sm:max-w-md text-white
                  transition-opacity duration-500 ease-out ${isMounted ? "opacity-100" : "opacity-0"}`}
      role="alertdialog"
      aria-labelledby="hackjps-event-popup-title"
      aria-describedby="hackjps-event-popup-description"
      aria-hidden={!isMounted}
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 rounded-full text-gray-400 hover:bg-neutral-700 transition-colors"
        aria-label="Close event notification"
      >
        <X size={20} />
      </button>

      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="flex-shrink-0">
          <MonitorPlay size={28} sm={36} className="text-green-500" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 id="hackjps-event-popup-title" className="text-lg sm:text-xl font-semibold mb-1 text-white truncate">
            {eventName}
          </h2>
          <div className="flex items-center text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
            <CalendarDays size={14} className="mr-1 sm:mr-2" />
            <span>{eventDate}</span>
          </div>
          <p id="hackjps-event-popup-description" className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-5">
            {eventDescription}
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
            <Link href={eventPageUrl} passHref legacyBehavior>
              <Button
                onClick={handleRedirect}
                className="w-full sm:w-auto bg-green-700 hover:bg-green-600 text-white text-sm py-2 h-auto"
              >
                Learn More & Sign Up
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={handleClose}
              className="w-full sm:w-auto text-gray-300 border-neutral-600 hover:bg-neutral-700 hover:text-white text-sm py-2 h-auto"
            >
              Dismiss
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackJPSEventPopup;
