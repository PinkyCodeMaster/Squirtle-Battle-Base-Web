"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, User, ShoppingBag, Heart, LogOut } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()  // Use the correct hook

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/marketplace', label: 'Marketplace' },
    { href: '/game-sites', label: 'Game Sites' },
    { href: '/blog', label: 'Blog & Reviews' },
  ]

  const accountLinks = [
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/orders', label: 'Orders', icon: ShoppingBag },
    { href: '/wishlist', label: 'Wishlist', icon: Heart },
    { href: '/logout', label: 'Logout', icon: LogOut },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold">Squirtle Battle Base</span>
          </Link>
          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <span>My Account</span>
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {accountLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link href={link.href} className="flex items-center space-x-2">
                        <link.icon size={16} />
                        <span>{link.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button>Sell Gear</Button>
            </div>
          )}
        </div>
      </div>
      {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                My Account
              </button>
              {isOpen && (
                <div className="pl-4">
                  {accountLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={toggleMenu}
                    >
                      <link.icon size={16} />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-4">
              <Button className="w-full" onClick={toggleMenu}>Sell Gear</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
