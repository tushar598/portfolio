"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Server, Smartphone, Globe, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Magic",
    icon: Code2,
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    skills: [
      { name: "React & Next.js", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 92, icon: "🔷" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "Framer Motion", level: 88, icon: "🎭" },
      { name: "Three.js", level: 75, icon: "🎯" },
    ],
  },
  {
    title: "Backend Power",
    icon: Server,
    gradient: "from-green-500 via-teal-500 to-blue-500",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "MongoDB", level: 82, icon: "🍃" },
      { name: "GraphQL", level: 80, icon: "📊" },
    ],
  },
  {
    title: "Design Systems",
    icon: Palette,
    gradient: "from-pink-500 via-red-500 to-orange-500",
    skills: [
      { name: "Figma", level: 92, icon: "🎨" },
      { name: "Adobe Creative", level: 85, icon: "🎭" },
      { name: "UI/UX Design", level: 88, icon: "✨" },
      { name: "Prototyping", level: 90, icon: "🔧" },
      { name: "Design Tokens", level: 85, icon: "🎯" },
    ],
  },
  {
    title: "Mobile & Cloud",
    icon: Smartphone,
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    skills: [
      { name: "React Native", level: 82, icon: "📱" },
      { name: "AWS", level: 78, icon: "☁️" },
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "CI/CD", level: 85, icon: "🔄" },
      { name: "Kubernetes", level: 70, icon: "⚙️" },
    ],
  },
]

const floatingSkills = [
  { name: "JavaScript", icon: "🟨", delay: 0 },
  { name: "Git", icon: "🔧", delay: 1 },
  { name: "REST APIs", icon: "🔗", delay: 2 },
  { name: "Testing", icon: "🧪", delay: 3 },
  { name: "Agile", icon: "🏃", delay: 4 },
  { name: "DevOps", icon: "⚡", delay: 5 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
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
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 shadow-2xl"
          >
            <Zap className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass border-0 shadow-2xl hover-glow transition-all duration-500 h-full">
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className="text-2xl">
                              {skill.icon}
                            </motion.span>
                            <span className="font-semibold text-foreground group-hover/skill:text-gradient transition-all">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-muted-foreground">{skill.level}%</span>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                              duration: 1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full shadow-sm`}
                          />
                          <motion.div
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gradient">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {floatingSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: skill.delay * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  y: -5,
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: skill.delay * 0.5,
                }}
                className="glass rounded-2xl px-6 py-4 shadow-lg hover-glow cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="glass border-0 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-12">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Always Evolving</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The tech world never stops, and neither do I. I'm constantly learning, experimenting, and pushing the
                boundaries of what's possible with code and creativity.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
