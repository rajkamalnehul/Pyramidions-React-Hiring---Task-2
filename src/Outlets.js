/** @format */

import React, { useEffect, useState } from "react";
import CommonCard from "./CommonCard";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Outlets() {
  const { Id } = useParams();
  const [{ restaurants }] = useStateValue();
  console.log(restaurants);
  return (
    <div className="container">
      {restaurants
        .filter((res) => res.restaurantId == Id)
        .map((rest) =>
          rest.outlet.map((restaurant) => (
            <CommonCard
              restaurantName={restaurant.outletName}
              outletDisabled={false}
              time={restaurant.displayTime}
              costForTwo={restaurant.displayCostForTwo}
              cft={restaurant.costForTwo}
              outlets={restaurant.outlet}
              review={restaurant.averageReview}
              restaurantImage={`https://eatoo.uberdoo.com/foodapp/public/images/${restaurant.image}`}
            />
          ))
        )}
    </div>
  );
}

export default Outlets;
//
