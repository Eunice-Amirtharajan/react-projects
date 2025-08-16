import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";

const Body = () => {
  const [resList, setRestaurantList] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);
  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/restaurants/list/v5?lat=12.968312&lng=77.730769&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Restaurant data:", json);

      if (json?.data?.cards) {
        // Find the card that contains the restaurant list
        const restaurantList = json.data.cards.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restaurantList) {
          setRestaurantList(restaurantList);
          setFilteredResList(restaurantList);
        } else {
          console.log("No restaurant data found in the response");
        }
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };
  const filterRestaurants = () => {
    const filteredRestaurantsList = resList.filter(
      (res) => res?.info?.avgRatingString > 4.5
    );
    setRestaurantList(filteredRestaurantsList);
  };

  const searchRestaurants = () => {
      const searchResult = resList.filter((res) =>
        res?.info?.name?.toLowerCase().includes(searchData.toLowerCase())
      );
      console.log("SEARCG RES", searchResult);
      setFilteredResList(searchResult);
  };
  if (resList.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <div>
      <input
        type="text"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      ></input>
      <button className="search-btn" onClick={searchRestaurants}>
        Search
      </button>
      <button className="filter-btn" onClick={filterRestaurants}>
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {filteredResList?.map((restaurant) => (
          <RestaurantCards key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
