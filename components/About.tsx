'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Shield,
  Dumbbell,
  Zap,
  Heart,
  Activity,
} from 'lucide-react'

const highlights = [
  {
    icon: Dumbbell,
    title: 'Functional Training',
    description: 'Real-world movement patterns',
  },
  {
    icon: Zap,
    title: 'Kettlebell Expertise',
    description: 'Master the art of kettlebell training',
  },
  {
    icon: Activity,
    title: 'Animal Flow',
    description: 'Primal movement patterns',
  },
  {
    icon: Target,
    title: 'Strength + Conditioning',
    description: 'Build power and endurance',
  },
  {
    icon: Heart,
    title: 'Boxing',
    description: 'Technical striking and footwork',
  },
  {
    icon: Users,
    title: 'Solo Training',
    description: 'Personalized coaching sessions',
  },
  {
    icon: Shield,
    title: 'Online Programs',
    description: 'Train from anywhere',
  },
]

const x5Method = [
  { name: 'Build', description: 'Foundation and strength development' },
  { name: 'Xweat', description: 'High-intensity conditioning' },
  { name: 'Brace', description: 'Core stability and resilience' },
  { name: 'Xtrike', description: 'Striking and combat skills' },
  { name: 'Balance', description: 'Mobility and coordination' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-secondary">About</span>{' '}
            <span className="text-accent">Boxxburn</span>
          </h2>
          <p className="text-secondary-grey text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Boxxburn Kakkanad is more than a gym — it's a community-driven
            fitness sanctuary where technical coaching meets functional
            excellence. Our philosophy centers on the{' '}
            <span className="text-accent font-semibold">X5 Method</span>, a
            revolutionary framework designed for injury-free, progressive
            fitness.
          </p>
        </motion.div>

        {/* X5 Method Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="text-accent">#theX5method</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {x5Method.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary border-2 border-accent/30 rounded-lg p-6 text-center hover:border-accent transition-all duration-300"
              >
                <div className="text-accent text-2xl font-bold mb-2">
                  {method.name}
                </div>
                <p className="text-secondary-grey text-sm">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-primary border-2 border-accent/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-accent">
              Our Philosophy
            </h3>
            <div className="space-y-4 text-secondary-grey text-lg leading-relaxed">
              <p>
                At Boxxburn, we believe in{' '}
                <span className="text-accent font-semibold">
                  community-driven training
                </span>{' '}
                where every member supports and elevates each other. Our approach
                combines technical precision with functional movement patterns
                that translate to real-world strength and mobility.
              </p>
              <p>
                We prioritize an{' '}
                <span className="text-accent font-semibold">
                  injury-free approach
                </span>{' '}
                through progressive programming, proper form coaching, and
                personalized attention. Whether you're a beginner or an advanced
                athlete, our coaches ensure you progress safely and effectively.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-primary border-2 border-accent/20 rounded-lg p-6 hover:border-accent transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-xl font-bold mb-2 text-secondary">
                    {highlight.title}
                  </h4>
                  <p className="text-secondary-grey text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

