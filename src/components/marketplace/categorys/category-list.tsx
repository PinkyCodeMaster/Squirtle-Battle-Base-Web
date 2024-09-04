import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = ['RIFs', 'Attachments', 'Tactical Gear', 'Clothing', 'Accessories']

export default function CategoryList() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
                    {categories.map((category) => (
                        <Card key={category} className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                                    {/* Replace with actual category icon */}
                                    <span className="text-2xl">{category[0]}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardTitle>{category}</CardTitle>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
