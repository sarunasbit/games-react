import {useEffect, useState} from "react";

const API_ENDPOINT = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_GAME_KEY}`;

const getGame =(urlParams)=>{
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState({show: false, msg: ""});
    const[data, setData] = useState(null);

    const fetchGames = async (url)=> {
        setIsLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            if(data.results && data.results.length > 0){
                setData(data.results || data)
                setError({show: false, msg: ''})
                console.log(data)
            }else{
                setError({show: true, msg: ''})
            }
            setIsLoading(false);
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchGames(`${API_ENDPOINT}${urlParams}`)
    },[urlParams])
    return {isLoading, error, data}
}
export default getGame