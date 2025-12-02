import Link from "next/link"
import { Heart, Check, Users, FileText } from "lucide-react"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-secondary/40 to-background py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
                Connecting Stray Pets with <span className="text-primary">Loving Homes</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed text-balance">
                Find, Rescue, Adopt — All in One Place. Discover adoptable cats and dogs from trusted local rescue
                centers. Give them a second chance at life — or find your new best friend today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pets"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors font-semibold text-center"
                >
                  Browse Pets
                </Link>
                <Link
                  href="/rescue-signup"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/10 transition-colors font-semibold text-center"
                >
                  Rescue a Pet
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/pets.webp" alt="Happy adoptable pets" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-foreground/70 text-balance">
              We make pet adoption safe, transparent, and rewarding
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Verified Rescue Centers</h3>
              <p className="text-foreground/70 leading-relaxed">
                Every pet listing comes from trusted, registered rescue organizations. We thoroughly vet all rescue
                centers to ensure the highest standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Adoption Made Easy</h3>
              <p className="text-foreground/70 leading-relaxed">
                Apply to adopt with a few clicks. Track your application status in real-time and stay connected with the
                rescue center throughout the process.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Help Your Community</h3>
              <p className="text-foreground/70 leading-relaxed">
                Volunteer or report stray pets — help improve your neighborhood. Join a community of pet lovers
                dedicated to making a difference.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Pet Health & History</h3>
              <p className="text-foreground/70 leading-relaxed">
                Each pet profile includes medical records, vaccinations, and rescue story. Make informed decisions with
                complete pet information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
            <p className="text-lg text-foreground/70 text-balance">
              Get your new furry friend home in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 border-2 border-primary/40 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Browse Pets</h3>
                <p className="text-sm text-foreground/70">View adoptable animals with photos and details</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-primary/40" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 border-2 border-secondary/40 text-center">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Apply for Adoption</h3>
                <p className="text-sm text-foreground/70">Fill out a short application form</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-secondary/40" />
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 border-2 border-accent/40 text-center">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Track & Meet</h3>
                <p className="text-sm text-foreground/70">Rescue center contacts you for adoption meet-ups</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-accent/40" />
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-white rounded-xl p-6 border-2 border-primary/40 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Give Love</h3>
                <p className="text-sm text-foreground/70">Bring your new furry friend home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Stories from Our Community
            </h2>
            <p className="text-lg text-foreground/70">Join thousands of happy adopters and volunteers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "I adopted Max through this platform — couldn't be happier! The entire process was smooth and the rescue
                center was so helpful. Max has completely transformed our lives."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Jane D.</p>
                  <p className="text-sm text-foreground/60">Pet Adopter</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "As a volunteer, I can track stray pets and help rescue them efficiently. This platform has made it so
                much easier to coordinate rescue efforts and connect with other passionate volunteers in our community."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Miguel R.</p>
                  <p className="text-sm text-foreground/60">Volunteer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Join the Community of Pet Lovers Today!
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed text-balance">
            Whether you're looking to adopt, volunteer, or report stray pets, your contribution matters. Every action
            brings us closer to a world where every pet finds a loving home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors font-semibold"
            >
              Sign Up
            </Link>
            <Link
              href="/pets"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full hover:bg-secondary/90 transition-colors font-semibold"
            >
              Browse Pets
            </Link>
            <Link
              href="/volunteer"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/10 transition-colors font-semibold"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">PawMatch</span>
            </div>
            <p className="text-sm text-foreground/60">Connecting stray pets with loving homes</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
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
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>
            &copy; 2025 PawMatch. All rights reserved. | Made with <Heart className="w-4 h-4 inline text-primary" /> for
            pets
          </p>
        </div>
      </footer>
    </div>
  )
}
