import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/container'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center bg-white">
        <Container>
          <Image
            src="/warhawks-logo-2-smol_orig.png"
            alt="Warhawks Logo with Text"
            width={600}
            height={200}
            className="mx-auto h-auto"
            priority
          />
          <p className="mt-4 text-xl text-gray-600">FRC Team 2554 - JPS Robotics</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-green-700 hover:bg-green-800">Learn More</Button>
            <Button variant="outline">Outreach</Button>
          </div>
        </Container>
      </section>

      {/* Team Info Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/jps.jpeg"
                    alt="JPS Robotics Logo"
                    width={60}
                    height={60}
                    className="w-15 h-15"
                  />
                  <h2 className="text-2xl font-bold">JPS ROBOTICS TEAM</h2>
                </div>
                <p className="text-gray-600">
                  Team 2554, The Warhawks, is John P. Stevens High School's FIRST
                  Robotics team. As FIRST participants we seek to inspire new generations to
                  explore the wonders of science and technology.
                </p>
                <p className="text-gray-600">
                  Every year, high school students have 6 weeks to design and build a
                  robot that can accomplish FRC's challenge and compete with teams from
                  across the nation. The 2023 theme is Rapid React. Through the
                  guidance and leadership of our captains and mentors, students are able
                  to acquire the knowledge necessary for and develop a powerful interest
                  in STEM careers.
                </p>
                <p className="text-gray-600">
                  Our team is divided into four separate sub-teams: Mechanical,
                  Electrical, Programming, and Operations. Although each individual
                  group specializes in their field, all of the sub-teams come together to
                  create a well-functioning robot for the competition.
                </p>
              </div>
            </Card>
            <div className="bg-gray-200 rounded-lg h-[400px]">
              <Image
                src="/placeholder.svg"
                alt="Team Photo"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-4">Upcoming Events</h2>
          <p className="text-center text-gray-600 mb-8">
            We don't just compete! Participate in one of our super fun outreach events!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="space-y-4">
                <Image
                  src="/placeholder.svg"
                  alt="Video Game Night"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Video Game Night</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join us for an evening of gaming and fun! Connect with fellow tech enthusiasts
                  and enjoy some competitive gaming.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-4">
                <Image
                  src="/placeholder.svg"
                  alt="JPS STEM Day"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>JPS STEM Day</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explore the exciting world of STEM through interactive demonstrations
                  and hands-on activities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-4">
                <Image
                  src="/placeholder.svg"
                  alt="Hack.JPS'25"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Hack.JPS'25</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our annual hackathon where students collaborate and innovate to solve
                  real-world problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
          <div className="mb-8">
            <Image
              src="/placeholder.svg"
              alt="Sponsors Banner"
              width={1200}
              height={200}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline" className="bg-green-700 text-white hover:bg-green-800">
              See more...
            </Button>
          </div>
        </Container>
      </section>

      {/* Apparel Section */}
      <section className="py-16">
        <Container>
          <div className="border-2 border-dashed border-green-700 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/placeholder.svg"
                  alt="Team Hoodie"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <h2 className="text-2xl font-bold">
                  INTERESTED IN OUR TEAM'S APPAREL AND PRODUCTS?
                </h2>
                <p className="text-gray-600">
                  Click the button below to view and buy our apparel from our
                  team store. Our products range from mugs to sweatshirts!
                </p>
                <Button className="bg-green-700 hover:bg-green-800">
                  Team 2554 Apparel Store
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

