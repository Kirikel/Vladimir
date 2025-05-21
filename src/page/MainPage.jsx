import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CityModal from "../components/CityModal";
import "./MainPage.css";

export default function MainPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState("Владимир");
  const [concerts, setConcerts] = useState([]);

  // Загрузка данных из API при монтировании компонента
  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/concerts");
        setConcerts(response.data.data); // Данные из Strapi
      } catch (error) {
        console.error("Ошибка при загрузке концертов:", error);
      }
    };
    fetchConcerts();
  }, []);

  const goToConcert = () => navigate("/concert");

  const getConcertValue = (field) => {
    return concerts.length > 0 ? concerts[0][field] : "";
  };

  return (
    <>
      {showModal && (
        <CityModal
          onClose={() => setShowModal(false)}
          onSelect={(c) => setCity(c)}
        />
      )}
      <div className="main-container">
        <div className="flex-row-af">
          <div className="zu-baj-zf-i" />
          <div className="icons-location" />
          <span className="vladimir" onClick={() => setShowModal(true)}>
            {city} 
          </span>
        </div>
        <span className="concerts-vladimir">
          {getConcertValue("location") || "Концерты во Владимире"}
        </span>
        <div className="flex-row-ec">
          <div className="rectangle">
            <div className="icons-magnifier" />
            <span className="title">
              {getConcertValue("title") || "Название"}
            </span>
          </div>
          <div className="rectangle-1">
            <span className="category">
              {getConcertValue("category") || "Категория"}
            </span>
            <div className="icons-triangle" />
          </div>
        </div>
        <div className="flex-row-ce">
          <div className="rectangle-6">
            <div className="svg-7" />
          </div>
          <div className="rectangle-8">
            <div className="svg-9" />
          </div>
          <div className="rectangle-a">
            <div className="svg-b" />
          </div>
          <div className="background" onClick={goToConcert}>
            <div className="object-link">
              <div className="background-c">
                <span className="price">
                  от {getConcertValue("price1") || "2 800"}
                </span>
              </div>
            </div>
            <div className="sx" />
            <div className="overlay" />
          </div>
          <div className="background-d" onClick={goToConcert}>
            <div className="object-link-e">
              <div className="background-f">
                <span className="price-tag">
                  от {getConcertValue("price2") || "2 900"}
                </span>
              </div>
            </div>
            <div className="container" />
            <div className="overlay-10" />
          </div>
          <div className="background-11" onClick={goToConcert}>
            <div className="link-object">
              <div className="background-12">
                <span className="price-tag-13">
                  от {getConcertValue("price3") || "900"}
                </span>
              </div>
            </div>
            <div className="container-14" />
            <div className="overlay-15" />
          </div>
          <div className="background-16" onClick={goToConcert}>
            <div className="link-object-17">
              <div className="background-18">
                <span className="price-tag-19">
                  от {getConcertValue("price4") || "1 600"}
                </span>
              </div>
            </div>
            <div className="container-1a" />
            <div className="overlay-1b" />
          </div>
          <span className="heading-melnitsa">
            {getConcertValue("title1") || "Мельница"}
          </span>
          <span className="heading-atl">
            {getConcertValue("title2") || "ATL"}
          </span>
          <span className="heading-pussykiller">
            {getConcertValue("title4") || "Pussykiller"}
          </span>
          <div className="rectangle-1c">
            <div className="svg-1d" />
          </div>
          <div className="rectangle-1e">
            <div className="svg-1f" />
          </div>
          <div className="rectangle-20">
            <div className="svg-21" />
          </div>
          <div className="background-22" onClick={goToConcert}>
            <div className="object-link-23">
              <div className="background-24">
                <span className="price-25">
                  от {getConcertValue("price5") || "1 500"}
                </span>
              </div>
            </div>
            <div className="sx-26" />
            <div className="overlay-27" />
          </div>
          <div className="background-28" onClick={goToConcert}>
            <div className="object-link-29">
              <span className="price-2b">
                  от {getConcertValue("price6") || "2 300"}
                </span>
            </div>
            <div className="sx-2c" />
            <div className="overlay-2d" />
          </div>
          <div className="background-2e" onClick={goToConcert}>
            <div className="object-link-2f">
              <div className="background-30">
                <span className="price-31">
                  от {getConcertValue("price7") || "2 300"}
                </span>
              </div>
            </div>
            <div className="sx-32" />
            <div className="overlay-33" />
          </div>
          <div className="background-34" onClick={goToConcert}>
            <div className="object-link-35">
              <div className="background-36">
                <span className="price-37">
                  от {getConcertValue("price8") || "1 500"}
                </span>
              </div>
            </div>
            <div className="sx-38" />
            <div className="overlay-39" />
          </div>
        </div>
        <div className="flex-row-f">
          <span className="heading-mongol-shuudan">
            {getConcertValue("title5") || "Монгол Шуудан"}
          </span>
          <span className="heading-ak-tgk">
            {getConcertValue("title7") || "АК-47 х TGK"}
          </span>
          <span className="heading-cupsize">
            {getConcertValue("title8") || "Cupsize"}
          </span>
          <span className="orchestra-cagmo">
            {getConcertValue("title6") || "Оркестр CAGMO"}
          </span>
        </div>
        <div className="group" />
      </div>
    </>
  );
}