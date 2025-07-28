import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantsMenu from "../utils/useRestaurantsMenu"
import RestaurantCategory from "./RestaurantCategory"

export const RestaurantMenu = () => {

    const [itemIndex, setItemIndex] = useState(0)

    const {restId} = useParams()

    const restInfo = useRestaurantsMenu(restId) ?? null

    console.log("restInfo : ",restInfo)


    if(restInfo === null) return <Shimmer />


    const {name, cuisines , cloudinaryImageId, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info || {}

    const { itemCards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {}

    const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center">
            <h1 className="font-bold m-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {
                categories.map((category, index) => <RestaurantCategory key={index} data={category?.card?.card} showItem={index === itemIndex} setItemIndex={() => setItemIndex(index === itemIndex ? null : index)}/>)
            }
        </div>
    )
}