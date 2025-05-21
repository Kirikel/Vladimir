import React, { useState, useEffect } from "react";
import axios from "axios";
import CityModal from "../components/CityModal";
import "./BuyTicketsPage.css";

export default function BuyTicketsPage() {
  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState("Владимир");
  const [buyTicketsData, setBuyTicketsData] = useState({});

  useEffect(() => {
    const fetchBuyTickets = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/tickets");
        setBuyTicketsData(response.data.data[0] || {});
      } catch (error) {
        console.error("Ошибка при загрузке данных покупки билетов:", error);
      }
    };
    fetchBuyTickets();
  }, []);

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
            <span className="vladim" onClick={() => setShowModal(true)}>
              {city}
            </span>
          </div>
          <div className="zu-j-zf-i" />
          <div className="grup-1">
            <div className="frame-2">
              <span className="events">
                {buyTicketsData.eventsText || "События"}
              </span>
              <span className="certificates">
                {buyTicketsData.certificatesText || "Сертификаты"}
              </span>
            </div>
            <div className="oxlsv-mcq-eai-3" />
            <div className="oxlsv-mcq-eai-4" />
          </div>
          <div className="oxlsv-mcq-eai-5" />
          <span className="gift-certificate-festlist-2-years">
            {buyTicketsData.giftCertificateText ||
              "Подарочный сертификат FestList теперь на 2 года!"}
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