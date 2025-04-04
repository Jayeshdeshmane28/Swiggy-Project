import { useState,useEffect } from "react";

import React from 'react'

const useOnline = () => {
    let [isOnline,setIsOnline]=useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true)
        })

        window.addEventListener("offline",()=>{
            setIsOnline(false)
        })
    },[])

  return isOnline
}

export default useOnline

