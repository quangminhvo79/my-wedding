import { useEffect, useState } from "react";

export default function Loading() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHide(true)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  if (hide) return null

  return (
    <div className={`loader transition-opacity duration-1000 ${hide ? 'opacity-0' : ''}`}>
      <div className="loader-inner flex justify-center">
        <svg width="120" height="220" viewBox="0 0 100 100" className="loading-spinner" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="spinner" cx="50" cy="50" r="21" fill="#ffffff" stroke-width="2"/>
        </svg>
      </div>
    </div>
  )
}