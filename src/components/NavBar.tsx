'use client';

import React, { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from './ui/navigation-menu';
import { NavigationMenuList } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { Button } from './ui/button';

const items = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

function NavBar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => document.querySelector(item.href));
      const scrollPosition = window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-10 flex w-full border-b border-gray-700 bg-background px-4 py-2">
      <NavigationMenu className="container mx-auto flex flex-row items-center justify-center">
        <NavigationMenuList className="flex flex-row items-center gap-1">
          {items.map((item) => (
            <NavigationMenuItem key={item.href} asChild>
              <Button
                variant={
                  activeSection === item.href.slice(1) ? 'outline' : 'ghost'
                }
                className={
                  activeSection === item.href.slice(1)
                    ? 'bg-slate-50/10 font-semibold text-slate-300'
                    : 'text-gray-200'
                }
              >
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink>{item.name}</NavigationMenuLink>
                </Link>
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBar;
