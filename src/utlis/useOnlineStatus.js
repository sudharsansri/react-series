import { useEffect, useState } from "react"

export const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{
        const handleOnline = () => {
            setIsOnline(true);
            console.log("You are online now");
        }

        const handleOffline = () => {
            setIsOnline(false);
            console.log("You are offline now");
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

       
    },[])

    return isOnline;

}