import { CDN_LINK } from "../utils/constants";

const RestaurantCard = ({ data }) => {
    return (
      <div className="res-card">
        <img
          src={`${CDN_LINK}${data?.info?.cloudinaryImageId}`}
        />
        <h3>{data?.info?.name}</h3>
        <h4>{data?.info?.cuisines.join(",")}</h4>
        <h4>{data?.info?.avgRating} starts</h4>
        <h4>{data?.info?.costForTwo}</h4>
        <h4>{data?.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

export default RestaurantCard