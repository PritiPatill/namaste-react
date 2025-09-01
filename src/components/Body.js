import resObj from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"
import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [ listItems, setListItems ] = useState([])
    const [ filterData, setFilterData ] = useState([])
    const [ search, setSearch ] = useState("")

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
 
    useEffect(() => {
      console.log("inside use effect")
      fetchData()
    }, [])

    const fetchData = async () => {
      const data  = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.9974&lng=79.0011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data?.json()
      setListItems(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterData(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus()

    if(!onlineStatus) return  <h1>Looks like you're offline!! Please check your internet connection</h1>

    if(listItems?.length === 0){
      return <Shimmer />
    }

    return (
      <div className="body">
        <div className="filter flex">
          <div className="m-4 p-4">
          <input data-testid="searchInput" className="border border-solid border-black" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className="m-4 px-4 py-2 bg-green-200 rounded" onClick={() => {
            const data = listItems?.filter((item) => {
              return item?.info?.name?.toLowerCase()?.includes(search?.toLowerCase())
            })
            setFilterData(data)
          }}>Search</button>
          </div>
          <div className="m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-green-100 m-4 rounded" onClick={() => {
                const list = listItems.filter(item => item.info.avgRating > 4.3)
                setListItems(list)
            }}>Filter Top Restaurants</button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filterData?.map((item, index) => (
            <Link key={index} to={`/restaurants/${item?.info?.id}`}>
              {
                item?.info?.avgRating > 4.3 ? <RestaurantCardPromoted data={item} key={item?.info?.id}/> : <RestaurantCard data={item} key={item?.info?.id} />
              }
            
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Body
  