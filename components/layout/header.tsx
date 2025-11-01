"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Entry Permits", href: "/services/entry-permits" },
      { name: "Visa Services", href: "/services/visa-services" },
      { name: "Hotel Booking", href: "/services/hotel-booking" },
      { name: "Transportation", href: "/services/transportation" },
      { name: "Language Exams", href: "/services/language-exams" },
      { name: "Document Services", href: "/services/document-services" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop blur overlay */}
      <div
        className={cn(
          "fixed top-0 w-full h-24 z-40 transition-all duration-700 ease-out",
          isScrolled || !isHomePage
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-black/5"
            : "bg-transparent"
        )}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo with elegant animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center group">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://ik.imagekit.io/06fdnzilf/ChatGPT%20Image%208%20%D9%85%D8%A7%D9%8A%D9%88%202025_%2001_53_20%20%D9%85%20(1).png?updatedAt=1746701754026"
                    width={130}
                    height={130}
                    alt="Visa Welt Logo"
                    priority
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation with floating effect */}
            <nav className="hidden lg:flex items-center">
              <div
                className={cn(
                  "flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-500 ",
                  isScrolled || !isHomePage
                    ? "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-lg shadow-black/5"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                )}
              >
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative inline-flex items-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 group",
                        isScrolled || !isHomePage
                          ? "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                          : "text-white hover:text-white"
                      )}
                    >
                      <span className="relative z-10 flex items-center gap-1">
                        {item.name}
                        {item.submenu && (
                          <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                        )}
                      </span>

                      {/* Hover background effect */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100",
                          isScrolled
                            ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                            : "bg-white/10"
                        )}
                      />

                      {/* Active indicator */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0, x: "-50%" }}
                        whileHover={{ width: "80%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>

                    {/* Elegant submenu */}
                    <AnimatePresence>
                      {item.submenu && hoveredItem === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{
                            duration: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-56 mt-2 p-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-white/20 dark:border-slate-700/50"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                            >
                              <Link
                                href={subItem.href}
                                className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-200 group"
                              >
                                <span className="relative">
                                  {subItem.name}
                                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-0 group-hover:w-full transition-all duration-300" />
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Right Side Actions with elegant styling */}
            <div className="flex items-center space-x-3">
              {/* Control buttons with glassmorphism */}
              <div
                className={cn(
                  "flex items-center space-x-1 p-1 rounded-full transition-all duration-500",
                  isScrolled || !isHomePage
                    ? "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                )}
              >
                {/* Language Selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 "
                    >
                      <Globe className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                </DropdownMenu>

                {/* Theme Toggle */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
                    >
                      <motion.div
                        initial={false}
                        animate={{ rotate: theme === "dark" ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {theme === "dark" ? (
                          <Moon className="h-4 w-4" />
                        ) : (
                          <Sun className="h-4 w-4" />
                        )}
                      </motion.div>
                    </Button>
                  </DropdownMenuTrigger>
                </DropdownMenu>
              </div>

              {/* Premium CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="hidden lg:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 px-6 py-2 rounded-full font-medium">
                  Get Started
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full hover:bg-blue-500/10 transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-white/20 dark:border-slate-800/50"
            >
              <div className="container mx-auto px-6 py-6">
                <nav className="space-y-2">
                  {NAVIGATION_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="pl-6 space-y-1 mt-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.1 + subIndex * 0.05 + 0.1,
                              }}
                            >
                              <Link
                                href={subItem.href}
                                className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4"
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 rounded-xl py-3 font-medium">
                      Get Started
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
