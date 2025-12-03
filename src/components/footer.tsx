import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer(){
    return(
    <footer className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-foreground">PawMatch</span>
            </div>
            <p className="text-sm text-foreground/60">Connecting stray pets with loving homes</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm ">
              <li>
                <Link href="/pets" className="hover:text-foreground transition-colors">
                  Browse Pets
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/rescue-centers" className="hover:text-foreground transition-colors">
                  Rescue Centers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Community</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/volunteer" className="hover:text-foreground transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-foreground transition-colors">
                  Report Stray Pet
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-foreground transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-center text-sm ">
          <p>
            &copy; 2025 PawMatch. All rights reserved. | Made with <Heart className="w-4 h-4 inline " /> for
            pets
          </p>
        </div>
      </footer>
    )
}