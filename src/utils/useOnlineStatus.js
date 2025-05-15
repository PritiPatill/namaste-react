
import { useState, useEffect } from "react"

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {

        const online  = window.addEventListener('online', () => {
            setOnlineStatus(true)
        })

        const offline = window.addEventListener('offline', () => {
            setOnlineStatus(false)
        })

    }, [])

    return onlineStatus
}

export default useOnlineStatus