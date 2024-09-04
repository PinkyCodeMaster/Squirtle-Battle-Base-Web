import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface ProductCardProps {
    viewMode: 'grid' | 'list'
    featured?: boolean
}

export default function ProductCard({ viewMode, featured = false }: ProductCardProps) {
    return (
        <Card className={`${featured ? 'border-primary' : ''} ${viewMode === 'list' ? 'flex' : ''}`}>
            <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} relative`} style={{ paddingBottom: '100%' }}>
                <Image
                    src="https://utfs.io/f/86fde4e0-bd29-4013-ae13-0b7913e53e51-8tlbnx.jpg"
                    alt="Product"
                    fill  // Use fill to make the image responsive
                    style={{ objectFit: 'cover' }}  // Replace objectFit with style
                    className="rounded-t-lg"
                />
                {featured && (
                    <Badge className="absolute top-2 left-2" variant="secondary">
                        Featured
                    </Badge>
                )}
            </div>
            <div className={viewMode === 'list' ? 'w-2/3' : 'w-full'}>
                <CardHeader>
                    <CardTitle>Tactical Vest XL-2000</CardTitle>
                    <CardDescription>High-quality tactical vest for all your gear</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold">$129.99</span>
                        <Badge>New</Badge>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Seller" />
                            <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">TacticalGear99</span>
                    </div>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">(12 reviews)</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">View Details</Button>
                </CardFooter>
            </div>
        </Card>
    )
}
