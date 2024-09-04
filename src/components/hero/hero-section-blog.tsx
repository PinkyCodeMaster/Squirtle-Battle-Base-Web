import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { Search } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="https://utfs.io/f/27876270-8fa1-4d03-9ae8-1ad5a5012525-28hi47.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the Latest in Gear & Site Reviews</h1>
                <p className="text-xl mb-8">Get insights, tips, and expert advice on tactical gear, airsoft game sites, and builds.</p>
                <div className="max-w-2xl mx-auto">
                    <div className="flex">
                        <Input
                            type="text"
                            placeholder="Search articles, reviews, and builds..."
                            className="flex-grow"
                        />
                        <Button className="ml-2">
                            <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
