import React from 'react'
import Link from 'next/link'

export default function AboutAboutArea() {
    return (
        <section className="about__area pb-45 pt-45 p-relative">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-9 order-last order-lg-first">
                     <div className="about__wrapper about__wrapper-2 mb-20">
                        <div className="section__title-wrapper mb-25 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title">Our Story</h2>
                           <p>
                              We are passionate about working through and solving tough engineering problems. 
                              Since Three-devtools has been deprecated, we listened to the community and updated 
                              the previous tool to be compatible with Chrome and created new functionality to enhance the developer experience.
                           </p>
                        </div>
                        <ul className="wow fadeInUp" data-wow-delay=".5s">
                           <li>Update Three.js version and Chrome compatibility</li>
                           <li>Add Camera properties, save transform properties, add visibility and search functionalities</li>
                           <li>Revamp UI/UX</li>
                        </ul>
                        {/* <Link href="/contact"><a className="w-btn w-btn-3 w-btn-1">Get Started</a></Link> */}
                     </div>
                  </div>
                  <div className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay=".7s">
                     <div className="about__thumb-wrapper-2 ml-40 p-relative m-img">
                        <img src="/img/about/home-2/about-1.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
