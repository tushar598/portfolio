"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  MapPin,
  Calendar,
  Award,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "2019 - 2020",
    description:
      "Built and maintained web applications while learning modern development practices and technologies.",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Technology",
    period: "2015 - 2019",
    description:
      "Focused on software engineering, algorithms, and web development.",
  },
];

const certifications = [
  "AWS Certified Developer",
  "Google Cloud Professional",
  "React Developer Certification",
  "Node.js Certified Developer",
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fancybearsmetaverse.com%2F&psig=AOvVaw0WlKISrBqFD2nWe9NOmn03&ust=1753374686014000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjZ9eyz044DFQAAAAAdAAAAABAE"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold mb-2">
                  Tushar Singh Chouhan
                </h1>
                <p className="text-muted-foreground mb-4">
                  Full Stack Developer
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  Dewas, Madhya Pradesh
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Available for hire
                </div>
              </CardContent>
            </Card>

            {/* Skills Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Top Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "React/Next.js", level: 95 },
                  { name: "Node.js", level: 88 },
                  { name: "TypeScript", level: 90 },
                  { name: "Python", level: 82 },
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <Badge
                      key={cert}
                      variant="secondary"
                      className="w-full justify-start"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    I'm a passionate full-stack developer with over 5 years of
                    experience creating innovative web applications. My
                    expertise spans across modern frontend frameworks, backend
                    technologies, and cloud platforms.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating
                    applications that provide exceptional user experiences. I'm
                    constantly learning new technologies and best practices to
                    stay at the forefront of web development.
                  </p>
                  <p>
                    When I'm not coding, I enjoy contributing to open-source
                    projects, writing technical blog posts, and mentoring junior
                    developers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-primary/20 pl-6 relative"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                      <div className="space-y-2">
                        <h3 className="font-semibold">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-primary/20 pl-6 relative"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                      <div className="space-y-2">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{edu.school}</span>
                          <span>•</span>
                          <span>{edu.period}</span>
                        </div>
                        <p className="text-muted-foreground">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
