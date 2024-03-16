import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
// import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/contentWrapper";
import { Button } from "@mui/material";






const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
//   const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])

const controlNavbar=()=>{
  if(window.scrollY>200){
    if(window.scrollY>lastScrollY && !mobileMenu){
      setShow("hide")
    } 
    else{
      setShow("show")
    }
    
  }else{
    setShow("top");
  }
  setLastScrollY(window.scrollY);
};

  useEffect(()=>{
    window.addEventListener("scroll",controlNavbar)
    return()=>{
      window.removeEventListener("scroll",controlNavbar);
    }
  },[lastScrollY])



  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const handleOnClick=()=>{
    navigate('/login');
  }

  

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      
        <div className="logo" onClick={()=>navigate("/")}>
          <img src={logo} alt="" />
          <p style={{color:'#fff',fontSize:39}}>Florify</p>
        </div>
        <ul className="menuItems">
        <Button variant="contained" style={{fontWeight:600,fontSize:20}} onClick={()=>handleOnClick()}>Login</Button>
          <li className="menuItem" onClick={()=>navigate("/details")} style={{fontSize:20}}>
            Plant Shop
          </li>
          
          <li className="menuItem" style={{fontSize:20}}>
            About
          </li>
          <li className="menuItem" style={{fontSize:20}}>
            Contact
          </li>
         
        </ul>
       
      
      

    </header>
  );
};

export default Header;
