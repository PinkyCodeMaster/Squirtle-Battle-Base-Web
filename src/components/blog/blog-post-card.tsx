import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Share2, MessageSquare } from 'lucide-react'
import Image from 'next/image'

interface BlogPostCardProps {
    featured?: boolean;
}

export default function BlogPostCard({ featured = false }: BlogPostCardProps) {
    return (
        <Card className={featured ? 'border-primary' : ''}>
            <CardHeader className="p-0">
                <div className="relative pb-[56.25%] w-full h-0">
                    <Image
                        src="https://utfs.io/f/ef93616e-1d55-4aab-9340-838957c13d83-rva6r.jpg"
                        alt="User Build"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="absolute inset-0 rounded-t-lg"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <Badge className="mb-2">Gear Reviews</Badge>
                <CardTitle className="text-xl mb-2">Top 10 Airsoft Rifles for 2023</CardTitle>
                <CardDescription>
                    Discover the best airsoft rifles of 2023, from budget-friendly options to high-end models for professional players.
                </CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <Button variant="link" className="p-0">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <MessageSquare className="h-4 w-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
