import React from 'react'
import Link from 'next/link'

export default function NavBarMain() {
    return (
        <nav>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li> {/* main page introducing our product */}
                <li><Link href="/about"><a>Our Story</a></Link></li> {/* narrative for why we chose to build this product */}
                <li className="has-dropdown">
                    <Link href="/services"><a>Documentation</a></Link> {/* Documentation */}
                    <ul className="submenu">
                        <li><Link href="/services"><a>Overview</a></Link></li>
                        <li><Link href="/services-details"><a>Details</a></Link></li>
                    </ul>
                </li>
                <li><Link href="https://github.com/oslabs-beta/BACE#readme"><a>Blog</a></Link></li> {/* Medium Blog */}
                <li><Link href="/team"><a>Meet the Team</a></Link></li> {/* Team profile */}
                        {/* <li><Link href="/faq"><a>Faq</a></Link></li>
                        <li><Link href="/team"><a>Team</a></Link></li>
                        <li><Link href="/team-details"><a>Team Details</a></Link></li> */}
                <li><Link href="/contact"><a>Contact</a></Link></li> {/* BACE email */}
            </ul>
        </nav>


    )
}
