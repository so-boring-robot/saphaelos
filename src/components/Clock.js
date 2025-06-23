import { useState, useEffect } from "react";

function Clock(){
    const [time, setTime] = useState(new Date());
    useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(intervalId); // nettoyage à la désactivation
  }, []);

    return(
        <div className="text-xs text-gray-800">{time.toLocaleTimeString()}</div>
    )
}

export default Clock