'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Moon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Container } from './container'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="w-full border-b">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/2554-logo.png"
            alt="Warhawks Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/executive-board', label: 'Executive Board' },
            { href: '/sponsors', label: 'Sponsors' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/press', label: 'Press' },
            { href: '/info', label: 'Info' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === href
                  ? 'bg-green-700 text-white'
                  : 'text-gray-600 hover:text-green-700'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </Container>
    </header>
  )
}

