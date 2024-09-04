"use client"
import { Star, Heart, MessageCircle, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import React, { useState } from 'react'
import Image from 'next/image'

export default function ProductDetailPage() {
    const [currentImage, setCurrentImage] = useState(0)
    const images = [
        'https://utfs.io/f/d3f18d59-7e79-4371-b066-f2f366b1e6ad-wi2plm.jpg',
        'https://utfs.io/f/d3f18d59-7e79-4371-b066-f2f366b1e6ad-wi2plm.jpg',
        'https://utfs.io/f/d3f18d59-7e79-4371-b066-f2f366b1e6ad-wi2plm.jpg',
        'https://utfs.io/f/d3f18d59-7e79-4371-b066-f2f366b1e6ad-wi2plm.jpg'
    ]

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="container mx-auto px-4 py-8 pt-24">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Hero Section (Product Overview) */}
                <div className="space-y-4">
                    <div className="relative aspect-square">
                        <Image
                            src={images[currentImage]}
                            alt="Product image"
                            fill
                            className="object-cover rounded-lg"
                        />
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-6 w-6 text-black" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-6 w-6 text-black" />
                        </button>
                    </div>
                    <div className="flex space-x-2 overflow-x-auto">
                        {images.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Product thumbnail ${index + 1}`}
                                width={80}
                                height={80}
                                className={`rounded-md cursor-pointer m-4 ${currentImage === index ? 'ring-2 ring-primary' : ''
                                    }`}
                                onClick={() => setCurrentImage(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Tactical Gear Helmet</h1>
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold">$129.99</span>
                        <Badge>New</Badge>
                    </div>
                    <div className="flex space-x-2">
                        <Button className="flex-1">
                            <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                        </Button>
                        <Button variant="outline">
                            <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                        </Button>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">In Stock - Only 3 left!</p>
                </div>
            </div>

            {/* Product Details Section */}
            <Tabs defaultValue="description" className="mt-8">
                <TabsList>
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Product Description</h2>
                    <p>
                        This tactical gear helmet is designed for maximum protection and comfort during intense airsoft battles.
                        Made with high-quality materials, it features adjustable straps, ventilation ports, and compatibility
                        with most tactical accessories.
                    </p>
                    <h3 className="text-lg font-semibold mt-4 mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Lightweight and durable construction</li>
                        <li>Adjustable sizing for a perfect fit</li>
                        <li>Compatible with night vision mounts</li>
                        <li>Multiple color options available</li>
                    </ul>
                </TabsContent>
                <TabsContent value="specifications" className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                    <table className="w-full border-collapse">
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2 font-semibold">Material</td>
                                <td className="py-2">High-impact ABS plastic</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 font-semibold">Weight</td>
                                <td className="py-2">1.2 lbs (545 g)</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 font-semibold">Size Range</td>
                                <td className="py-2">Adjustable, fits head circumference 21-24 inches</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 font-semibold">Color Options</td>
                                <td className="py-2">Black, Tan, OD Green</td>
                            </tr>
                        </tbody>
                    </table>
                </TabsContent>
                <TabsContent value="shipping" className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Shipping & Returns</h2>
                    <p className="mb-2">
                        We offer free shipping on all orders over $100. Standard shipping typically takes 3-5 business days.
                    </p>
                    <p>
                        If you're not satisfied with your purchase, you can return the item within 30 days of delivery for a full refund.
                        Please note that the item must be unused and in its original packaging.
                    </p>
                </TabsContent>
            </Tabs>

            {/* Seller Information Section */}
            <div className="mt-8 p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Seller" />
                        <AvatarFallback>SB</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-semibold">SquirtleBattleGear</h3>
                        <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.8 (120 reviews)</span>
                        </div>
                    </div>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                    <MessageCircle className="mr-2 h-4 w-4" /> Contact Seller
                </Button>
            </div>

            {/* User Reviews Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <span className="text-lg font-semibold">4.8 out of 5</span>
                    <span className="ml-2 text-sm text-gray-500">(120 reviews)</span>
                </div>
                <Button>Write a Review</Button>
                <div className="mt-4 space-y-4">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="border-b pb-4">
                            <div className="flex items-center mb-2">
                                <Avatar className="h-8 w-8 mr-2">
                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <span className="font-semibold">AirsoftEnthusiast</span>
                            </div>
                            <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-2 text-sm text-gray-500">2 weeks ago</span>
                            </div>
                            <p>
                                Great helmet! Very comfortable and lightweight. Fits well with all my other tactical gear. I highly recommend it!
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
