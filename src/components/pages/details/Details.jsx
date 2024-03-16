import React, { useState, useEffect } from "react";
import "./style.scss";
import plant from "../../../assets/plant.jpeg";
import { fetchDataFromApi } from "../../utils/api";
import plantData from "../../data/data.js";
import { useNavigate } from "react-router-dom";
import {Button} from '@mui/material';
import GoogleMaps from "../../googleMaps/GoogleMaps.jsx";
import { useContext } from "react";
// import { locationLat,locationLon } from "../../googleMaps/GoogleMaps.jsx";
import { DataContext } from "../../context/DataProvider.jsx";
export default function Details() {
  const {item, setItem} = useContext(DataContext);
  const [loading, setLoading] = useState(false);
const [city,setCity]=useState();
const [submit,setSubmit]=useState(false);
const [query,setQuery]=useState("")
const [max,setMax]=useState(0);
const [min,setMin]=useState(0);
const [plant,setPlant]=useState();
  //    const key='sk-wrGr65f36dddca63a4592'
  //    const BASE_URL=`https://perenual.com/api/species/details/[ID]?key=${key}`;

     const fetchInitialData=async ()=>{
    //   setLoading(true);
    //   fetchDataFromApi(BASE_URL)
    //   .then((res)=>{
    //      let {data}=res;
    //     setItem(data);
    //     console.log(data);
    //     setLoading(false);


    }
    const navigate=useNavigate();
    
  useEffect(() => {
    // fetchInitialData();
    const { data } = plantData;
    setPlant(data);
    // console.log(item);
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDXVqnhZFH97V8j-8XF5BZYpHkRNP_9dbQ&callback=initMap";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  // useEffect(()=>{
  //   searchLocation();
  // },[locationLat,locationLon])

  

const handleOnClick=(id)=>{
    
    navigate(`/plantDetails/${id}`);

}






  function sunlight(value) {
    let a = value.sunlight;
    let d = "";
    for (const x of a) {
      d += x + ",";
    }
    d = d.slice(0, d.length - 1);
    return d;
  }


  const searchLocation=()=>{
    var pincode = document.getElementById("pincode").value;
    var latitude = 44.32; 
    var longitude = 12.21;
   
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 8
    });
    var marker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map,
        title: 'Location'
    });
}

let m=0;
let n=0;

const searcQueryHandler=(event)=>{
  if(event.key==="Enter" && query.length>0){
      console.log(query)
      
      fetchDataFromApi("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Nashik?unitGroup=us&include=days%2Ccurrent&key=ZW6XLPDNV5S3GCGY89LMD7WCS&contentType=json")
        .then((res)=>{
           setItem(res.days)
           console.log(item)
          for(let i of item){
            m+=i.tempmax;
            n+=i.tempmin;

          }
          m=m/15;
          n=n/15;
          console.log(m)
          console.log(n)
          // setMax(m/15);
          // setMin(n/15);
          // console.log(max)
          // console.log(min)
        })
    }
};






  return (<>
   {/* <GoogleMaps/> */}
  

    <div className="contain1">
        <h1>Search Location by Pincode</h1>
        <form id="pincodeForm" className="form-group">
            <input type="text" id="pincode" placeholder="Enter Pincode"/>
            <button type="button" className="buttonstyle" onClick={()=>searchLocation()}>Search</button>
        </form>
        <div id="map"></div>
    </div>
  
      
    
    

    



{/* 
      <input type="text" placeholder="Enter your city name" onKeyUp={searcQueryHandler} 
             onChange={(e)=>setQuery(e.target.value)} />
      <button >submit</button> */}

    <div className="cont">
      <ul className="plant-list">
        {plant?.map((value) => (
          <li className="plant-item">
            <div className="plant-img">
              <img src={value?.default_image?.medium_url} alt="Plant Image" />
            </div>
            <div className="plant-details">
              <div className="plant-name">Name:{value?.common_name}</div>
              <div className="plant-common-name">other name:</div>
              <div className="plant-optimal-sunlight">
                Optimal Sunlight:
                {/* <span style={{ color: "#828282" }}>{sunlight(value)}</span> */}
              </div>
              <div className="plant-pruning-month">caring level: <span>{value?.caring_level}</span></div>
              <div className="plant-flowering-season">
                watering level:
                <span style={{ color: "#828282" }}>{value?.watering}</span>
              </div>
              <div className="plant-care-level">Care Level</div>
              <Button variant="contained" style={{marginTop:20,fontSize:15}} onClick={()=>handleOnClick(value?.id)}>Show Details</Button>
            </div>
          </li>
        ))}

      </ul>
    </div>
    </>
  );
}
