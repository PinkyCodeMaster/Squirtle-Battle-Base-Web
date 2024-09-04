'use client'

import BlogPostCard from "@/components/blog/blog-post-card";
import HeroSection from "@/components/hero/hero-section";
import ReviewCard from "@/components/blog/review-card";
import BuildCard from "@/components/blog/build-card";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';

export default function BlogAndReviewsPage() {
    const [activeCategory, setActiveCategory] = useState<string>('All')

    const categories: string[] = ['All', 'Gear Reviews', 'Site Reviews', 'Tips & Tricks', 'Product Launches']

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <HeroSection />

            {/* Featured Blog Posts Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(3)].map((_, index) => (
                            <BlogPostCard key={index} featured={true} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Categories Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl text-black font-bold mb-6">Categories</h2>
                    <div className="flex flex-wrap gap-4">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? 'default' : 'outline'}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Blog Posts Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(6)].map((_, index) => (
                            <BlogPostCard key={index} />
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Button variant="outline">Load More</Button>
                    </div>
                </div>
            </section>

            {/* User Reviews Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold">User Reviews</h2>
                        <Button>Leave a Review</Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(3)].map((_, index) => (
                            <ReviewCard key={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Builds Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold">Popular Builds</h2>
                        <Button>Submit Your Build</Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(3)].map((_, index) => (
                            <BuildCard key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
