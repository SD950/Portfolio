import React, {useEffect} from 'react'
import sdlogo from "../assets/sd-logo.png"
import './preloader.css'
import {preLoaderAnim} from '../animations'

const PreLoader = () => {
    useEffect(()=>{
            preLoaderAnim()
    },[]);
    return (
        <div className = "preloader">
            <div className = "texts-container">
                <span><img src={sdlogo} className="App-logo" alt="sdlogo" /></span>
            </div>

        </div>
    )
}

export default PreLoader