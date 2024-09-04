import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

export default function BuildCard() {
    return (
        <Card>
            <CardHeader className="p-0">
                <div className="relative pb-[56.25%]">
                    <Image
                        src="https://utfs.io/f/ef93616e-1d55-4aab-9340-838957c13d83-rva6r.jpg"
                        alt="User Build"
                        fill
                        className="absolute inset-0 object-cover rounded-t-lg"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">Urban Assault Loadout</CardTitle>
                <CardDescription>
                    A versatile CQB setup optimized for urban environments and fast-paced gameplay.
                </CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Avatar>
                        <AvatarImage src="https://utfs.io/f/ef93616e-1d55-4aab-9340-838957c13d83-rva6r.jpg" alt="User" width={24} height={24} />
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">TacticalGamer99</span>
                </div>
                <Button variant="outline">View Build</Button>
            </CardFooter>
        </Card>
    )
}
