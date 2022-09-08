import React from 'react'
import Link from 'next/link'

export default function TeamArea() {
    return (
        <section className="team__area grey-bg-3 pt-120 pb-70 overflow-y-visible p-relative">
            <div className="team__shape">
               <img className="team-dot" src="/img/icon/team/home-2/team-dot.png" alt=""/>
               <img className="team-triangle" src="/img/icon/team/home-2/team-triangle.png" alt=""/>
            </div>
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-8">
                     <div className="section__title-wrapper mb-70 wow fadeInUp" data-wow-delay=".3s">
                        <span className="section__pre-title blue">Team</span>
                        <h2 className="section__title section__title-2">A team of expert engineers</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="team__item mb-40">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <a href="https://www.linkedin.com/in/emily-yunseo-bae/" target="_blank">
                              <img src="/img/team/home-2/team-1.jpg" alt="" />
                           </a>

                           {/* <div className="team__social">
                              <a href="https://www.linkedin.com/in/emily-yunseo-bae/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                           </div> */}
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Emily Bae</a></Link></h3>
                           <span className="team__position">Software Engineer</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="team__item mb-40">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-2.jpg" alt=""/>

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Katie Ahn</a></Link></h3>
                           <span className="team__position">Software Engineer</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="team__item mb-40">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-3.jpg" alt=""/>

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Alyssa Chew</a></Link></h3>
                           <span className="team__position">Software Engineer</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                     <div className="team__item mb-40">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-4.jpg" alt=""/>

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Karl Eden</a></Link></h3>
                           <span className="team__position">Software Engineer</span>
                        </div>
                     </div>
                  </div>
                  {/* <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.2s">
                     <div className="team__item mb-40">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-5.jpg" alt=""/>

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Illian Decap</a></Link></h3>
                           <span className="team__position">Envato Customer</span>
                        </div>
                     </div>
                  </div> */}
                  {/* <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.5s">
                     <div className="team__item mb-40">
                        <div className="team__thumb w-img p-relative mb-20 fix">
                           <img src="/img/team/home-2/team-6.jpg" alt=""/>

                           <div className="team__social">
                              <ul>
                                 <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                 <li><Link href="#"><a><i className="fab fa-pinterest-p"></i></a></Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="team__content">
                           <h3 className="team__title"><Link href="/team-details"><a>Jonas John</a></Link></h3>
                           <span className="team__position">Creator</span>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
         </section>
    )
}
