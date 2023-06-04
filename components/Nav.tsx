'use client';

import * as React from 'react';
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { HiMenuAlt3 } from 'react-icons/hi';

const SHEET_POSITIONS = ['top', 'right', 'bottom', 'left'] as const;

type SheetPosition = (typeof SHEET_POSITIONS)[number];

export function NavigationMenuDemo() {
    const [position, setPosition] = React.useState<SheetPosition>('left');
    return (
        <div className="flex items-center justify-between w-full bg-[#0B0E11] py-6 px-6 text-white">
            <Link href="/">
                <h1 className="font-bold text-xl cursor-pointer">Nadeem.Dev</h1>
            </Link>
            {/* Desktop Navigation */}
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="#home" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Home
                            </NavigationMenuLink>
                        </Link>
                        <Link href="#about" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                About
                            </NavigationMenuLink>
                        </Link>
                        <Link href="#projects" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Projects
                            </NavigationMenuLink>
                        </Link>
                        <Link href="#contact" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <Sheet>
                <SheetTrigger asChild>
                    <HiMenuAlt3 className="text-[2rem] lg:hidden cursor-pointer" />
                </SheetTrigger>
                <SheetContent position={position} size="content">
                    <SheetHeader>
                        <SheetDescription>
                            <ul className="text-white font-bold text-xl flex flex-col items-center justify-start gap-14 mt-14 h-screen">
                                <SheetClose>
                                    <a href="#home">
                                        <li className="cursor-pointer">Home</li>
                                    </a>
                                </SheetClose>
                                <SheetClose>
                                    <a href="#about">
                                        <li className="cursor-pointer">
                                            About
                                        </li>
                                    </a>
                                </SheetClose>
                                <SheetClose>
                                    <a href="#projects">
                                        <li className="cursor-pointer">
                                            Projects
                                        </li>
                                    </a>
                                </SheetClose>
                                <SheetClose>
                                    <a href="#contact">
                                        <li className="cursor-pointer">
                                            Contact
                                        </li>
                                    </a>
                                </SheetClose>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}
