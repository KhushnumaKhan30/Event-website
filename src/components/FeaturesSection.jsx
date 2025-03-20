"use client"

import { User, Network, HelpCircle, Gift } from "lucide-react"
import CountdownTimer from "./CountDownTimer"

export default function FeaturesSection() {
  const features = [
    {
      icon: <User className="w-12 h-12 mb-4" />,
      title: "Experienced Speaker",
      description: "anunknown printer took galley type and scrambled type specimen book survived.",
    },
    {
      icon: <Network className="w-12 h-12 mb-4" />,
      title: "Live Workshop Program",
      description: "anunknown printer took galley type and scrambled type specimen book survived.",
    },
    {
      icon: <HelpCircle className="w-12 h-12 mb-4" />,
      title: "Exciting Q&A Sessions",
      description: "anunknown printer took galley type and scrambled type specimen book survived.",
    },
    {
      icon: <Gift className="w-12 h-12 mb-4" />,
      title: "Exiting Giveaways Program",
      description: "anunknown printer took galley type and scrambled type specimen book survived.",
    },
  ]

  return (
    <section className="relative w-full bg-[#5033FE] text-white py-5 px-4">
      <CountdownTimer />
      <div className="max-w-7xl mx-auto px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left py-8">
              {feature.icon}
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-4 right-4 p-2 text-white"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </section>
  )
}

