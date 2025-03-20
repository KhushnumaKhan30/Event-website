"use client"

import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"
import Link from "next/link"

// Set the target date for the countdown (30 days from now)
const getTargetDate = () => {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 18)
  return targetDate
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

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
    <div className="w-full bg-[#f03b9e] text-white p-3 rounded-xl flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto my-4">
      <div className="mb-4 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold">Hurry Up!</h2>
        <p className="text-xl md:text-2xl font-semibold">Register Now</p>
      </div>

      <div className="flex space-x-2 md:space-x-4 mb-4 md:mb-0">
        <div className="bg-white text-black rounded-xl p-3 md:p-2 flex flex-col items-center justify-center min-w-[70px] md:min-w-[80px]">
          <span className="text-2xl md:text-4xl font-bold">{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="text-xs md:text-sm font-medium">DAYS</span>
        </div>

        <div className="bg-white text-black rounded-xl p-3 md:p-4 flex flex-col items-center justify-center min-w-[70px] md:min-w-[80px]">
          <span className="text-2xl md:text-4xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="text-xs md:text-sm font-medium">HRS</span>
        </div>

        <div className="bg-white text-black rounded-xl p-3 md:p-4 flex flex-col items-center justify-center min-w-[70px] md:min-w-[80px]">
          <span className="text-2xl md:text-4xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="text-xs md:text-sm font-medium">MINS</span>
        </div>

        <div className="bg-white text-black rounded-xl p-3 md:p-4 flex flex-col items-center justify-center min-w-[70px] md:min-w-[80px]">
          <span className="text-2xl md:text-4xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="text-xs md:text-sm font-medium">SECS</span>
        </div>
      </div>

      <div className="flex items-center">
        <MapPin className="w-8 h-8 mr-2" />
        <Link href="#" className="text-sm md:text-base font-medium underline">
          Department Of Computer Science
          <br />
          AMU,Aligarh
        </Link>
      </div>
    </div>
  )
}

