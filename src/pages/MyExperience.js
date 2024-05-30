import React from "react";
import homeImg from "../images/home_img.webp";

const WeatherReport = () => {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <div
        style={{
          width: "50vw",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            textAlign: "justify",
            padding: "0 0 0 20vh",
            fontSize: "3vh",
          }}
        >
          <div
            style={{
              border: "3px dashed magenta",
              padding: "2vh",
              borderRadius: "20px",
            }}
          >
            <center style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Raindrops and Reverie...
            </center>
            On a rainy evening, I curled up by the window with a cup of hot
            cocoa, the sound of raindrops tapping gently on the glass. The soft
            glow of the lamp cast a warm light over my favorite book, filling
            the room with a cozy ambiance. Outside, the garden sparkled as
            raindrops clung to leaves and petals, creating a magical scene. The
            scent of rain mixed with the fresh aroma of the earth wafted through
            the open window, bringing a smile to my face. In the distance, the
            soft rumble of thunder added a soothing rhythm to the evening. I
            glanced at my cat, Luna, who was purring contentedly on my lap,
            enjoying the serene moment. I felt a deep sense of peace and
            contentment, knowing that these rainy evenings were perfect for
            unwinding. As I turned a page, I couldn't help but appreciate the
            simple beauty of a rainy night. I wished for more evenings like
            this, where the world outside seemed to pause, letting me savor
            every delightful moment.
          </div>
        </p>
      </div>
      <div
        style={{
          width: "50vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={homeImg}
          alt="Beautiful scenic view of home"
          style={{ height: "70vh", width: "85vh", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default WeatherReport;
