import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantsMenu from "../utils/useRestaurantsMenu"

export const RestaurantMenu = () => {

    const {restId} = useParams()

    const restInfo = useRestaurantsMenu(restId)

    if(restInfo === null) return <Shimmer />

    const {name, cuisines , cloudinaryImageId, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info

    const { itemCards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    console.log("itemCards : ",itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((item, index) => (<li key={index}>{item?.card?.info?.name}</li>) )
                }
            </ul>
        </div>
    )
}