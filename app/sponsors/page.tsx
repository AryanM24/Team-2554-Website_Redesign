import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/container'

const sponsors = [
  {
    name: "Picatinny STEM",
    logo: "/placeholder.svg",
    description: ""
  },
  {
    name: "OLight",
    logo: "/placeholder.svg",
    description: "OLIGHT is a leading provider of portable lighting solutions, dedicated to its mission of \"illuminating the world\"."
  },
  {
    name: "Optimum",
    logo: "/placeholder.svg",
    description: "Optimum provides cost-effective and reliable internet and television services throughout the United States."
  },
  {
    name: "CMA CGM",
    logo: "/placeholder.svg",
    description: "Led by Rodolphe Saadé, the CMA CGM Group, a global player in sea, land, air and logistics solutions, serves more than 420 ports around the world across 5 continents, with a fleet of 584 vessels."
  },
  {
    name: "EMS MARCON",
    logo: "/placeholder.svg",
    description: "EMS was established in 1979, and has prospered in the U.S. domestic marine marketplace through product innovation. Our development is centered on technology to reduce operating cost, increase efficiency, and meet pending regulatory requirements at a lower cost."
  },
  {
    name: "FIRST",
    logo: "/placeholder.svg",
    description: "FIRST inspires young people to be science and technology leaders and innovators by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership."
  }
]

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center">Sponsors</h1>
          <p className="text-center mt-2 text-gray-100">
            This is our 2024-2025 Robotics Executive Board
          </p>
        </Container>
      </section>

      {/* Sponsors List */}
      <section className="py-16">
        <Container>
          <div className="space-y-6 max-w-4xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6 flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={150}
                      height={150}
                      className="w-[150px] h-auto object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{sponsor.name}</h2>
                    {sponsor.description && (
                      <p className="text-gray-600">{sponsor.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">How to Become a Sponsor</h2>
            <p className="text-gray-600">
              Click below to view the 2024 - 2025 Team 2554 Sponsorship Packet
            </p>
            <Button className="bg-green-700 hover:bg-green-800">
              2024 - 2025 Team 2554 Sponsorship Packet
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

