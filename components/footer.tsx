import Image from 'next/image'
import Link from 'next/link'
import { Youtube, Instagram, Music } from 'lucide-react'
import { Container } from './container'

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <Container>
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-4">
            <Image
                src="/2554-logo.png"
                alt="Warhawks Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
            />
            <p className="text-sm text-gray-600">
              © TEAM 2554 WARHAWKS FRC. All Rights Reserved.
            </p>
          </div>
          <p className="text-sm text-gray-600 text-center md:text-left">
            made with ❤️ by the operations programming team
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-green-700">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-green-700">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

