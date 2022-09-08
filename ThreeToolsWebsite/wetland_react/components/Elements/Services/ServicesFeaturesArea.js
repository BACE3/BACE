import React from 'react'

export default function ServicesFeaturesArea() {
    return (
        <section className="features__area pt-110 pb-70 p-relative overflow-y-visible">
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
                        <h2 className="section__title">Make Three.js Debugging Easy</h2>
                        <p>Comprehensive overview of three.js elements, their properties and rendering information</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className="features__item mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div className="features__icon mb-35">
                           <span className="gradient-pink"><i className="far fa-heart-rate"></i></span>
                        </div>
                        <h3 className="features__title">Scene & Camera Panel</h3>
                        <div className="features__list">
                           <ul>
                              <li>View Scene and Camera Properties</li>
                              <li>Edit Scene and Entity Properties</li>
                              <li>Save and Render Transform Data</li>
                              <li>Toggle Visibility & Search By Entity</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className="features__item mb-30 wow fadeInUp" data-wow-delay=".5s">
                        <div className="features__icon mb-35">
                           <span className="gradient-blue"><i className="fal fa-chart-pie-alt"></i></span>
                        </div>
                        <h3 className="features__title">Geometries, Materials and Textures Panels</h3>
                        <div className="features__list">
                           <ul>
                              <li>View Geometry, Material and Texture Properties</li>
                              <li>Edit Select Properties</li>
                              <li>Toggle Visibility & Search By Entity</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className="features__item mb-30 wow fadeInUp pl-45" data-wow-delay=".7s">
                        <div className="features__icon mb-35">
                           <span className="gradient-yellow"><i className="fal fa-tag"></i></span>
                        </div>
                        <h3 className="features__title">Renderer Panel</h3>
                        <div className="features__list">
                           <ul>
                              <li>Animations</li>
                              <li>3D Viewer</li>
                              <li>Creation</li>
                              <li>Packaging Designer </li>
                           </ul>
                        </div>
                     </div>
                  </div> */}
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 d-lg-flex justify-content-end">
                     <div className="features__item mb-30 wow fadeInUp" data-wow-delay=".9s">
                        <div className="features__icon mb-35">
                           <span className="gradient-purple"><i className="fal fa-layer-group"></i></span>
                        </div>
                        <h3 className="features__title">Renderer Panel</h3>
                        <div className="features__list">
                           <ul>
                              <li>View Renderer Info</li>
                              <li>View Renderer Memory Info</li>
                              <li>View & Edit WebGLRenderer Info</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
