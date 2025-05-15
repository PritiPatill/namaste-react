import { useEffect, useState } from 'react'
import { RESTAURANT_MENU_LINK } from './constants'


const useRestaurantsMenu = (restId) => {

    const [restInfo, setRestInfo] = useState()

    useEffect(() => {
            fetchMenu()
    },[])
    
    const fetchMenu = async() => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restId}`)
        const json = await response.json()
        setRestInfo(json.data)
    }

    return restInfo
}

export default useRestaurantsMenu