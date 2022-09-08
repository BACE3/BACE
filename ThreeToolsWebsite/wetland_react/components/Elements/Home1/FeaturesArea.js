import React from 'react'
import Link from 'next/link'

export default function FeaturesArea() {
    return (
        <section className="features__area pt-60 pb-155 p-relative overflow-y-visible">
        <div className="circle-animation features">
           <span></span>
        </div>
        <div className="features__shape">
           <img className="features-circle-1" src="/img/icon/features/home-1/circle-1.png" alt=""/>
        </div>
        <div className="container">
           <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                 <div className="section__title-wrapper mb-65 wow fadeInUp" data-wow-delay=".3s">
                    <h2 className="section__title">Three-tools has Easy Debugging Features.</h2>
                    <p>Now compatible with Chrome and the latest version of three.js</p>
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="features__item mb-30 wow fadeInUp" data-wow-delay=".3s">
                    <div className="features__icon mb-35">
                       <span className="gradient-pink"><i className="far fa-heart-rate"></i></span>
                    </div>
                    <h3 className="features__title">Updated Scene and Camera Display</h3>
                    <div className="features__list">
                       <ul>
                          <li>List camera properties</li>
                          <li>Click to Select by Name/Type/UUID</li>
                          <li>Support for all camera types</li>
                       </ul>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="features__item mb-30 wow fadeInUp pl-15" data-wow-delay=".5s">
                    <div className="features__icon mb-35">
                       <span className="gradient-blue"><i className="fal fa-chart-pie-alt"></i></span>
                    </div>
                    <h3 className="features__title">Search Functionality</h3>
                    <div className="features__list">
                       <ul>
                          <li>Search by UUID, Name, or Type</li>
                          <li>View and edit properties without traversing through the tree</li>
                          <li>Search in Scenes, Textures, Materials and Geometries!</li>
                       </ul>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="features__item mb-30 wow fadeInUp pl-45" data-wow-delay=".7s">
                    <div className="features__icon mb-35">
                       <span className="gradient-yellow"><i className="fal fa-tag"></i></span>
                    </div>
                    <h3 className="features__title">UI/UX Updates</h3>
                    <div className="features__list">
                       <ul>
                          <li>Hide / Show Toggle</li>
                          <li>Updated icons</li>
                          <li>Additional Buttons</li>
                       </ul>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 d-lg-flex justify-content-end">
                 <div className="features__item mb-30 wow fadeInUp" data-wow-delay=".9s">
                    <div className="features__icon mb-35">
                       <span className="gradient-purple"><i className="fal fa-layer-group"></i></span>
                    </div>
                    <h3 className="features__title">Caching Properties</h3>
                    <div className="features__list">
                       <ul>
                          <li>Save Transform Properties of a Scene</li>
                          <li>Display that data in a popup + the console</li>
                          <li>**Store in a database for future reference</li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-xxl-12">
                 <div className="features__more text-center mt-50">
                    <Link href="/services"><a className="w-btn w-btn-6 w-btn-5">View all Features</a></Link>
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}
