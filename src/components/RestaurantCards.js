import { IMG_CDN } from "../utils/constants";

const RestaurantCards = (props) => {
  console.log('Props',props)
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRatingString, sla } =
    resData?.info;
    console.log('RES DATA',resData)
  return (
    <div>
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={IMG_CDN+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>ETA: {sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCards;