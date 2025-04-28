import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/container';
import { legacyPresidents, subteams, presidents } from '@/lib/execBoard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@radix-ui/react-tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ExecutiveBoardPage() {
   return (
      <div className="flex flex-col min-h-screen bg-neutral-900">
         {/* Hero Banner */}
         <section className="bg-green-700 py-12 text-white">
            <Container>
               <h1 className="text-4xl font-bold text-center text-white">
                  The Executive Board
               </h1>
               <p className="text-center mt-2 text-gray-300">
                  This is our 2024-2025 Robotics Executive Board
               </p>
            </Container>
         </section>

         {/* Leadership Section */}
         <section className="py-16 bg-neutral-900">
            <Container>
               {/* desktop view */}
               <div className="md:grid-cols-3 gap-8 hidden md:grid">
                  {presidents.map((president, index) => (
                     <Card
                        key={index}
                        className="p-6 bg-neutral-800 border-neutral-700"
                     >
                        <CardContent className="flex flex-col items-center space-y-4">
                           <Image
                              src={president.image}
                              alt={president.title}
                              width={200}
                              height={200}
                              className="rounded-lg"
                           />
                           <div className="text-center">
                              <h2 className="text-xl font-semibold text-white">
                                 {president.title}
                              </h2>
                              <p className="text-gray-300">{president.name}</p>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>

               {/* mobile view */}
               <div className='grid gap-8 block md:hidden'>
                  {presidents.map((president, index) => (
                        <Card
                           key={index}
                           className="bg-neutral-800 border border-neutral-600 shadow-lg overflow-hidden h-full"
                        >
                           <CardContent className="p-0 flex flex-col h-full">
                              {/* mobile cards */}
                              <div className="h-4 bg-neutral-600 sm:hidden"></div>
                              <div className="p-5 text-center flex-grow flex flex-col justify-center items-center">
                                 <h3 className="text-lg font-semibold text-white mb-1">{president.title}</h3>
                                 <p className="text-gray-400">{president.name}</p>
                              </div>
                           </CardContent>
                        </Card>
                  ))}
               </div>
            </Container>
         </section>
         
         {/* Subteam Section */}
         <section className="py-12 bg-neutral-800 flex justify-center items-center">
            <div className="container px-4 mx-auto">
            <Tabs defaultValue={subteams[0].subteamName} className="flex flex-col items-center">

               {/* mobile tabs */}
               <TabsList className="flex justify-center gap-0 w-full max-w-md md:hidden overflow-x-auto pb-1">
                  {subteams.map((subteam, index) => (
                  <TabsTrigger
                     key={`mobile-${index}`}
                     value={subteam.subteamName}
                     className="px-[5.5px] pb-3 text-lg text-white bg-transparent hover:text-gray-200 data-[state=active]:text-green-400 data-[state=active]:border-b-2 border-b-2 data-[state=active]:border-green-400 transition-colors duration-200 text-sm rounded-none"
                  >
                     {subteam.subteamName}
                  </TabsTrigger>
                  ))}
               </TabsList>

               {/* desktop tabs */}
               <TabsList className="hidden md:flex justify-center mb-6 gap-0 flex-wrap font-bold">
                  {subteams.map((subteam, index) => (
                  <TabsTrigger
                     key={`desktop-${index}`}
                     value={subteam.subteamName}
                     className="pb-3 px-10 text-2xl text-white bg-transparent hover:text-gray-200 data-[state=active]:text-green-400 data-[state=active]:border-b-2 border-b-2 data-[state=active]:border-green-400 transition-colors duration-200 rounded-none"
                  >
                     {subteam.subteamName}
                  </TabsTrigger>
                  ))}
               </TabsList>

               {subteams.map((subteam, index) => {
                  const memberCount = subteam.members.length
                  let gridClass = "grid w-full "

                  if (memberCount === 1) {
                     gridClass += "grid-cols-1 max-w-xs mx-auto gap-8"
                  } else if (memberCount === 2) {
                     gridClass += "grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto gap-4"
                  } else if (memberCount === 3) {
                     gridClass += "grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto gap-8"
                  } else if (memberCount == 5) {
                     gridClass += "grid-cols-1 max-w-8x gap-2 md:grid-cols-5 lg:grid-cols-5 mx-auto"
                  }
                  else {
                     gridClass += "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mx-auto gap-8"
                  }

                  return (
                  <TabsContent value={subteam.subteamName} key={index} className="text-white text-center mt-4 w-full">
                     <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">

                        <h2 className="text-3xl font-bold text-white mb-6 text-center">{subteam.subteamName} Captains</h2>

                        <div className={gridClass}>
                        {subteam.members.map((member, idx) => (
                           <Card
                              key={idx}
                              className="bg-neutral-900 border border-neutral-700 shadow-lg overflow-hidden h-full"
                           >
                              <CardContent className="p-0 flex flex-col h-full">
                                 {/* desktop cards */}
                                 <div className="aspect-[4/5] w-full relative bg-neutral-700 overflow-hidden hidden sm:block">
                                    <Image
                                       src={member.image || "/placeholder.svg"}
                                       alt={`${member.name} - ${member.title}`}
                                       fill
                                       className="object-cover object-center"
                                    />
                                 </div>

                                 {/* mobile cards */}
                                 <div className="h-4 bg-neutral-700 sm:hidden"></div>
                                 <div className="p-5 text-center flex-grow flex flex-col justify-center items-center">
                                    <h3 className="text-lg font-semibold text-white mb-1">{member.title}</h3>
                                    <p className="text-gray-400">{member.name}</p>
                                 </div>
                              </CardContent>
                           </Card>
                        ))}
                        </div>
                     </div>
                  </TabsContent>
                  )
               })}
            </Tabs>
            </div>
         </section>

         {/* Legacy Section */}
         <section className="py-16 bg-neutral-900">
            <Container>
               <div className="max-w-3xl mx-auto border-2 border-dashed border-yellow-500 rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-center mb-4 text-white">
                     Legacy
                  </h2>
                  <p className="text-center text-gray-300 mb-8">
                     These are ALL the past presidents of Team 2554
                  </p>
                  <div className="space-y-4">
                     {legacyPresidents.map((legacy, index) => (
                        <div key={index} className="text-center">
                           <p className="font-semibold text-white">
                              {legacy.year} Presidents:
                           </p>
                           <p className="text-gray-300">{legacy.names}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </Container>
         </section>
      </div>
   );
}
