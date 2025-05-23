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
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 p-6 rounded-xl shadow-2xl bg-neutral-800 border border-neutral-700 w-full max-w-md text-white
                  transition-opacity duration-500 ease-out ${isMounted ? "opacity-100" : "opacity-0"}`}
      role="alertdialog"
      aria-labelledby="hackjps-event-popup-title"
      aria-describedby="hackjps-event-popup-description"
      aria-hidden={!isMounted}
    >
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:bg-neutral-700 transition-colors"
        aria-label="Close event notification"
      >
        <X size={20} /> {/* Lucide X icon */}
      </button>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          <MonitorPlay size={36} className="text-green-500" /> {/* Lucide MonitorPlay icon */}
        </div>
        <div>
          <h2 id="hackjps-event-popup-title" className="text-xl font-semibold mb-1 text-white">
            {eventName}
          </h2>
          <div className="flex items-center text-sm text-gray-400 mb-3">
            <CalendarDays size={16} className="mr-2" /> {/* Lucide CalendarDays icon */}
            <span>{eventDate}</span>
          </div>
          <p id="hackjps-event-popup-description" className="text-sm text-gray-300 mb-5">
            {eventDescription}
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
            <Link href={eventPageUrl} passHref legacyBehavior>
              <Button
                onClick={handleRedirect}
                className="w-full sm:w-auto bg-green-700 hover:bg-green-600 text-white"
              >
                Learn More & Sign Up
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={handleClose}
              className="w-full sm:w-auto text-gray-300 border-neutral-600 hover:bg-neutral-700 hover:text-white"
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
