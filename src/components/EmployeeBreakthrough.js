import React, { useState } from "react";
import { slideData } from "../data/EmployeesData";

const EmployeeBreakthrough = () => {
  const [activeSlide, setActiveSlide] = useState(0);

 

  const handlePrevClick = () => {
    setActiveSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="til">
        <div className="till-img">
          <img src={slideData[activeSlide].limage} alt="Employee" />
        </div>
        <div className="till-max">
          <div className="slide-p-header">
            <h1 className="font-face-futur-md-bt">{slideData[activeSlide].name}</h1>
            <p className="font-face-futur-BK">{slideData[activeSlide].role}</p>
          </div>
          <div className="slide-p-paragraph font-face-futur-BK">
            <p>{slideData[activeSlide].text}</p>
          </div>
          <div className="slide-p-tabs" style={{ position: "relative" }}>
            <div className="readmore-p font-face-futur-md-bt">
              Read more such stories
            </div>
            <div
              className="tabs-nav-slides"
              id="sliderContainer"
              style={{ cursor: "grab" }}
            >
              {slideData.map((_, index) => (
                <div
                  key={index}
                  className={`tab-card-slide ${
                    activeSlide === index ? "active" : ""
                  }`}
                  style={
                    activeSlide === index
                      ? { border: "2px solid rgb(255, 0, 0)", opacity: 1 }
                      : {}
                  }
                  onClick={() => setActiveSlide(index)}
                >
                  <img
                    src={slideData[index].image}
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                transform: "translateY(-50%)",
              }}
            >
              <button
                onClick={handlePrevClick}
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  border: "none",
                  padding: 10,
                  cursor: "pointer",
                  fontSize: 20,
                  position: "absolute",
                  left: 0,
                }}
              >
                &lt;
              </button>
              <button
                onClick={handleNextClick}
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  border: "none",
                  padding: 10,
                  cursor: "pointer",
                  fontSize: 20,
                  position: "absolute",
                  right: 0,
                }}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeBreakthrough;
