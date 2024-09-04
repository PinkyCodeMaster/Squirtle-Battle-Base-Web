"use client"
import React, { useState } from 'react'
import CategoryList from '@/components/marketplace/categorys/category-list'
import FiltersSection from "@/components/marketplace/filters-section"
import { Button } from "@/components/ui/button"
import { Grid, List } from 'lucide-react'
import HeroSection from '@/components/hero/hero-section-markectplace'
import ProductCard from '@/components/marketplace/prodects/product-card'
import CTASection from '@/components/cta/cta-section'

export default function MarketplacePage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    return (
        <div className="flex flex-col min-h-screen pt-16"> {/* Add padding-top */}
            {/* Hero Section */}
            <HeroSection />

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Filters Section */}
                        <FiltersSection />

                        {/* Product Grid/List Section */}
                        <div className="w-full md:w-3/4">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Products</h2>
                                <div className="flex items-center space-x-2">
                                    <Button variant="outline" size="icon" onClick={() => setViewMode('grid')}>
                                        <Grid className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" onClick={() => setViewMode('list')}>
                                        <List className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                                {[...Array(9)].map((_, index) => (
                                    <ProductCard key={index} viewMode={viewMode} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-black mb-6">Featured Listings</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[...Array(4)].map((_, index) => (
                            <ProductCard key={index} viewMode="grid" featured={true} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Category List Section */}
            <CategoryList />

            {/* Call-to-Action Section */}
            <CTASection />
        </div>
    )
}
