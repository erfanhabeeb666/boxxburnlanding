'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Calendar } from 'lucide-react'

export default function TimingsLocation() {
  return (
    <section id="location" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-secondary">Visit</span>{' '}
            <span className="text-accent">Boxxburn</span>
          </h2>
          <p className="text-secondary-grey text-lg md:text-xl max-w-3xl mx-auto">
            Located in the heart of Kakkanad, Kochi. Easy access with ample
            parking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timings Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-dark border-2 border-accent/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-secondary">Timings</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="text-secondary font-semibold text-lg">
                    Monday - Saturday
                  </span>
                </div>
                <div className="pl-7 space-y-2">
                  <div className="text-secondary-grey text-lg">
                    <span className="text-accent font-semibold">Morning:</span>{' '}
                    05:30 - 11:00
                  </div>
                  <div className="text-secondary-grey text-lg">
                    <span className="text-accent font-semibold">Evening:</span>{' '}
                    15:00 - 23:00
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-accent/20">
                <p className="text-secondary-grey">
                  Closed on Sundays. Special holiday schedules may apply.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-dark border-2 border-accent/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-secondary">Location</h3>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-secondary-grey text-lg mb-4">
                  <span className="text-accent font-semibold">Address:</span>
                </p>
                <p className="text-secondary text-xl font-medium mb-2">
                  Kakkanad, Kochi
                </p>
                <p className="text-secondary-grey">Kerala, India</p>
              </div>

              <div className="pt-6 border-t border-accent/20">
                <p className="text-secondary-grey text-sm mb-4">
                  Conveniently located in Kakkanad with easy access from major
                  areas. Nearby to other fitness centers in the region, making
                  us a top choice for functional fitness in Kochi.
                </p>
                <motion.a
                  href="https://maps.google.com/?q=Kakkanad,Kochi,Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden border-2 border-accent/20"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.789123456789!2d76.3386!3d9.9982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTknNTMuNSJOIDc2wrAyMCcxOS4wIkU!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Boxxburn Kakkanad Location"
          />
        </motion.div>
      </div>
    </section>
  )
}

