import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";

const Body = () => {
    const [ listItems, setListItems ] = useState([])
    const [ filterData, setFilterData ] = useState([])
    const [ search, setSearch ] = useState("")
 
    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data?.json()
      setListItems(json?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterData(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listItems?.length === 0){
      return <Shimmer />
    }

    return (
      <div className="body">
        <div className="filter">
          <input className="search-box" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={() => {
            const data = listItems?.filter((item) => {
              return item?.info?.name?.toLowerCase()?.includes(search?.toLowerCase())
            })
            setFilterData(data)
          }}>Search</button>
            <button className="filter-btn" onClick={() => {
                const list = listItems.filter(item => item.info.avgRating > 4.3)
                setListItems(list)
            }}>Filter Top Restaurants</button>
        </div>
        <div className="res-container">
          {filterData?.map((item) => (
            <RestaurantCard data={item} key={item?.info?.id} />
          ))}
        </div>
      </div>
    );
};

export default Body
  