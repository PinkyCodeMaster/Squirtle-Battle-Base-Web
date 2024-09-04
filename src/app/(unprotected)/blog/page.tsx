'use client'

import HeroSection from "@/components/hero/hero-section-blog";
import BlogPostCard from "@/components/blog/blog-post-card";
import ReviewCard from "@/components/blog/review-card";
import BuildCard from "@/components/blog/build-card";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BlogAndReviewsPage() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [articlesToShow, setArticlesToShow] = useState<number>(3); // Initially show 3 articles
    const totalArticles = 12; // Total number of articles available

    const categories: string[] = ['All', 'Gear Reviews', 'Site Reviews', 'Tips & Tricks', 'Product Launches'];

    // Simulated articles (you would replace this with actual data from your CMS or API)
    const articles = [...Array(totalArticles)].map((_, index) => (
        <BlogPostCard key={index} />
    ));

    // Function to load more articles
    const loadMoreArticles = () => {
        setArticlesToShow(prev => Math.min(prev + 3, totalArticles)); // Load 3 more articles up to the total
    };

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
                    <h2 className="text-3xl text-black font-bold mb-6">Latest Articles</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {articles.slice(0, articlesToShow)} {/* Show articles based on the current state */}
                    </div>
                    <div className="mt-8 flex justify-center">
                        {articlesToShow < totalArticles && (
                            <Button variant="outline" onClick={loadMoreArticles}>
                                Load More
                            </Button>
                        )}
                    </div>
                </div>
            </section>

            {/* User Reviews Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold text-black">User Reviews</h2>
                        <Link href="/reviews/submit">
                            <Button>Leave a Review</Button>
                        </Link>
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
                        <Link href="/builds/submit">
                            <Button>Submit Your Build</Button>
                        </Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[...Array(3)].map((_, index) => (
                            <BuildCard key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
