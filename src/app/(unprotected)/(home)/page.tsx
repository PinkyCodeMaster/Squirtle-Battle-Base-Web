import { ShoppingBag, MapPin, FileText, Users, Target, ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://utfs.io/f/209a0d33-d84b-46a2-93f5-23b52157f0f3-blada4.jpg"
            alt="Tactical gear background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Your Tactical Gear Marketplace</h1>
          <p className="text-xl mb-8">Equip, Review, and Battle Ready</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" aria-label="Join the Battle">
              Join the Battle
            </Button>
            <Link href="/marketplace" passHref>
              <Button size="lg" variant="outline" className="text-black dark:text-white border-white hover:bg-white hover:text-primary">
                Explore Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800"></div>

      {/* Featured Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Featured Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src="https://utfs.io/f/7c9cbf9e-5fea-42d6-8b7d-257981d00358-q7mw90.jpg"
                    alt={`Product ${item}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Tactical Gear Item {item}</h3>
                    <p className="text-muted-foreground mb-4">High-quality tactical equipment for professionals.</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground">$199.99</span>
                      <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800"></div>

      {/* Blog Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary-foreground">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Top 10 Airsoft Tactics for Beginners", category: "Guides" },
              { title: "Maintaining Your Tactical Gear: A Comprehensive Guide", category: "Maintenance" },
              { title: "The Evolution of Tactical Gear in Modern Warfare", category: "History" },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src={`https://utfs.io/f/9793804a-4038-4014-b80d-63dfab9d7a12-7k0jzj.jpg`}
                    alt={`Blog post ${index + 1}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-primary font-semibold">{post.category}</span>
                    <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link href={`/blog/${index}`} className="inline-flex items-center text-primary hover:underline">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" passHref>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800"></div>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Stay Updated with Exclusive Deals!</h2>
          <p className="mb-8 text-muted-foreground">Join our newsletter for product announcements, exclusive deals, and tactical tips.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3"
            />
            <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800"></div>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary-foreground">Explore the Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <ShoppingBag className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Marketplace</h3>
                <p className="text-center mb-4 text-muted-foreground">Buy and sell tactical gear with ease.</p>
                <Link href="/marketplace" passHref>
                  <Button className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    Shop Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Game Sites Map</h3>
                <p className="text-center mb-4 text-muted-foreground">Discover airsoft locations near you.</p>
                <Link href="/game-sites" passHref>
                  <Button className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    Find Sites
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Build Reviews</h3>
                <p className="text-center mb-4 text-muted-foreground">Explore user-submitted gear setups.</p>
                <Link href="/blog" passHref>
                  <Button className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    Read Reviews
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800"></div>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary-foreground">What Our Users Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John D.", quote: "Squirtle Battle Base has revolutionized how I buy and sell tactical gear. The community is fantastic!", imageURl: 'https://utfs.io/f/a74a118f-b823-475b-8c96-6fd75ae5b3b1-cx9vf7.jpg' },
              { name: "Sarah M.", quote: "I love the Game Sites Map feature. It&apos;s made finding new airsoft locations so much easier.", imageURl: 'https://utfs.io/f/a74a118f-b823-475b-8c96-6fd75ae5b3b1-cx9vf7.jpg' },
              { name: "Mike R.", quote: "The user reviews have helped me make informed decisions about my gear purchases. Great platform!", imageURl: 'https://utfs.io/f/a74a118f-b823-475b-8c96-6fd75ae5b3b1-cx9vf7.jpg' },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-16 h-16 bg-primary rounded-full mb-4">
                    <Image
                      src={testimonial.imageURl}
                      alt={'Testimonials User Icon'}
                      width={400}
                      height={200}
                    />
                  </div>
                  <p className="text-center mb-4 italic text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800"></div>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Join a Growing Community!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, stat: "5,000+", label: "Tactical Experts" },
              { icon: ShoppingBag, stat: "10,000+", label: "Gear Pieces Sold" },
              { icon: Target, stat: "100+", label: "Game Sites Reviewed" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <item.icon className="w-12 h-12 mb-4" />
                <p className="text-4xl font-bold mb-2">{item.stat}</p>
                <p className="text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800"></div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/marketplace" className="hover:text-primary">Marketplace</Link></li>
                <li><Link href="/game-sites" className="hover:text-primary">Game Sites Map</Link></li>
                <li><Link href="/blog" className="hover:text-primary">Blogs & Reviews</Link></li>
                <li><Link href="/contact-us" className="hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-primary" target='_blank'>
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-primary" target='_blank'>
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-primary" target='_blank'>
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <p>&copy; 2023 Squirtle Battle Base. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}