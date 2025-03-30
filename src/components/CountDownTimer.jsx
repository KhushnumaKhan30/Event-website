"use client"

import { useState, useEffect } from "react"
import { MapPin, Timer } from "lucide-react"
import Link from "next/link"


export default function CountdownTimer({date}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  // Set the fixed target date and time (12 April 2025, 6 PM)
  const getTargetDate = () => {
    return new Date(date);
  }

  useEffect(() => {
    const targetDate = getTargetDate()

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Clean up the interval on component unmount
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex bg-[#4F39F6] w-fit px-2 py-1 text-white gap-2 rounded-md">
        <div className="flex gap-1">
          <Timer/>
          <span className=" font-bold">{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="">Days</span>
        </div>

        <div className="flex gap-1">
          <span className="font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="">Hrs</span>
        </div>

        <div className="flex gap-1">
          <span className="font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="">Mins</span>
        </div>

        <div className="flex gap-1">
          <span className="font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="">Secs</span>
        </div>
      </div>
  )
}
