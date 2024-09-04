import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative bg-cover bg-center py-12" style={{ backgroundImage: 'url(https://utfs.io/f/58b8434a-238a-4b96-a8c7-469b9dda47ef-vlsk9s.jpg)' }}>
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Tactical Gear & Equipment</h1>
                <p className="text-xl mb-8 text-gray-200">Browse and purchase the best gear for airsoft, military, and tactical operations.</p>
                <div className="max-w-2xl mx-auto">
                    <div className="flex">
                        <Input
                            type="text"
                            placeholder="Search for tactical gear, RIFs, accessories..."
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
