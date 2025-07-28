import { useState } from "react"
import {LOGO_URL } from "../utils/constants"
import { Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus"
import { useSelector } from "react-redux"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
     const onlineStatus = useOnlineStatus()

     const {items} = useSelector(store => store.cart)
    return(
        <div className='flex justify-between shadow bg-pink-100'>
            <div className='logo-container'>
                <img className='w-40' src={LOGO_URL} />
            </div>
            <div className='nav-items flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className=" px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className=" px-4"><Link to="/">Home</Link></li>
                    <li className=" px-4"><a href="/about">About Us</a></li>
                    <li className=" px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className=" px-4 font-bold text-xl"><Link to="/cart">Cart ({items.length} Items)</Link></li>
                    <button className="button" onClick={() => btnName === "Login" ? setBtnName("Logout"): setBtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header