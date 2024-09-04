import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ChevronDown, ChevronUp } from 'lucide-react'

const categories = ['All', 'RIFs', 'Attachments', 'Tactical Gear', 'Clothing', 'Accessories']

export default function FiltersSection() {
    const [priceRange, setPriceRange] = useState([0, 1000])
    const [isFilterExpanded, setIsFilterExpanded] = useState(false)

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl text-black font-bold">Filters</h2>
                <Button variant="default" size="sm" className='' onClick={() => setIsFilterExpanded(!isFilterExpanded)}>
                    {isFilterExpanded ? <ChevronUp /> : <ChevronDown />}
                </Button>
            </div>
            <div className={`space-y-6 ${isFilterExpanded ? 'block' : 'hidden md:block'}`}>
                <div>
                    <h3 className="font-semibold text-black mb-2">Category</h3>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category.toLowerCase()} className=''>{category}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <h3 className="font-semibold text-black mb-2">Price Range</h3>
                    <Slider
                        min={0}
                        max={1000}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-2">
                        <span className='text-black '>${priceRange[0]}</span>
                        <span className='text-black '>${priceRange[1]}</span>
                    </div>
                </div>
                {/* Add more filters here */}
                <Button className="w-full">Apply Filters</Button>
            </div>
        </div>
    )
}
