import React, {useState} from 'react'
import Link from 'next/link'

export default function ServicesArea() {const [open, setOpen] = useState("a1");
return (
    <section className="services__area grey-bg-3 pt-120 pb-90 p-relative">
        <div className="services__shape-2">
           <img className="services-2-circle" src="/img/icon/services/home-2/services-circle.png" alt=""/>
           <img className="services-2-circle-2" src="/img/icon/services/home-2/services-circle-2.png" alt=""/>
        </div>
        <div className="container">
           <div className="row align-items-end">
              <div className="col-xxl-4 col-lg-5 col-md-7">
                 <div className="section__title-wrapper mb-70 wow fadeInUp" data-wow-delay=".3s">
                    <span className="section__pre-title purple">New Features</span>
                    <h2 className="section__title section__title-2">Check out our new features!</h2>
                 </div>
              </div>
              <div className="col-xxl-8 col-lg-7 col-md-5">
                 <div className="services__more mb-70 text-sm-end">
                    <Link href="/services"><a className="w-btn w-btn-blue w-btn-6 w-btn-3">view all features</a></Link>
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                 <div className={`services__inner services__inner-2 hover__active mb-30 ${open==="a1" ? "active" : " "}`} onMouseOver={() => setOpen("a1")}>
                    <div className="services__item-2 transition-3 white-bg ">
                       <div className="services__icon-2">
                          <img src="/img/icon/services/home-2/services-1.png" alt=""/>
                       </div>
                       <div className="services__content-2">
                          {/* <h3 className="services__title-2"><Link href="/services-details"><a>Development</a></Link></h3> */}
                          <h3 className="services__title-2">Development</h3>
                          <p>Developed by Emily Bae, Katie Ahn, Alyssa Chew, Karl Eden (BACE)</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className={`services__inner services__inner-2 hover__active mb-30 ${open==="a2" ? "active" : " "}`} onMouseOver={() => setOpen("a2")}>
                    <div className="services__item-2 transition-3 white-bg ">
                       <div className="services__icon-2">
                          <img src="/img/icon/services/home-2/services-2.png" alt=""/>
                       </div>
                       <div className="services__content-2">
                          {/* <h3 className="services__title-2"><Link href="/services-details"><a>Technology</a></Link></h3> */}
                          <h3 className="services__title-2">Frontend Tech Stack</h3>
                          <p>JavaScript/HTML/CSS, LitElement, three.js, egjs</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className={`services__inner services__inner-2 hover__active mb-30 ${open==="a3" ? "active" : " "}`} onMouseOver={() => setOpen("a3")}>
                    <div className="services__item-2  transition-3 white-bg">
                       <div className="services__icon-2">
                          <img src="/img/icon/services/home-2/services-3.png" alt=""/>
                       </div>
                       <div className="services__content-2">
                          {/* <h3 className="services__title-2"><Link href="/services-details"><a>OptimalSort</a></Link></h3> */}
                          <h3 className="services__title-2">Backend Tech Stack</h3>
                          <p>JavaScript, Webextension Browser-Polyfill, Chrome API</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
)
}
