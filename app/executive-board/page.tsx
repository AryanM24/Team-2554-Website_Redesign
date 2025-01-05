import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/container'

export default function ExecutiveBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center">The Executive Board</h1>
          <p className="text-center mt-2 text-gray-100">
            This is our 2024-2025 Robotics Executive Board
          </p>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Build Presidents */}
            <Card className="p-6">
              <CardContent className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg"
                  alt="Build Presidents"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800">Build Presidents</h2>
                  <p className="text-gray-600">Aditya Saini & Adi Chawathe</p>
                </div>
              </CardContent>
            </Card>

            {/* Club Advisor */}
            <Card className="p-6">
              <CardContent className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg"
                  alt="Club Advisor"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800">Club Advisor</h2>
                  <p className="text-gray-600">Mr. Kearney</p>
                </div>
              </CardContent>
            </Card>

            {/* Administrative President */}
            <Card className="p-6">
              <CardContent className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg"
                  alt="Administrative President"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800">Administrative President</h2>
                  <p className="text-gray-600">Anumeha Haldar</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Subteam Captains Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-4">Subteam Captains</h2>
          <p className="text-center text-gray-600 mb-12">
            Team 2554 is split up into several subteams and each has their own leader in our E-Board
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
              <p className="font-semibold">Mechanical Captains:</p>
              <p>Medhansh Gada, Jahnavi Singh, Mahika Padole, & Ishaan Brahma</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Electrical Captains:</p>
              <p>Kavish Goel & Harris Nazeer</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Programming Captains:</p>
              <p>Amruth Nadimpally, Tanish Mittal, & Dhariya Sarvaiya</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Safety Captain:</p>
              <p>Shastha Venkatesh</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Strategy Coordinator/Coach:</p>
              <p>Ved Dwivedi</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">PR Manager:</p>
              <p>Olivia Dutta</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Operations Programming Manager:</p>
              <p>Abir Modak</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Mentoring Liaisons:</p>
              <p>Jahnavi Singh and Meer Patel</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Legacy Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto border-2 border-dashed border-yellow-400 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-4">Legacy</h2>
            <p className="text-center text-gray-600 mb-8">
              These are ALL the past presidents of Team 2554
            </p>
            <div className="space-y-4">
              <div className="text-center">
                <p className="font-semibold">2024 Presidents:</p>
                <p>Sai Voruganti, Krishan Trikha, Naishadh Patel</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2023 Presidents:</p>
                <p>Nazmin Abbasi & Vivek Isukapalli</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2022 Presidents:</p>
                <p>Vian Miranda, Priya Abiram, Soham Chawathe</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2021 Presidents:</p>
                <p>Ahnaf Rahim, Shivan Mukherjee, Shicharan K.S.</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2020 Presidents:</p>
                <p>Himani Vaid & Jeevanatham Murugan</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2019 Presidents:</p>
                <p>Vipul, Neeraj</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2018 Presidents:</p>
                <p>Samarth, Kevin</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2017 Presidents:</p>
                <p>Samarth, Daniel</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2016 Presidents:</p>
                <p>Adam, Eric</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2015 Presidents:</p>
                <p>Mandev, Susan</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">2014 Presidents:</p>
                <p>Sam Mao, Nikki Huang</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

