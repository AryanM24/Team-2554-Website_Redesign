import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, TestTube } from 'lucide-react'
import { Container } from '@/components/container'

export default function InfoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center">Information and Updates</h1>
          <p className="text-center mt-2 text-gray-100">
            lorem ipsum lorem ipsum etc. etc. oh yea
          </p>
        </Container>
      </section>

      {/* Info Grid */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* FIRST Robotics Card */}
            <Card className="p-6">
              <CardContent className="space-y-6">
                <div className="bg-gray-100 p-8 rounded-lg">
                  <Image
                    src="/FIRST_logo.png"
                    alt="FIRST Robotics Logo"
                    width={300}
                    height={150}
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    To find more information about the FIRST Robotics Competition (FRC) click the link
                    below.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-gray-200 hover:bg-gray-300"
                    asChild
                  >
                    <Link href="#">FIRST ROBOTICS</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Blue Alliance Card */}
            <Card className="p-6">
              <CardContent className="space-y-6">
                <div className="bg-[#3b5998] p-8 rounded-lg flex justify-center items-center">
                  <TestTube className="w-24 h-24 text-white" />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    To see our past performance and keep up to date, check out our Blue Alliance
                    page.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-gray-200 hover:bg-gray-300"
                    asChild
                  >
                    <Link href="#">BLUE ALLIANCE PAGE</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Merch Store Card */}
            <Card className="p-6">
              <CardContent className="space-y-6">
                <div className="bg-black p-8 rounded-lg">
                  <Image
                    src="/warhawks_logo_ad.png"
                    alt="Team 2554 Logo"
                    width={300}
                    height={150}
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">Buy our merch!</p>
                  <Button
                    variant="secondary"
                    className="w-full bg-gray-200 hover:bg-gray-300"
                    asChild
                  >
                    <Link href="#">TEAM 2554 MERCH STORE</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Documentation Card */}
            <Card className="p-6">
              <CardContent className="space-y-6">
                <div className="bg-white p-8 rounded-lg flex justify-center items-center">
                  <FileText className="w-24 h-24" />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    To see information on how our subteams work, check out our documentation.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-gray-200 hover:bg-gray-300"
                    asChild
                  >
                    <Link href="#">DOCUMENTATION</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}

