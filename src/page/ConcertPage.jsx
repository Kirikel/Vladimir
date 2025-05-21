import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CityModal from "../components/CityModal";
import "./ConcertPage.css";

export default function ConcertPage() {
  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState("Владимир");
  const [event, setEvent] = useState({});

  // Загрузка данных из API при монтировании компонента
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/events");
        setEvent(response.data.data[0] || {}); // Берем первую запись
      } catch (error) {
        console.error("Ошибка при загрузке данных события:", error);
      }
    };
    fetchEvent();
  }, []);

  return (
    <>
      {showModal && (
        <CityModal
          onClose={() => setShowModal(false)}
          onSelect={(c) => setCity(c)}
        />
      )}
      <div className="main-cont">
        <div className="rect">
          <div className="oxlcv-mcq-eai">
            <div className="rect-1">
              <Link to="/buy-tickets">
                <span className="buy-tickets">
                  {event.certificateText || "Сертификат"}
                </span>
              </Link>
            </div>
          </div>
          <div className="oxlcv-mcq-eai-2" />
          <div className="zu-baj-zfi" />
          <div className="grou">
            <div className="icon-location" />
            <span className="vladim" onClick={() => setShowModal(true)}>
              {city}
            </span>
          </div>
          <span className="grou-melnitsa">
            {event.groupName || "Группа Мельница"}
          </span>
          <span className="jubileiny-tur-k">
            {event.tourName || "Юбилейный тур к 25-летию группы"}
          </span>
          <span className="concert-vladim">
            {event.location || "Концерт во Владимире"}
          </span>
          <div className="oxlcv-mcq-eai-3" />
          <div className="oxlcv-mcq-eai-4" />
          <div className="oxlcv-mcq-eai-5" />
          <span className="about-concert">
            {event.aboutTitle || "О концерте"}
          </span>
          <div className="rect-44">
            <span className="main-hits">
              {event.description ||
                "Невозможно включить в юбилейную программу все песни, которые были созданы за эти 25 лет, но в неё точно войдут наши главные хиты, которые вы так любите. Прогуляемся по музыкальным дорогам, где нам встретятся и древние кельты, и славяне, и Левант, и глубокий космос, в общем, сыграем для вас «древнюю музыку нового мира»!"}
            </span>
          </div>
          <div className="oxlcv-mcq-eai-7" />
          <div className="oxlcv-mcq-eai-8" />
          <span className="buy-tickets-9">
            {event.buyTicketsText || "Купить билеты"}
          </span>
          <div className="image" />
          <div className="oxlcv-mcq-eai-a" />
          <div className="rect-b">
            <span className="enter-email">
              {event.enterEmailText || "Введите email"}
            </span>
          </div>
          <div className="rect-c">
            <span className="buy">
              {event.buyButtonText || "Купить"}
            </span>
          </div>
        </div>
        <div className="oxlcv-mcq-eai-d" />
      </div>
    </>
  );
}