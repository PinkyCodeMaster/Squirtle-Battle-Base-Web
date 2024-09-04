import React from 'react'
import { Button } from "@/components/ui/button"

export default function CTASection() {
    return (
        <section className="py-12 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Sell Your Tactical Gear</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    Join our community of sellers and reach thousands of tactical gear enthusiasts.
                    Listing your products is quick, easy, and free!
                </p>
                <Button size="lg" variant="secondary">Start Selling Now</Button>
            </div>
        </section>
    )
}
