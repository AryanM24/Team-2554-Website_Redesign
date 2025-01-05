import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/container'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center">About us</h1>
          <p className="text-center mt-2 text-gray-100">Lorem ipsum lorem ipsum</p>
        </Container>
      </section>

      {/* Team Overview Section */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/jps.jpeg"
                    alt="JPS Robotics Logo"
                    width={60}
                    height={60}
                    className="w-15 h-15"
                  />
                  <h2 className="text-2xl font-bold">JPS ROBOTICS</h2>
                </div>
                <p className="text-gray-600">
                  Team 2554, The Warhawks, is John P. Stevens High School's FIRST
                  Robotics team. As FIRST participants seek to inspire new generations to
                  explore the wonders of science and technology.
                </p>
                <p className="text-gray-600">
                  Our team is divided into four separate sub-teams: Mechanical, Electrical,
                  Programming, and Operations. Although each individual group specializes
                  in their field, all of the sub-teams come together to create a
                  well-functioning robot for the competition.
                </p>
              </CardContent>
            </Card>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <Image
                src="/team.jpeg"
                alt="Team Photo"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Subteams Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-2">Subteams</h2>
          <p className="text-center text-gray-600 mb-12">
            Team 2554 is split up into several subteams, each with a different purpose
          </p>

          {/* Mechanical Team */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="order-2 md:order-1 h-[400px]">
              <Image
                src="/mech_team.jpeg"
                alt="Mechanical Team at Work"
                width={600}
                height={400}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <Card className="order-1 md:order-2">
              <CardHeader>
                <CardTitle>Mechanical Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">
                  The Mechanical Team is in charge of creating a prototype and the physical
                  construction of the robot. They train new members to safely use power tools
                  and handle build equipment to create a practice field to use before competition.
                  They also design components such as drive chains, the chassis, and shooters.
                  Students in this sub-team build the skeletal structure of the robot, and
                  efficiently arrange the motors, electronics, and various mechanisms onto the robot.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Electrical Team */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Electrical Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">
                  The Electrical Team organizes and puts together the electrical board.
                  The electrical board essentially connects the power and the programming
                  to the motors and other parts of the robot so that it may perform all the desired functions!
                </p>
              </CardContent>
            </Card>
            <div className="h-[400px]">
              <Image
                src="/elec_team.jpeg"
                alt="Electrical Team Work"
                width={600}
                height={400}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Programming Team */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1 h-[400px]">
              <Image
                src="/prog_team.jpeg"
                alt="Programming Team at Work"
                width={600}
                height={400}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <Card className="order-1 md:order-2">
              <CardHeader>
                <CardTitle>Programming Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">
                  The Programming Team creates and runs a program in Java
                  that allows students to control the robot. Programming code
                  directs the robot to carry out a specific job within the limits
                  of its hardware but also has to take into account the limits of
                  human ability in order to program AI for competitions.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Documentation Section */}
      <section className="py-16">
        <Container>
          <div className="border-2 border-dashed border-green-700 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/warhawks_logo_ad.png"
                  alt="Team Logo"
                  width={200}
                  height={200}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-bold">Want to learn more?</h2>
                <p className="text-gray-600">
                  Click the button below to view our detailed documentation of
                  EVERYTHING you need to know about Team 2554!
                </p>
                <Button className="bg-green-700 hover:bg-green-800">
                  Team 2554 Official Documentation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

