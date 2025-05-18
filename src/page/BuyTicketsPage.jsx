import React from "react";
import { useState } from "react";

import "./BuyTicketsPage.css";
import CityModal from "../components/CityModal";


export default function BuyTicketsPage() {
    const [showModal, setShowModal] = useState(false);
    const [city, setCity] = useState("Владимир");
    return (
        <>
              {showModal && (
                <CityModal
                  onClose={() => setShowModal(false)}
                  onSelect={(c) => setCity(c)}
                />
              )}
        <div className="main-co">
        <div className="oxlsv-mcq-eai" />
        <div className="re">
            <div className="grup">
            <div className="icns-location" />
            <span className="vladim" onClick={() => setShowModal(true)}>{city}</span>
            </div>
            <div className="zu-j-zf-i" />
            <div className="grup-1">
            <div className="frame-2">
                <span className="events">События</span>
                <span className="certificates">Сертификаты</span>
            </div>
            <div className="oxlsv-mcq-eai-3" />
            <div className="oxlsv-mcq-eai-4" />
            </div>
            <div className="oxlsv-mcq-eai-5" />
            <span className="gift-certificate-festlist-2-years">
            Подарочный сертификат FestList теперь на 2 года!
            </span>
            <div className="oxl-cv-mcqe-ai" />
            <div className="oxl-cv-mcqe-ai-6" />
            <div className="oxl-cv-mcqe-ai-7" />
            <div className="oxl-cv-mcqe-ai-8" />
        </div>
        </div>
    </>
    );
}