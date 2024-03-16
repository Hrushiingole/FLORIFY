import axios from 'axios';
import React, { useState } from 'react'

export default function GoogleMaps() {
    const [loc,setLoc]=useState();
    const [lat,setLat]=useState()
const findMyState=()=>{
    const status =document.querySelector('.status')
   
    
    const success=(position)=>{
        console.log(position);
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;

        const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(geoApiUrl)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            if(data.latitude===undefined){

            }
            else{
                setLat(data.latitude);
                console.log(lat)
            }
        })

    }
    const error=()=>{
        status.textContent='Unable to retrive your location'
    }
    
    navigator.geolocation.getCurrentPosition(success,error);
}
    


  return (
    <>
        <div className="contain2">
            <h1 className="status"></h1>
            <button className='find-state'> <button onClick={()=>findMyState()}>Find My state</button></button>
        </div>
    </>
  )

  
}


