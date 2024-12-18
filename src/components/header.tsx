"use client";

import React, { useState } from "react";
import { Hoveredslug, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex space-x-4">
          <MenuItem setActive={setActive} active={active} item="Home">
            <Link href="/" className="text-white">Home</Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Our courses">
            <div className="flex flex-col space-y-4 text-sm">
              <Hoveredslug href="/courses">All Courses</Hoveredslug>
              <Hoveredslug href="/courses/basic-music-theory">Basic Music Theory</Hoveredslug>
              <Hoveredslug href="/courses/advance-composition">Advance Composition</Hoveredslug>
              <Hoveredslug href="/courses/song-writing">Song Writing</Hoveredslug>
              <Hoveredslug href="/courses/music-production">Music Production</Hoveredslug>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact Us">
            <Link href="/contact" className="text-white">
              Contact Us
            </Link>
          </MenuItem>
        </div>
      </Menu>
    </div>

)

}