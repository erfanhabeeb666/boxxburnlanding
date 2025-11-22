'use client'

import { motion } from 'framer-motion'
import {
  Dumbbell,
  Zap,
  Activity,
  User,
  Target,
  Flame,
  Laptop,
  Gift,
} from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    icon: Gift,
    title: 'Free Workout Trial',
    description:
      'Experience Boxxburn with a complimentary trial session. See what makes us different.',
    cta: 'Book Now',
  },
  {
    icon: Zap,
    title: 'The X5 Method',
    description:
      'Our signature framework combining Build, Xweat, Brace, Xtrike, and Balance.',
    cta: 'Learn More',
  },
  {
    icon: Activity,
    title: 'Animal Flow',
    description:
      'Primal movement patterns that enhance mobility, strength, and body awareness.',
    cta: 'Explore',
  },
  {
    icon: User,
    title: 'BxB Solo',
    description:
      'One-on-one personalized coaching tailored to your goals and fitness level.',
    cta: 'Get Started',
  },
  {
    icon: Target,
    title: 'Boxing',
    description:
      'Technical striking, footwork, and conditioning for all skill levels.',
    cta: 'Join Class',
  },
  {
    icon: Dumbbell,
    title: 'Kettlebell Training',
    description:
      'Master the art of kettlebell training with expert guidance and progressive programming.',
    cta: 'Start Training',
  },
  {
    icon: Laptop,
    title: 'Online Coaching',
    description:
      'Train from anywhere with our comprehensive online programs and virtual coaching.',
    cta: 'View Programs',
  },
  {
    icon: Flame,
    title: 'Group Classes',
    description:
      'High-energy group sessions that combine strength, conditioning, and community.',
    cta: 'Join Today',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-secondary">Our</span>{' '}
            <span className="text-accent">Programs</span>
          </h2>
          <p className="text-secondary-grey text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover a program that fits your goals, schedule, and fitness level.
            From group classes to personalized coaching, we have something for
            everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-primary-dark border-2 border-accent/20 rounded-xl p-6 hover:border-accent transition-all duration-300 flex flex-col group"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">
                  {program.title}
                </h3>
                <p className="text-secondary-grey text-sm mb-6 flex-grow">
                  {program.description}
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-accent font-semibold group-hover:text-accent-light transition-colors"
                >
                  {program.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

