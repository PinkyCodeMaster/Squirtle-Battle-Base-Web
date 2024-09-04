import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronRight, ThumbsUp, MessageSquare } from 'lucide-react'

export default function ReviewCard() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="User" width={40} height={40} />
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-lg">User123</CardTitle>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    Great gear! The durability and functionality exceeded my expectations. Perfect for both beginners and experienced players.
                </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <Button variant="link" className="p-0">
                    Read Full Review <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                        <ThumbsUp className="mr-1 h-4 w-4" /> 42
                    </Button>
                    <Button variant="ghost" size="sm">
                        <MessageSquare className="mr-1 h-4 w-4" /> 5
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
