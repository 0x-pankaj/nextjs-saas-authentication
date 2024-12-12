import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Crown, Shield, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Our SaaS Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose the perfect plan for your needs
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pro Features */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <Crown className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Pro Features</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Access advanced features and priority support
              </p>
              <Button className="w-full" asChild>
                <Link href="/pro">Learn More</Link>
              </Button>
            </div>

            {/* Enterprise Features */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Custom solutions for large organizations
              </p>
              <Button className="w-full" asChild>
                <Link href="/enterprise">Explore</Link>
              </Button>
            </div>

            {/* Admin Panel */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Admin Panel</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Manage users and monitor system
              </p>
              <Button className="w-full" asChild>
                <Link href="/admin">Access Panel</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}