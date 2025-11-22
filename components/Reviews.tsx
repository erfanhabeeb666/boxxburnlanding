'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  {
    name: 'George',
    text: 'One of the best gyms in Cochin… focuses on muscle training, calisthenics, flexibility, core strength, large parking space and excellent management. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Vaishakh',
    text: 'Group classes are one of the best… staged for progressive fitness, more technical sessions done injury-free. I look forward to group classes every day.',
    rating: 5,
  },
  {
    name: 'Piyush',
    text: 'Best in class… must join to earn your health. The best team in Kerala.',
    rating: 5,
  },
  {
    name: 'Prashin',
    text: 'More than just a gym… great ambiance, variety of fitness options, could be your second home.',
    rating: 5,
  },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" className="py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-secondary">What Our</span>{' '}
            <span className="text-accent">Community Says</span>
          </h2>
          <p className="text-secondary-grey text-lg md:text-xl max-w-3xl mx-auto">
            Real experiences from real members who've made Boxxburn their second
            home.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-primary border-2 border-accent/20 p-8 md:p-12 min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-secondary text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-medium">
                  "{reviews[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-2xl font-bold">
                      {reviews[currentIndex].name[0]}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-secondary font-bold text-lg">
                      {reviews[currentIndex].name}
                    </div>
                    <div className="text-secondary-grey text-sm">Member</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent/20 hover:bg-accent text-secondary flex items-center justify-center transition-all duration-200 z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent/20 hover:bg-accent text-secondary flex items-center justify-center transition-all duration-200 z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-accent/30 hover:bg-accent/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Reviews Grid (Desktop) */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mt-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary border-2 border-accent/20 rounded-xl p-6 hover:border-accent transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-secondary-grey mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="text-accent font-bold">{review.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

