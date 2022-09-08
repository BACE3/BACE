import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
    return (

        <>
            <div className="sidebar__area">
                <div className="sidebar__wrapper">
                    <div className="sidebar__close">
                        <button className="sidebar__close-btn" id="sidebar__close-btn">
                            <span><i className="fal fa-times"></i></span>
                            <span>close</span>
                        </button>
                    </div>
                    <div className="sidebar__content">
                        <div className="logo mb-40">
                            <Link href="/"><a>
                                <img src="/img/logo/logo.png" alt="logo" />
                            </a></Link>
                        </div>
                        <div className="mobile-menu"></div>
                        <div className="sidebar__info mt-350">
                            <Link href="#"><a className="w-btn w-btn-4 d-block mb-15 mt-15">login</a></Link>
                            <Link href="#"><a className="w-btn d-block">sign up</a></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body Overlay end     */}
            <div className="body-overlay">

            </div>
        </>

    )
}
