import React from 'react'
import Link from 'next/link'

export default function ContactSupport() {
    return (
        <section className="contact__support p-relative pb-110">
            <div className="contact__shape">
               <img src="/img/contact/shape.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="contact__item-inner hover__active mb-30">
                        <div className="contact__item text-center transition-3 white-bg">
                           <div className="contact__icon d-flex justify-content-center align-items-end">
                              <img src="/img/contact/call.png" alt=""/>
                           </div>
                           <div className="contact__content">
                              <h3 className="contact__title-2"><Link href="#"><a>Quick Answers</a></Link></h3>
                              <p>Absolutely bladdered he  blimey guvnor agency. </p>
                              <Link href="#"><a className="link-btn">Read More <i className="arrow_right"></i></a></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="contact__item-inner hover__active mb-30">
                        <div className="contact__item text-center transition-3 white-bg">
                           <div className="contact__icon d-flex justify-content-center align-items-end">
                              <img src="/img/contact/message.png" alt=""/>
                           </div>
                           <div className="contact__content">
                              <h3 className="contact__title-2"><Link href="#"><a>Customer Support</a></Link></h3>
                              <p>Absolutely bladdered he  blimey guvnor agency. </p>
                              <Link href="#"><a className="link-btn">Help & Support<i className="arrow_right"></i></a></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="contact__item-inner hover__active mb-30">
                        <div className="contact__item text-center transition-3 white-bg">
                           <div className="contact__icon d-flex justify-content-center align-items-end">
                              <img src="/img/contact/social.png" alt=""/>
                           </div>
                           <div className="contact__content">
                              <h3 className="contact__title-2"><Link href="#"><a>We are Social</a></Link></h3>
                              <p>Absolutely bladdered he  blimey guvnor agency. </p>
                              <Link href="#"><a className="link-btn">Join our Community<i className="arrow_right"></i></a></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
