"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AlertTriangle, Home, HelpCircle, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ErrorPageProps {
    statusCode: 404 | 500
}

export default function ErrorPage({ statusCode }: ErrorPageProps) {
    const is404 = statusCode === 404
    const title = is404 ? "Page Not Found" : "Internal Server Error"
    const description = is404
        ? "It seems the page you're looking for doesn't exist. Maybe it was removed or you mistyped the URL."
        : "We encountered an unexpected error. Our team is working to fix this. Please try again later."

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 text-center">
                    <div className="relative w-full h-40 mb-8">
                        <Image
                            src="https://utfs.io/f/cbeacdc2-af61-4f72-b70f-b169da70449b-5h6wnb.jpg"
                            alt="Tactical background"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                            <h1 className="text-white text-6xl font-bold">{statusCode}</h1>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <AlertTriangle className="mx-auto h-12 w-12 text-yellow-400" />
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
                        <p className="mt-2 text-sm text-gray-600">{description}</p>
                    </div>
                    <div className="mt-8 space-y-4">
                        <Button asChild className="w-full">
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" /> Return to Home
                            </Link>
                        </Button>
                        <div className="grid grid-cols-2 gap-4">
                            <Button asChild variant="outline">
                                <Link href="/marketplace">
                                    <ShoppingBag className="mr-2 h-4 w-4" /> Explore Marketplace
                                </Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href="/support">
                                    <HelpCircle className="mr-2 h-4 w-4" /> Get Help
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Helpful Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/game-sites" className="text-primary hover:underline">Find Game Sites</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-primary hover:underline">Read Blog & Reviews</Link>
                            </li>
                            <li>
                                <Link href="/account" className="text-primary hover:underline">My Account</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <footer className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="flex space-x-6">
                            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link>
                            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-gray-500" target='_blank'>
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500" target='_blank'>
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
