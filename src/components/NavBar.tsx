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
  // { name: 'Projects', href: '#projects' },
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
    <div className="fixed top-0 z-10 flex w-full flex-row border-b border-gray-700 bg-black px-4 py-2">
      <NavigationMenu className="container flex flex-row items-center justify-between">
        <NavigationMenuList className="flex flex-row items-center">
          {items.map((item) => (
            <NavigationMenuItem key={item.href} asChild>
              <Button
                variant={
                  activeSection === item.href.slice(1) ? 'outline' : 'ghost'
                }
                className={
                  activeSection === item.href.slice(1)
                    ? 'font-semibold text-white'
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
      <Button
        variant="default"
        onClick={() => (window.location.href = 'mailto:farzadbarzin@gmail.com')}
        className="ml-auto text-sm font-semibold text-white"
      >
        Contact Me
      </Button>
    </div>
  );
}

export default NavBar;
