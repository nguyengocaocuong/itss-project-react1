import { useEffect, useState } from "react"

function useStorageData(key) {
    const [data, setData] = useState([])
    // useEffect(() => {
    //     console.log(JSON.parse(localStorage.getItem(key)))
    //      setData(JSON.parse(localStorage.getItem(key)))
    // }, [])
    const putData = (value) => {
        localStorage.setItem(key, JSON.stringify([...data, value]))
        setData([...data, value])
    }
    return [data, putData]
}


export default useStorageData