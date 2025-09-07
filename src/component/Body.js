import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  const [allRestaurantList, setallRestaurantList] = useState([]);
  const [getText, setGetText] = useState(" ");

  useEffect(() => {
    //API Call
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.979218&lng=73.842754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setallRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return allRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="search-text">
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            value={getText}
            onChange={(e) => setGetText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredList = allRestaurantList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(getText.trim().toLowerCase())
              );
              setRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="Reset"
            onClick={() => setRestaurantList(allRestaurantList)}
          >
            {" "}
            Reset{" "}
          </button>
        </div>

        <div>
          <button
            onClick={() => {
              const filterList = allRestaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setRestaurantList(filterList);
            }}
          >
            Top RESTAURANT
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
