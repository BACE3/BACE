import React from 'react'
import Link from 'next/link'

export default function CTAArea() {
    return (
        <section className="cta__area mb--149 p-relative">
            <div className="circle-animation cta-1">
               <span></span>
            </div>
            <div className="circle-animation cta-1 cta-2">
               <span></span>
            </div>
            <div className="circle-animation cta-3">
               <span></span>
            </div>
            <div className="container">
               <div className="cta__inner p-relative fix z-index-1 wow fadeInUp" data-wow-delay=".5s">
                  <div className="cta__shape">
                     <img className="circle" src="/img/cta/home-1/cta-circle.png" alt=""/>
                     <img className="circle-2" src="/img/cta/home-1/cta-circle-2.png" alt=""/>
                     <img className="circle-3" src="/img/cta/home-1/cta-circle-3.png" alt=""/>
                     <img className="triangle-1" src="/img/cta/home-1/cta-triangle.png" alt=""/>
                     <img className="triangle-2" src="/img/cta/home-1/cta-triangle-2.png" alt=""/>
                  </div>
                  <div className="row">
                     <div className="col-xxl-12">
                        <div className="cta__wrapper d-lg-flex justify-content-between align-items-center">
                           <div className="cta__content">
                              <h3 className="cta__title">Create Amazing Three.js Projects<br/> Get Started with Three-tools by BACE</h3>
                           </div>
                           <div className="cta__btn">
                              <a className="w-btn w-btn-white" href="https://github.com/oslabs-beta/BACE" target="_blank">GitHub</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
