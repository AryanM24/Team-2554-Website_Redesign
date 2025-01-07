'use client'

import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/sponsor-slider.css'

const sponsors = [
  { name: 'Sponsor 1', image: '/placeholder.svg' },
  { name: 'Sponsor 2', image: '/placeholder.svg' },
  { name: 'Sponsor 3', image: '/placeholder.svg' },
  { name: 'Sponsor 4', image: '/placeholder.svg' },
  { name: 'Sponsor 5', image: '/placeholder.svg' },
  { name: 'Sponsor 6', image: '/placeholder.svg' },
]

export default function SponsorSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  }

  return (
    <Slider {...settings} className="sponsor-slider">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="px-2">
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              width={300}
              height={200}
              className="w-full h-48 object-contain"
            />
            <p className="text-center mt-2 text-gray-600">{sponsor.name}</p>
          </div>
        </div>
      ))}
    </Slider>
  )
}
