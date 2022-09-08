import React from 'react'
import Link from 'next/link'
import MetisMenu from 'metismenujs';
import { useState, useEffect, useLayoutEffect } from "react";

export default function NavBarMobile() {
    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);
    return (
        <nav className="mean-nav" >
            <ul className="metismenu text-muted" id="metismenu">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>Our Story</a></Link></li>
                <li>
                    <Link href="/services"><a className="has-arrow">Documentation</a></Link>
                    <ul className="submenu">
                        <li><Link href="/services"><a>Overview</a></Link></li>
                        <li><Link href="/services-details"><a>Details</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/team"><a>Meet the Team</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
                <li><a href="https://github.com/oslabs-beta/BACE#readme" target="_blank">GitHub</a></li>
            </ul>
            {/* <ul className="metismenu text-muted" id="metismenu">
                <li className="has-dropdown">
                    <Link href="/"><a className="has-arrow" href="#" aria-expanded="true">Home</a></Link>
                    <ul className="submenu">
                        <li><Link href="/"><a>Home 1</a></Link></li>
                        <li><Link href="/index-2"><a>Home 2</a></Link></li>
                        <li><Link href="/index-3"><a>Home 3</a></Link></li>
                        <li><Link href="/index-4"><a>Home 4</a></Link></li>
                        <li><Link href="/index-5"><a>Home 5</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/about"><a className="has-arrow" href="#" aria-expanded="true">About</a></Link></li>
                <li className="has-dropdown">
                    <Link href="/services" className="has-arrow" href="#" aria-expanded="true"><a>Services</a></Link>
                    <ul className="submenu">
                        <li><Link href="/services"><a>Services</a></Link></li>
                        <li><Link href="/services-details"><a>Services Details</a></Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="/blog"><a>Blog</a></Link>

                    <ul className="submenu">
                        <li><Link href="/blog"><a>Blog</a></Link></li>
                        <li><Link href="/blog-standard"><a>Blog Standard</a></Link></li>
                        <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link href="/about"><a className="has-arrow" href="#" aria-expanded="true">Pages</a></Link>
                    <ul className="submenu">
                        <li><Link href="/faq"><a>Faq</a></Link></li>
                        <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                        <li><Link href="/portfolio-details"><a>Portfolio Details</a></Link></li>
                        <li><Link href="/team"><a>Team</a></Link></li>
                        <li><Link href="/team-details"><a>Team Details</a></Link></li>
                        <li><Link href="/error"><a>Error 404</a></Link></li>
                        <li><Link href="/sign-up"><a>Sign Up</a></Link></li>
                        <li><Link href="/sign-in"><a>Sign In</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul> */}
        </nav>


    )
}
