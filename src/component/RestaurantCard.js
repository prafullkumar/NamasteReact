import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = restData?.info;
  return (
    <div className="restaurant-card">
      <div className="restaurant-Name">
        <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4> {costForTwo}</h4>

        <h4>{deliveryTime} mins</h4>
      </div>
      <div className="restaurant-image">
        <img />
      </div>
    </div>
  );
};
export default RestaurantCard;
