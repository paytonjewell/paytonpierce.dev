"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { navLinks } from './Navbar'
import Link from 'next/link'

const HamburgerDropdownIcon = () => {
    return (
        <summary className="btn btn-ghost">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
        </summary>
    )
}

const MobileNavDropdown = () => {
    useEffect(() => {
        let details = document.querySelector('details');
        const handleClick = ({target}: MouseEvent) => {
            if (!details?.contains(target as Node)) {
                details?.removeAttribute('open');
            }
        }

        document.addEventListener('click', (e) => handleClick(e))
        
        return () => {
            document.removeEventListener('click', (e) => handleClick(e));
        }
    }, [])

    return (
        <details className="dropdown dropdown-start md:hidden">
            <HamburgerDropdownIcon />
            <ul tabIndex={0} className="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
                {navLinks.filter(link => link.mobile).map((link, index) => (
                    <li key={index}><Link href={link.href}>{link.label}</Link></li>
                ))}
            </ul>
        </details>
    )
}

export default MobileNavDropdown