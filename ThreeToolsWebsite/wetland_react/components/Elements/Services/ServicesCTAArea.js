import Link from 'next/link'
import React from 'react'

export default function ServicesCTAArea() {
    return (
        <section className="cta__area blue-bg-10 pt-140 pb-130 p-relative fix z-index-1">
            <div className="cta__shape">
               <img className="cta-4-shape" src="/img/cta/home-4/cta-shape.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2">
                     <div className="cta__content-4 text-center">
                        <div className="section__title-wrapper section__title-wrapper-4 section__title-white text-center mb-45 wow fadeInUp" data-wow-delay=".3s">
                           <h2 className="section__title section__title-4">Download Three-tools Today!</h2>
                           <p>Clone our github repository and `load unpacked` in Chrome to start!</p>
                        </div>
                        <div className="section__title-wrapper section__title-wrapper-4 section__title-white text-center mb-25 wow fadeInUp" data-wow-delay=".5s">
                           {/* <form action="#">
                              <input type="email" placeholder="Enter Your Email"/>
                              <button type="submit">Start Free Trial</button>
                           </form> */}
                           <h3><a href="https://github.com/oslabs-beta/BACE" target="_blank">Go to Github</a></h3>
                        </div>
                        <div className="cta__features wow fadeInUp" data-wow-delay=".7s">
                           <ul>
                              <li>Product support</li>
                              <li>Chrome compatible</li>
                              <li>Latest Three.js version</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
