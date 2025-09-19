import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

function Service() {
  const [showPricing, setShowPricing] = useState(false)

  const pricingPlans = [
    {
      name: "Starter",
      price: "2100₹",
      period: "/month",
      features: [
        "Access to basic features",
        "Event Updates",
        "Resume review",
        "4:1 personal meet",
        "Alumni Talk: 10 min",
        "Connect to 50 Alumni"
      ]
    },
    {
      name: "Active Guider",
      price: "3100₹",
      period: "/month",
      popular: true,
      features: [
        "All Starter features",
        "Event Updates",
        "Resume review",
        "2:1 personal meet",
        "Alumni Talk: 60 min",
        "Connect to 100 Alumni"
      ]
    },
    {
      name: "Super buffet",
      price: "5100₹",
      period: "/month",
      features: [
        "All Features",
        "Event Updates",
        "Resume review",
        "1:1 personal meet",
        "Alumni Talk: infinite",
        "Connect to Unlimited Alumni"
      ]
    }
  ]

  return (
    <div id='services' className='min-h-screen mb-0 mt-40 md:mt-20'>
      <div className="">
        <section className="relative pt-12 overflow-hidden bg-black sm:pt-16">
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p initial={{y:-50,opacity:0}} transition={{duration:1}} whileInView={{y:0,opacity:1}} className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                 "1200+ Alumni at our AMS"
                </span>
              </motion.p>
              <motion.h1 initial={{x:-200,opacity:0}} transition={{duration:1}} whileInView={{x:0,opacity:1}} className="mt-8 text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Connect & grow Anywhere 
              </motion.h1>

              <motion.div initial={{y:50,opacity:0}} transition={{duration:1}} whileInView={{y:0,opacity:1}} className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
                <div  className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="#"
                    title=""
                    className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto"
                    role="button"
                  >
                    Connect 14 Days Free
                  </a>
                </div>

                <button
                  onClick={() => setShowPricing(true)}
                  className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white cursor-pointer"
                >
                  Prices future
                </button>
              </motion.div>
            </div>

            <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
              <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
                <svg
                  className="blur-3xl filter"
                  style={{ filter: "blur(64px)" }}
                  width="645"
                  height="153"
                  viewBox="0 0 645 413"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                    fill="url(#d)"
                  />
                  <defs>
                    <linearGradient
                      id="d"
                      x1="665.741"
                      y1="178.506"
                      x2="296.286"
                      y2="474.62"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" style={{ stopColor: "var(--color-cyan-500)" }} />
                      <stop offset="100%" style={{ stopColor: "var(--color-purple-500)" }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full opacity-50"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                  alt=""
                />
              </div>

              <img
                className="relative w-full md:mb-0 mb-30 max-w-5xl mx-auto"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/4/dashboard-mockup.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>

      {/* Pricing Popup Modal */}
      <AnimatePresence>
        {showPricing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-75 backdrop-blur-sm"
            onClick={() => setShowPricing(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setShowPricing(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full"
              >
                ×
              </button>

              {/* Pricing cards container */}
              <div className="bg-black border border-gray-800 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Choose Your Plan</h2>
                  <p className="text-gray-400">Select the perfect plan for your needs</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {pricingPlans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className={`relative  border ${
                        plan.popular 
                          ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                          : 'border-gray-700'
                      } rounded-xl p-6 hover:border-gray-600 transition-all duration-300`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Many Like this
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-white">{plan.price}</span>
                          <span className="text-gray-400 ml-1">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 
                        bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 hover:border-gray-500 
                      ">
                        Get Started
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Service