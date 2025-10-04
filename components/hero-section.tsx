"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";

export function HeroSection() {
  const { resolvedTheme } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Optimized Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className={`absolute top-20 left-20 w-20 h-20 rounded-full opacity-20 blur-xl ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-r from-purple-400 to-pink-400"
              : "bg-gradient-to-r from-blue-400 to-cyan-400"
          }`}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className={`absolute bottom-40 right-32 w-32 h-32 rounded-full opacity-15 blur-xl ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-r from-orange-400 to-red-400"
              : "bg-gradient-to-r from-indigo-400 to-purple-400"
          }`}
        />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2"
            >
              <Sparkles
                className={`w-4 h-4 ${
                  resolvedTheme === "dark" ? "text-yellow-400" : "text-blue-500"
                }`}
              />
              <span className="text-sm font-medium">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Creative <span className="text-gradient">Developer</span>
              <br />& Designer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              I craft exceptional digital experiences that blend creativity with
              cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="group btn-gradient border-0 shadow-lg hover-glow text-white"
              >
                <a href="https://github.com/tushar598" target="_blank">
                  View My Work
                </a>
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/20 hover:bg-white/10 bg-transparent"
              >
                <Download className="mr-2 w-4 h-4" />
                <a
                  href="https://media.licdn.com/dms/document/media/v2/D4D2DAQEXrnq_xUoovQ/profile-treasury-document-pdf-analyzed/B4DZa9wdwuG4Ak-/0/1746940322497?e=1760572800&v=beta&t=R-DkIODuqSZ2yyHSVIwsZfTpS6GGd_at2JP8_N1jxaM"
                  target="_blank"
                >
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Currently available
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Based in India
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="glass rounded-full p-4 shadow-2xl">
                  <div
                    className={`relative w-80 h-80 rounded-full overflow-hidden p-1 ${
                      resolvedTheme === "dark"
                        ? "bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400"
                        : "bg-gradient-to-br from-blue-400 via-cyan-400 to-indigo-400"
                    }`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <Image
                        src="https://cdn.prod.website-files.com/6321c24b74ed9a477c97d19c/63230f6e6fa4170974880abd_Bear_Fancy_Bears_Disc.png?height=320&width=320"
                        alt="Profile"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 glass rounded-2xl p-3 shadow-lg"
              >
                <div className="text-2xl">
                  {resolvedTheme === "dark" ? "🌙" : "☀️"}
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl p-3 shadow-lg"
              >
                <div className="text-2xl">
                  {resolvedTheme === "dark" ? "🚀" : "💡"}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
