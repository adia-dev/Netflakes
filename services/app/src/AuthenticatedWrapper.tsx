import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function AuthenticatedWrapper() {

  const [scrollY, setScrollY] = useState(0);

  // get the path, if it is only /, then redirect to /browse
  const path = window.location.pathname;
  if (path === "/") {
    window.location.href = "/profiles";
  }

  useEffect(() => {
    if (typeof window !== "undefined") {

      const handleScroll = () => {
        const position = window.scrollY;
        setScrollY(position);
        console.log(position);
      }

      // add the event to the body when the component is mounted
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className="w-screen min-h-screen text-white">
      <div className="fixed w-screen h-screen left-0 top-0 -z-50 bg-black"></div>
      <Header scrollY={scrollY} />
      <div className="w-full h-full pt-16 z-50">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthenticatedWrapper
