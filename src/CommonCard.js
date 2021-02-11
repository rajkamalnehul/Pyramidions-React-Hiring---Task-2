/** @format */

import React from "react";
import "./commoncard.css";
import Restaurant from "./assets/rest.png";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Link } from "react-router-dom";

function CommonCard(props) {
  const {
    outletDisabled,
    restaurantImage,
    restaurantName,
    time,
    costForTwo,
    cft,
    outlets,
    review,
    path,
  } = props;
  return (
    <div className="card-cont  mb-5">
      <div className="card card-border">
        <img
          src={restaurantImage ? restaurantImage : Restaurant}
          className="card-img-top res-img"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="row">
            <div className="col-lg-10 col-sm-9">
              <h5 className="card-title">
                {restaurantName ? restaurantName : "Card Tittle"}
              </h5>
            </div>
            <div className="col-lg-2 col-sm-3">
              <div className=" review-container">
                <StarRateIcon />
                <h6>{review ? review : "0"}</h6>
              </div>
            </div>
          </div>

          <h5 className="text-muted mb-3">North Indian, Chinese</h5>
          <div className="row ">
            <div className="col-lg-3 col-sm-4">
              <strong>{time ? time : "time"}</strong>
            </div>
            <div className="col-lg-3 col-sm-4">
              <strong>{cft ? costForTwo : ""}</strong>
            </div>
            {outletDisabled && outlets.length > 1 ? (
              <div className="col-lg-5 col-sm-4 card-outlets">
                <Link
                  to={path}
                  style={{ textDecoration: "none", color: "#ff6600" }}
                >
                  <strong> {outlets.length} Outlets near you</strong>
                  <ArrowForwardIosIcon style={{ color: "black" }} />
                </Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonCard;
