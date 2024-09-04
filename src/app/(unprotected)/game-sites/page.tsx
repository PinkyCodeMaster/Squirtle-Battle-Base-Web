"use client"
import React, { useState } from 'react'
import { Search, MapPin, Star, Grid, List } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import Image from 'next/image'

export default function GameSitesPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://utfs.io/f/27ef80cb-962c-4c10-b59d-89d93d6ca9bc-gg8bga.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Game Sites Near You</h1>
                    <p className="text-xl mb-8">Find, review, and visit the best tactical and airsoft game sites across the UK.</p>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4">
                            <Input
                                type="text"
                                placeholder="Search by city or site name..."
                                className="flex-grow"
                            />
                            <Select>
                                <option value="">Location</option>
                                {/* Add location options */}
                            </Select>
                            <Select>
                                <option value="">Rating</option>
                                {/* Add rating options */}
                            </Select>
                            <Select>
                                <option value="">Site Type</option>
                                {/* Add site type options */}
                            </Select>
                            <Button>
                                <Search className="mr-2 h-4 w-4" /> Search
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Map Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text-black font-bold mb-6">Game Sites Map</h2>
                    <div className="bg-white rounded-lg shadow-lg p-4 h-[400px] flex items-center justify-center">
                        <p className="text-gray-500">Interactive Map Placeholder</p>
                        {/* Replace with actual map component */}
                    </div>
                </div>
            </section>

            {/* Directory Listing Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold">Game Sites Directory</h2>
                        <div className="flex gap-2">
                            <Button
                                variant={viewMode === 'grid' ? 'default' : 'outline'}
                                onClick={() => setViewMode('grid')}
                            >
                                <Grid className="h-4 w-4" />
                            </Button>
                            <Button
                                variant={viewMode === 'list' ? 'default' : 'outline'}
                                onClick={() => setViewMode('list')}
                            >
                                <List className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                        {[...Array(6)].map((_, index) => (
                            <GameSiteCard key={index} viewMode={viewMode} />
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Button variant="outline">Load More</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

interface GameSiteCardProps {
    viewMode: 'grid' | 'list'
}

function GameSiteCard({ viewMode }: GameSiteCardProps) {
    return (
        <Card className={viewMode === 'list' ? 'flex' : ''}>
            <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} relative`}>
                <Image
                    src="https://utfs.io/f/27ef80cb-962c-4c10-b59d-89d93d6ca9bc-gg8bga.jpg"
                    alt="Game Site"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>
            <div className={viewMode === 'list' ? 'w-2/3' : 'w-full'}>
                <CardHeader>
                    <CardTitle>Tactical Airsoft Arena</CardTitle>
                    <CardDescription className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" /> London, UK
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">(120 reviews)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        Experience intense close-quarter combat in our state-of-the-art indoor arena.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button>View Site</Button>
                </CardFooter>
            </div>
        </Card>
    )
}