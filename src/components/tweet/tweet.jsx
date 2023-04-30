import React, { useState } from "react";
import { SlPicture } from "react-icons/sl";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";
import { images } from "../../atoms/atoms";
import { AiOutlineSchedule } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import Button from "@mui/material/Button";
import Avatar from "@mui/joy/Avatar";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export default function Tweet() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 50));

  const [images, setImages] = useState([]);
  useEffect(() => {
    dataFetch();
  }, []);
  function dataFetch() {
    fetch("./users.json")
      .then((r) => r.json())
      .then((data) => setImages(data));
  }
  console.log("images............", images);

  return (
    <div
      style={{
        borderTop: "3px solid #f7f9f9",

        boxShadow: "",
        display: "flex",
        width: "100%",
        height: "27vh",
        paddingRight: "7px",

        borderRadius: "5px",
      }}
    >
      <div>
        <Avatar
          sx={{ marginTop: "5px", marginLeft: "4px" }}
          alt="Remy Sharp"
          src={images.length && images[random].image}
        />
      </div>
      <div
        style={{
          marginTop: "1%",
          width: "50vw",
          marginLeft: "2%",
          marginTop: "2%",
        }}
      >
        <div style={{ marginTop: "4px", paddingTop: "0.2rem" }}>
          <input
            type="textarea"
            style={{
              width: "30vw",
              height: "8vh",
              border: "1px solid white",
              fontFamily: "sans-serif",
              fontSize: "20px",
              outline: "none",
            }}
            placeholder="What's Happening??"
          />
        </div>
        <div
          style={{
            marginTop: "12px",

            marginBottom: "5%",
          }}
        >
          <div
            style={{
              width: "50%",
              fontFamily: "serif",
              color: "#1da1f2",
            }}
          >
            <LanguageOutlinedIcon
              style={{ fontSize: "0.9rem", marginRight: "0.2rem" }}
            />
            EveryOne Can Reply
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              width: "15vw",
              marginTop: "0.5rem",
              padding: "0.2rem",
            }}
          >
            <SlPicture style={{ color: "1da1f2", fontSize: "20px" }} />
            <MdOutlineGifBox style={{ color: "1da1f2", fontSize: "20px" }} />
            <MdOutlinePoll style={{ color: "1da1f2", fontSize: "20px" }} />
            <SentimentSatisfiedAltIcon
              style={{ color: "1da1f2", fontSize: "20px" }}
            />
            <FmdGoodOutlinedIcon
              style={{ color: "1da1f2", fontSize: "20px" }}
            />
            <AiOutlineSchedule style={{ color: "1da1f2", fontSize: "20px" }} />
          </div>
          <div>
            <button
              style={{
                marginRight: "20px",
                width: "100%",
                padding: "10px",
                borderRadius: "25px",
                border: "none",
                backgroundColor: "#1da1f2",
                color: "white",
                fontSize: "15px",
              }}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
