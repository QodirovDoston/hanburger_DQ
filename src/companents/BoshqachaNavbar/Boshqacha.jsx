import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MessageIcon from '@mui/icons-material/Message';
import '../BoshqachaNavbar/boashqacha.css'
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <>
      <nav>
        <a href="#home" className={activeNav === '#home' ? "active" : ""}> <HomeIcon sx={{
          color: "white",
          "&:hover": { color: "blue" }
        }} /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "active" : ""} > <PersonIcon sx={{
          color: "white",
          "&:hover": { color: "blue" }
        }} /></a>
        <a href="#exproment" onClick={() => setActiveNav('#exproment')} className={activeNav === '#exproment' ? "active" : ""} > <BookmarkIcon sx={{
          color: "white",
          "&:hover": { color: "blue" }
        }} /></a>
        <a href="#test" onClick={() => setActiveNav('#test')} className={activeNav === '#test' ? "active" : ""}> <MessageIcon sx={{
          color: "white",
          "&:hover": { color: "blue" }
        }} /></a>
        <a href="#contect" onClick={() => setActiveNav('#contect')} className={activeNav === '#contect' ? "active" : ""}> <PermContactCalendarIcon sx={{
          color: "white",
          "&:hover": { color: "blue" }
        }} /></a>
      </nav>

    </>
  )
}

export default Nav