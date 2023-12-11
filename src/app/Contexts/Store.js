"use client"

import Request from "@/Request";
import { createContext, useContext, useState, useEffect } from "react"

export const resultContext = createContext();


export const Store = ({children})=> {
    const [searchTerm, setSearchTerm] = useState('pokemon')
    const [pageToken, setPageToken] = useState('')
    const [datas, setDatas] = useState({})
    const [videos, setVideos] = useState([])

    useEffect(()=> {
        Request.get('/', {
            params: {
                q: searchTerm,
                pageToken: pageToken
                
            }
        }).then(res=> {
            console.log(res.data)
            setVideos(res.data?.items)
            setDatas(res.data)
        })
    }, [searchTerm, pageToken])

    return(
        <resultContext.Provider value={{searchTerm, videos, datas, setPageToken, setSearchTerm, setVideos}}>
            {children}
        </resultContext.Provider>
    )
  
}

