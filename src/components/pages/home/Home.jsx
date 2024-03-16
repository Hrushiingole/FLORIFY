import React from 'react'
import bg from '../../../assets/bg.png'
import Img from '../../lazyLoding/img'
import leaf from '../../../assets/leaf.png'
import './style.scss'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    // const preloader = document.querySelector("[data-preaload]");
    // window.addEventListener("load", function () {
    //     preloader.classNameList.add("loaded");
    //     document.body.classNameList.add("loaded");
    // });


    const navigate=useNavigate()
    
  return (<>
   <div id='topone'>
    {/* // <div className="preload" data-preaload>
    //     <div className="circle"></div>
    //     <p className="text">Florify</p>
    // </div> */} 
   <div class="quote">
        <h1>"Gardening adds years to your life and <i>life</i> to your years"</h1>
        <br/>
        <h1  style={{letterSpacing:-2}}>Let's grow-</h1>
        <h1  style={{letterSpacing:2}}>Florify.com</h1>
    </div>
    <section className="hero text-center" aria-label="home" id="home">

        <ul className="hero-slider" >

            <li className="slider-item active" >

                <div className="slider-bg">
                    <img src="https://www.thespruce.com/thmb/NDbyD3OE7ICtG9aBiEz4Jr8Fhos=/2121x1414/filters:fill(auto,1)/cropped-hands-planting-sapling-in-dirt-998567842-5c436bcd4cedfd000103d01c.jpg"
                        width="1800" height="900" alt="" className="img-cover"/>
                </div>

                <p className="label-2 section-subtitle">Floral & GLoral</p>

                <h1 className="display-1 hero-title">
                    Try out new <br/>
                    Saplings Today
                </h1>
                <br/>
                <p className="body-2 hero-text">
                     
                </p>
                <br/>
                <div className="button">
                    <button onClick={()=>navigate("/details")}  className="btn">
                        <span className="text text-1" >View Our Store</span>
                        <span className="text text-2" aria-hidden="true">Find your choice</span>
                    </button>
                </div>
                <br/>

            </li>

            <li className="slider-item" >

                <div className="slider-bg">
                    <img src="https://westernnews.media.clients.ellingtoncms.com/img/photos/2021/04/22/plant_garden_AS_1_WEB.jpg"
                        width="1880" height="950" alt="" className="img-cover"/>
                </div>

                <p className="label-2 section-subtitle">delightful experience</p>

                <h1 className="display-1 hero-title">
                    Plant Suggestions Inspired by <br/>
                    the Seasons
                </h1>

                <p className="body-2 hero-text">
                    check your sapling requirement 
                </p>
                <br/>
                <div className="button">
                    <a href="#" className="btn">
                        <span className="text text-1">View Our Store</span>
                        <span className="text text-2" aria-hidden="true">Find your choice</span>
                    </a>
                </div>
                <br/>

            </li>

            <li className="slider-item" >

                <div className="slider-bg">
                    <img src="https://www.familyhandyman.com/wp-content/uploads/2021/07/petunia-GettyImages-124108215.jpg?w=1200"
                        width="1880" height="950" alt="" className="img-cover"/>
                </div>

                <p className="label-2 section-subtitle">Attractive Beauty</p>

                <h1 className="display-1 hero-title">
                    Have Any Queries <br/>
                    -Try Quitbot
                </h1>

                <p className="body-2 hero-text">
                   
                </p>
                <br/>
                <div className="button">
                    <a href="#" className="btn">
                        <span className="text text-1">View Our Store</span>
                        <span className="text text-2" aria-hidden="true">Find your choice</span>
                    </a>
                </div>
            </li>

        </ul>
    </section>
    </div>
    {/* <script>
      {  const preloader = document.querySelector("[data-preaload]");
    window.addEventListener("load", function () {
        preloader.classNameList.add("loaded");
        document.body.classNameList.add("loaded");
    });}
    </script> */}
    
       
    
    </>

  )
}
