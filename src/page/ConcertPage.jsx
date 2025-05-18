import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CityModal from "../components/CityModal";
import "./ConcertPage.css";

export default function ConcertPage() {
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
    <div className="main-cont">
      <div className="rect">
        <div className="oxlcv-mcq-eai">
          <div className="rect-1">
            <Link to="/buy-tickets">
                <span className="buy-tickets">Сертификат</span>
            </Link>
          </div>
        </div>
        <div className="oxlcv-mcq-eai-2" />
        <div className="zu-baj-zfi" />
        <div className="grou">
          <div className="icon-location" />
          <span className="vladim" onClick={() => setShowModal(true)}>{city}</span>
        </div>
        <span className="grou-melnitsa">Группа Мельница</span>
        <span className="jubileiny-tur-k">Юбилейный тур к 25-летию группы</span>
        <span className="concert-vladim">Концерт во Владимире</span>
        <div className="oxlcv-mcq-eai-3" />
        <div className="oxlcv-mcq-eai-4" />
        <div className="oxlcv-mcq-eai-5" />
        <span className="about-concert">О концерте</span>
        <div className="rect-44">
          <span className="main-hits">
            Невозможно включить в юбилейную программу все песни, которые были
            созданы за эти 25 лет,<br></br> но в неё точно войдут наши главные хиты,
            которые вы так любите.<br></br> Прогуляемся по музыкальным дорогам, где нам
            встретятся и древние кельты, и славяне,<br></br> и Левант, и глубокий космос,
            в общем, сыграем для вас «древнюю музыку нового мира»!
          </span>
        </div>
        <div className="oxlcv-mcq-eai-7" />
        <div className="oxlcv-mcq-eai-8" />
        <span className="buy-tickets-9">Купить билеты</span>
        <div className="image" />
        <div className="oxlcv-mcq-eai-a" />
        <div className="rect-b">
          <span className="enter-email">Введите email</span>
        </div>
        <div className="rect-c">
          <span className="buy">Купить</span>
        </div>
      </div>
      <div className="oxlcv-mcq-eai-d" />
    </div>
  </>
  );
}
