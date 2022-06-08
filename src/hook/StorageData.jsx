import { useEffect, useState } from "react"

function useStorageData(key) {
    const [data, setData] = useState([])
    useEffect(() => {
        console.log(localStorage.getItem(key))
        setData(localStorage.getItem(key) ?localStorage.getItem(key):[])       
    }, [])
    const putData = (value)=>{
        localStorage.clear(key)
        setData([...data,value])
        localStorage.setItem(key,data)
        console.log(localStorage.getItem(key))

    }
    return [data,putData]
}


export default useStorageData