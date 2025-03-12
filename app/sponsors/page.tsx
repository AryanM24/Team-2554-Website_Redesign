import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/container'

const sponsors = [
  {
    name: "Picatinny STEM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx61MfPYUFifXvmOTho2cEsLWprMbuaDKCsw&s",
    description: ""
  },
  {
    name: "OLight",
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022024/olight.png?LTJyXWsr8HwXFdLuzPcyGKwIDUkLJPPx&itok=oFJc7CH_",
    description: "OLIGHT is a leading provider of portable lighting solutions, dedicated to its mission of \"illuminating the world\"."
  },
  {
    name: "Optimum",
    logo: "https://logowik.com/content/uploads/images/optimum4281.jpg",
    description: "Optimum provides cost-effective and reliable internet and television services throughout the United States."
  },
  {
    name: "CMA CGM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVe_2Y2KKHo7iNmDu2DDb1XEKEpp1fKk8vnQ&s",
    description: "Led by Rodolphe Saadé, the CMA CGM Group, a global player in sea, land, air and logistics solutions, serves more than 420 ports around the world across 5 continents, with a fleet of 584 vessels."
  },
  {
    name: "EMS MARCON",
    logo: "https://www.emsmarcon.com/images/cover.bmp",
    description: "EMS was established in 1979, and has prospered in the U.S. domestic marine marketplace through product innovation. Our development is centered on technology to reduce operating cost, increase efficiency, and meet pending regulatory requirements at a lower cost."
  },
  {
    name: "FIRST",
    logo: "https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/thumbnails/FIRST-Icon.png",
    description: "FIRST inspires young people to be science and technology leaders and innovators by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership."
  }
]

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center text-white">Sponsors</h1>
          <p className="text-center mt-2 text-gray-300">
            This is our 2024-2025 Robotics Executive Board
          </p>
        </Container>
      </section>

      {/* Sponsors List */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <div className="space-y-6 max-w-4xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="overflow-hidden bg-neutral-800 border-neutral-700">
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
                    <h2 className="text-xl font-semibold text-white">{sponsor.name}</h2>
                    {sponsor.description && (
                      <p className="text-gray-300">{sponsor.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 bg-neutral-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">How to Become a Sponsor</h2>
            <p className="text-gray-300">
              Click below to view the 2024 - 2025 Team 2554 Sponsorship Packet
            </p>
            <Button className="bg-green-700 hover:bg-green-800 text-white">
              2024 - 2025 Team 2554 Sponsorship Packet
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

