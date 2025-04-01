import React from 'react'
import { Container } from '@/components/container'
import UnderConstruction from "@/components/UnderConstruction"

export default function PressPage() {
  return (
    <div className="min-h-screen bg-neutral-900">

    {/* Under Construction Content */}
    <section className="bg-neutral-800">

      <Container>
        <UnderConstruction />
      </Container>

    </section>
    </div>
  )
}

