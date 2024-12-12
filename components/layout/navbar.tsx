"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@/components/auth/auth-button";
import { 
  Home, 
  LayoutDashboard, 
  Shield, 
  Crown, 
  Settings,
  Menu
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { data: session } = useSession();
  const isPro = session?.user?.subscription?.plan === "PRO";
  const isEnterprise = session?.user?.subscription?.plan === "ENTERPRISE";
  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <nav className="border-b bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Home className="h-6 w-6 text-primary" />
              <span className="ml-2 font-bold">SaaS Platform</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
                <LayoutDashboard className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
              
              <Link href="/pro" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
                <Crown className="h-4 w-4 mr-1" />
                Pro
              </Link>
              
              <Link href="/enterprise" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
                <Shield className="h-4 w-4 mr-1" />
                Enterprise
              </Link>

              {isAdmin && (
                <Link href="/admin" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary">
                  <Settings className="h-4 w-4 mr-1" />
                  Admin
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {session.user.name || session.user.email}
                </span>
                <SignOutButton />
              </div>
            ) : (
              <div className="space-x-2">
                <Button variant="outline" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            )}

            <div className="sm:hidden ml-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/pro">Pro</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/enterprise">Enterprise</Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link href="/admin">Admin</Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}