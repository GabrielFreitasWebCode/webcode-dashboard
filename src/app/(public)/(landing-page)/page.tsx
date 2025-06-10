"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, CheckSquare, Users, Calendar, Clock, Workflow, Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description:
        "Create, assign, and monitor tasks. Set priorities and deadlines to keep your project on track.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Facilitate communication and collaboration among team members with integrated tools.",
    },
    {
      icon: Calendar,
      title: "Planning",
      description: "Create detailed schedules, set milestones, and visualize the project timeline.",
    },
    {
      icon: BarChart3,
      title: "Metrics and Reports",
      description: "Analyze project performance with real-time functionality and usability metrics.",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Log the time spent on each task and project for better resource management.",
    },
    {
      icon: Workflow,
      title: "Workflows",
      description: "Define custom processes based on components and agile methodologies like RUP.",
    },
  ]

  const navigationItems = [
    { href: "#inicio", label: "Home" },
    { href: "#dashboard", label: "Dashboard" },
    { href: "#proyectos", label: "Projects" },
    { href: "#tareas", label: "Tasks" },
    { href: "#equipo", label: "Team" },
    { href: "#recursos", label: "Resources" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">LoremIpsum</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button onClick={() => router.push("/login")} variant="ghost" className="text-gray-600 hover:text-gray-900 text-sm" >
                Sign In
              </Button>
              <Button onClick={() => router.push("/register")} className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-4 py-2">Sign Up</Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
              <nav className="flex flex-col space-y-3" role="navigation" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 text-sm py-2 px-4 rounded-md hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Button variant="ghost" className="justify-start text-gray-600 hover:text-gray-900 text-sm">
                    Sign In
                  </Button>
                  <Button className="justify-start bg-gray-900 hover:bg-gray-800 text-white text-sm">
                    Sign Up
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Enterprise Project Management System
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Plan, execute, and monitor your projects efficiently. Facilitate collaboration among team members, assign tasks, and manage resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">Get Started Now →</Button>
                  <Button variant="outline" className="px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50">
                    View Demo
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Project Dashboard</h3>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-64 bg-gray-200 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our system provides all the necessary tools to manage projects efficiently.
              </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card
                    key={index}
                    className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <CardContent className="p-6">
                      <IconComponent className="h-8 w-8 text-gray-700 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-600 text-sm">© 2025 LoremIpsum. All rights reserved.</p>

            <nav className="flex space-x-6" role="navigation" aria-label="Footer navigation">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Terms
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Privacy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
