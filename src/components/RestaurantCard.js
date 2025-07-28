import { CDN_LINK } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  console.log("data ----", data)
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg">
        <img
        className=" rounded-lg"
          src={`${CDN_LINK}${data?.info?.cloudinaryImageId}`}
        />
        <h3 className="font-bold py-4 text-lg">{data?.info?.name}</h3>
        <h4>{data?.info?.cuisines.join(",")}</h4>
        <h4>{data?.info?.avgRating} starts</h4>
        <h4>{data?.info?.costForTwo}</h4>
        <h4>{data?.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };


  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurantCard {...props} />
        </div>
      )

    }
  }

export default RestaurantCard