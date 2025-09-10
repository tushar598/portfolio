"use client"

import { motion } from "framer-motion"
import { Award, Coffee, Users, Zap, Heart, Star, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { icon: Award, label: "Projects Completed", value: "150+", color: "from-yellow-400 to-orange-500" },
  { icon: Users, label: "Happy Clients", value: "80+", color: "from-green-400 to-blue-500" },
  { icon: Coffee, label: "Cups of Coffee", value: "2000+", color: "from-purple-400 to-pink-500" },
  { icon: Zap, label: "Years Experience", value: "8+", color: "from-blue-400 to-purple-500" },
]

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "I pour my heart into every project, ensuring exceptional quality and attention to detail.",
  },
  {
    icon: Star,
    title: "Innovation First",
    description: "Always exploring cutting-edge technologies to deliver modern, future-proof solutions.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Every design decision is made with the end user in mind, creating intuitive experiences.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-lg"
          >
            <User className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate creator at the intersection of design and technology
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <Card className="glass border-0 shadow-xl hover-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 shadow-lg`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-2 text-gradient"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  What started as curiosity about how websites work has evolved into an 8-year journey of creating
                  digital experiences that matter. I believe in the power of technology to solve real problems and
                  create meaningful connections.
                </p>
                <p>
                  My approach combines technical expertise with creative vision, ensuring every project not only
                  functions flawlessly but also tells a compelling story. I'm passionate about clean code, beautiful
                  design, and the magic that happens when they come together.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community through mentoring and writing.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <Card className="glass border-0 shadow-lg hover-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <value.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
