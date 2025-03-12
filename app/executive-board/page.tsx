import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/container'

const presidents = [
  {
    title: "Build Presidents",
    names: "Aditya Saini & Adi Chawathe",
    image: "/placeholder.svg"
  },
  {
    title: "Club Advisor",
    names: "Mr. Kearney",
    image: "/mrkearney.png"
  },
  {
    title: "Administrative President",
    names: "Anumeha Haldar",
    image: "/placeholder.svg"
  }
]

const subteamCaptains = [
  {
    role: "Mechanical Captains",
    names: "Medhansh Gada, Jahnavi Singh, Mahika Padole, & Ishaan Brahma"
  },
  {
    role: "Electrical Captains",
    names: "Kavish Goel & Harris Nazeer"
  },
  {
    role: "Programming Captains",
    names: "Amruth Nadimpally, Tanish Mittal, & Dhariya Sarvaiya"
  },
  {
    role: "Safety Captain",
    names: "Shastha Venkatesh"
  },
  {
    role: "Strategy Coordinator/Coach",
    names: "Ved Dwivedi"
  },
  {
    role: "PR Manager",
    names: "Olivia Dutta"
  },
  {
    role: "Operations Programming Manager",
    names: "Abir Modak"
  },
  {
    role: "Mentoring Liaisons",
    names: "Jahnavi Singh and Meer Patel"
  }
]

const legacyPresidents = [
  { year: "2024", names: "Sai Voruganti, Krishan Trikha, Naishadh Patel" },
  { year: "2023", names: "Nazmin Abbasi & Vivek Isukapalli" },
  { year: "2022", names: "Vian Miranda, Priya Abiram, Soham Chawathe" },
  { year: "2021", names: "Ahnaf Rahim, Shivan Mukherjee, Shicharan K.S." },
  { year: "2020", names: "Himani Vaid & Jeevanatham Murugan" },
  { year: "2019", names: "Vipul, Neeraj" },
  { year: "2018", names: "Samarth, Kevin" },
  { year: "2017", names: "Samarth, Daniel" },
  { year: "2016", names: "Adam, Eric" },
  { year: "2015", names: "Mandev, Susan" },
  { year: "2014", names: "Sam Mao, Nikki Huang" }
]

export default function ExecutiveBoardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center text-white">The Executive Board</h1>
          <p className="text-center mt-2 text-gray-300">
            This is our 2024-2025 Robotics Executive Board
          </p>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {presidents.map((president, index) => (
              <Card key={index} className="p-6 bg-neutral-800 border-neutral-700">
                <CardContent className="flex flex-col items-center space-y-4">
                  <Image
                    src={president.image}
                    alt={president.title}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <div className="text-center">
                    <h2 className="text-xl font-semibold text-white">{president.title}</h2>
                    <p className="text-gray-300">{president.names}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Subteam Captains Section */}
      <section className="py-16 bg-neutral-800">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Subteam Captains</h2>
          <p className="text-center text-gray-300 mb-12">
            Team 2554 is split up into several subteams and each has their own leader in our E-Board
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {subteamCaptains.map((captain, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-white">{captain.role}:</p>
                <p className="text-gray-300">{captain.names}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <div className="max-w-3xl mx-auto border-2 border-dashed border-yellow-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">Legacy</h2>
            <p className="text-center text-gray-300 mb-8">
              These are ALL the past presidents of Team 2554
            </p>
            <div className="space-y-4">
              {legacyPresidents.map((legacy, index) => (
                <div key={index} className="text-center">
                  <p className="font-semibold text-white">{legacy.year} Presidents:</p>
                  <p className="text-gray-300">{legacy.names}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

