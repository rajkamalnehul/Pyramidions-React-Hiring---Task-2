/** @format */

import React from "react";
import CommonCard from "./CommonCard";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ restaurants }] = useStateValue();
  //console.log("list", restaurants);
  return (
    <div className="container">
      {restaurants.map((restaurant) => (
        <CommonCard
          path={`/outlets/${restaurant.restaurantId}`}
          outletDisabled={true}
          restaurantImage={restaurant.restaurantImage}
          restaurantName={restaurant.restaurantName}
          time={restaurant.displayTime}
          costForTwo={restaurant.displayCostForTwo}
          cft={restaurant.costForTwo}
          outlets={restaurant.outlet}
          review={restaurant.averageReview}
        />
      ))}
    </div>
  );
}

export default Home;
