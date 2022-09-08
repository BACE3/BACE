import React from 'react'

export default function HeroArea() {
    return (
        <section className="hero__area hero__height p-relative d-flex align-items-center" style={{"backgroundImage":"url(/img/hero/home-1/hero-bg.jpg)"}}>
            <div className="hero__shape">
               <img className="hero-circle-1" src="/img/icon/hero/home-1/circle-1.png" alt=""/>
               <img className="hero-circle-2" src="/img/icon/hero/home-1/circle-2.png" alt=""/>
               <img className="hero-triangle-1" src="/img/icon/hero/home-1/triangle-1.png" alt=""/>
               <img className="hero-triangle-2" src="/img/icon/hero/home-1/triangle-2.png" alt=""/>
            </div>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-7 col-xl-6 col-lg-6">
                     <div className="hero__content pr-80">
                        <h2 className="hero__title wow fadeInUp" data-wow-delay=".3s">Three-tools by BACE</h2>
                        <p className="wow fadeInUp" data-wow-delay=".5s">Developer tools for 3D library three.js.</p>
                        {/* <div className="hero__search wow fadeInUp" data-wow-delay=".7s">
                           <form action="#">
                              <input type="email" placeholder="Enter your email.." />
                              <button type="submit" className="w-btn w-btn-2">search</button>
                           </form>
                           <div className="hero__search-info">
                              <span> <i className="fal fa-check"></i> Easy to download and use</span>
                              <span> <i className="fal fa-check"></i> No credit card required</span>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-6 col-lg-6">
                     <div className="hero__thumb text-end ml-220">
                        <div className="hero__thumb-wrapper p-relative ">
                           <img className="hero-circle" src="/img/hero/home-1/hero-circle.png" alt="" />
   
                           <div className="hero__thumb-shape shape-1">
                              <img src="/img/hero/home-1/hero-1.png" alt=""/>
                           </div>
                           <div className="hero__thumb-shape shape-2">
                              <img src="/img/hero/home-1/hero-2.png" alt=""/>
                           </div>
                           <div className="hero__thumb-shape shape-3">
                              <img src="/img/hero/home-1/hero-3.png" alt=""/>
                           </div>
                           <div className="hero__thumb-shape shape-4">
                              <img src="/img/hero/home-1/hero-4.png" alt=""/>
                           </div>
                           <div className="hero__thumb-shape shape-5">
                              <img src="/img/hero/home-1/hero-5.png" alt=""/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
