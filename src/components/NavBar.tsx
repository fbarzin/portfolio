import React from 'react';
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
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Projects', href: '#projects' },
];

function NavBar() {
  return (
    <div className="fixed top-0 z-10 w-full border-b border-gray-700 bg-black py-2 pl-4 pr-8">
      <NavigationMenu className="container mx-auto flex flex-row items-center justify-between">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.href} asChild>
              <Button variant={'ghost'}>
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
