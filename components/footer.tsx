"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-purple-400/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="glass rounded-2xl p-12 max-w-2xl mx-auto shadow-2xl">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold mb-4 text-gradient">Let's Stay Connected</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Follow my journey as I continue to push the boundaries of web development and create amazing digital
              experiences.
            </p>

            <div className="flex justify-center space-x-4 mb-8">
              {[
                { icon: Github, href: "#", color: "from-gray-600 to-gray-800" },
                { icon: Linkedin, href: "#", color: "from-blue-600 to-blue-800" },
                { icon: Mail, href: "#", color: "from-red-500 to-pink-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center shadow-lg hover-glow transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-muted-foreground flex items-center justify-center text-sm">
                © {currentYear} John Doe. Crafted with{" "}
                <Heart className="h-4 w-4 mx-1 text-red-500 fill-current animate-pulse" /> and lots of creativity.
              </p>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="glass rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover-glow transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 text-foreground" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
