"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import {cn } from "@/lib/utils";
import { motion } from "framer-motion";

const routes = [
  {
    label: 'Search',
    path: '/',
  },
  {
    label: 'Saved',
    path: '/saved',
  },
  {
    label: 'Account',
    path: '/account',
  },
]

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex items-center border-b border-black/20 h-14 py-6">
      <h1 className="text-2xl font-bold">Jobs</h1>
      <nav className="h-full ml-8 pt-1">
        <ul className="h-full flex items-center gap-x-6 text-lg">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                "flex items-center relative transition",
                {
                  'text-black/60': activePathname !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.label}</Link>

              {activePathname === route.path && (
                <motion.div
                  layoutId="activeLink"
                  className="bg-black h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
