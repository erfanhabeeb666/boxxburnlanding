'use client'

import { motion } from 'framer-motion'
import { Instagram, Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-primary-dark border-t-2 border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About BxB */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">BxB</span>{' '}
              <span className="text-secondary">| Boxxburn</span>
            </h3>
            <p className="text-secondary-grey mb-4 leading-relaxed">
              Your Second Home. A community-driven functional fitness gym in
              Kochi, powered by the revolutionary{' '}
              <span className="text-accent font-semibold">#theX5method</span>.
            </p>
            <div className="flex items-center gap-2 text-accent font-semibold">
              <span>#theX5method</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-secondary-grey hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-secondary-grey hover:text-accent transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="text-secondary-grey hover:text-accent transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="text-secondary-grey hover:text-accent transition-colors"
                >
                  Location & Timings
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-secondary">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://instagram.com/boxxburn.bxb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-grey hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@boxxburn.bxb</span>
              </a>
              <div className="flex items-center gap-3 text-secondary-grey">
                <Phone className="w-5 h-5" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-grey">
                <Mail className="w-5 h-5" />
                <span>info@boxxburn.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-primary border-2 border-accent rounded-2xl p-8 md:p-12 text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
            Ready to Start Your Journey?
          </h3>
          <p className="text-secondary-grey text-lg mb-8 max-w-2xl mx-auto">
            Book your free workout trial and experience the Boxxburn difference.
            Your second home awaits.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/50"
          >
            Book Your Free Workout
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-accent/20 pt-8 text-center">
          <p className="text-secondary-grey text-sm">
            © {currentYear} Boxxburn Kakkanad (BxB). All rights reserved. |{' '}
            <span className="text-accent">#theX5method</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

