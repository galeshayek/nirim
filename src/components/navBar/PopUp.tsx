"use client";

import { useState, useEffect, useContext, useRef } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { langContext } from "../../contexts/langContext";
import LangBtn from "../LangBtn";

export default function PopUp() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useContext(langContext);
  const { t, i18n } = useTranslation();
  const popupRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      lastFocusedElement.current = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      lastFocusedElement.current?.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isVisible) return;

      if (event.key === "Escape") {
        closePopup();
      }

      if (event.key === "Tab") {
        const focusableElements =
          popupRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ) || [];
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        } else if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closePopup}
    >
      <div
        ref={popupRef}
        className="bg-white rounded-lg p-6 pt-2 max-w-md w-full mx-4 relative"
        role="dialog"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-3 justify-between pb-1 mb-2 border-b-2">
          <LangBtn />
          <button
            ref={closeButtonRef}
            onClick={closePopup}
            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label={t("popUp.closeButton")}
          >
            <X size={24} />
          </button>
        </div>
        <div dir={i18n.dir(lang)} className="flex flex-col">
          <h2
            id="popup-title"
            className="text-2xl font-bold mb-4 text-gray-900"
          >
            {t("popUp.title")}
          </h2>
          <p id="popup-description" className="mb-4 text-gray-700">
            {t("popUp.description")}
          </p>
          <a
            href="https://www.peach-in.com/cmp/Kibbutz-Nirim"
            target="_blank"
            rel="noreferrer noopener"
            className="place-self-center bg-pop text-opposite p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t("popUp.button")}
          </a>
        </div>
      </div>
    </div>
  );
}
