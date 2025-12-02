"use client";

import Link from "next/link";
import { Dog, Footprints, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const navLinks = [
    { href: "#browse", label: "Browse Pet", icon: Dog },
    { href: "#how-it-works", label: "How it works", icon: Footprints },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl">PetPinas</span>
        </div>

        <div className="md:flex items-center gap-6 hidden">
          {navLinks.map(({href, label}) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[#000181] transition-colors"
            >
              {label}
            </Link>
          ))}

          <Button
            variant="secondary"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-medium"
          >
            Sign Up
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden cursor-pointer"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[250px] bg-white border-none">
            <SheetHeader>
              <SheetTitle>
                <span className="font-bold text-xl">PetPinas</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-2 mt-2 text-md p-2">
              {navLinks.map(({href, icon: Icon, label}) => (
                <Link
                  key={href}
                  href={href}
                  className="p-2 transition-colors flex gap-3 items-center"
                >
                 {Icon && <Icon className="w-4 h-4"/>}
                  {label}
                </Link>
              ))}
              <Button
                variant="secondary"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-medium"
              >
                Sign Up
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
