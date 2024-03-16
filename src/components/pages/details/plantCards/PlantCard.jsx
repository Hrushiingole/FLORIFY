import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../../utils/api';
import { DataContext } from '../../../context/DataProvider';
import './style.scss'
import { detailedPlantData } from '../../../data/data';
export default function PlantCard() {
    // const {item, setItem} = useContext(DataContext);
    const [plant,setPlant]=useState({});
    const {id}=useParams();


  // console.log(item)
 const URL= `https://perenual.com/api/species/details/${id}?key=sk-wrGr65f36dddca63a4592`;

 const fetchInitialData=async ()=>{
    
      fetchDataFromApi(URL)
      .then((res)=>{
         
        setPlant(res)
        console.log(plant);
       


    })
}
useEffect(()=>{
fetchInitialData();
// setPlant(detailedPlantData);
// console.log(plant)
},[])

function leafDetails(value) {
  let a = value?.pruning_month;
  let d = "";
  for (const x of a) {
    d += x + " , ";
  }
  d = d.slice(0, d.length - 1);
  return d;
}
function lDetails(value) {
  let a = value?.leaf_color;
  let d = "";
  for (const x of a) {
    d += x + " , ";
  }
  d = d.slice(0, d.length - 1);
  return d;
}
function sDetails(value) {
  let a = value?.soil;
  let d = "";
  for (const x of a) {
    d += x + " , ";
  }
  d = d.slice(0, d.length - 1);
  return d;
}

  return (
    <>

    {
      plant?(<div className="contain">
      <div className="plant-card">
          <img src={plant?.default_image?.medium_url} alt="Plant 1"/>
          <div className="plant-info">
              <h2>{plant?.common_name}</h2>
              <p>Care level:<span>{plant?.care_level}</span></p>
              {/* <p>Leaf Colors:<span>{lDetails(plant)}</span></p> */}
              <p>hardiness level:  min:<span>{plant?.hardiness?.min} , max:{plant?.hardiness?.min}</span></p>
              {/* <p>Pruning Month: <span>{leafDetails(plant)}</span></p> */}
              <p>Medicinal: <span>{plant?.medicinal?.toString()}</span></p>
              {/* <p>soil : <span>{sDetails(plant)}</span></p> */}
              <p>Description: <span>{plant?.description}</span></p>
              <a className="know-more-btn" style={{cursor:'pointer'}}>Buy Now</a>
          </div>
      </div>
  </div>):(
    <p>no data found</p>
  )
    }
   

    </>
  )
}
