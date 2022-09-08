import React from 'react'
import Link from 'next/link'

export default function ServicesDetailsDetails() {
   const nestedStyle = {
      paddingLeft: '5px'
   }
    return (
        <section className="services__details pt-115 pb-100">
            <div className="container">
                  <div className="row">
                     <div className="col-xl-4 col-lg-4 order-last order-lg-first">
                        <div className="services__sidebar mr-50">
                              <div className="services__widget grey-bg-20 mb-40 wow fadeInUp" data-wow-delay=".2s">
                                 <div className="services__widget-title">
                                    <h4>Table of Contents</h4>
                                 </div>
                                 <div className="services__widget-content">
                                    <div className="services__link">
                                          <ul>
                                             <li><Link href="/services-details"><a>Getting Started</a></Link></li>
                                             <li><Link href="/services-details"><a>Scenes & Cameras Panel</a></Link></li>
                                             <li><Link href="/services-details"><a>Geometries Panel</a></Link></li>
                                             <li><Link href="/services-details"><a>Materials Panel</a></Link></li>
                                             <li><Link href="/services-details"><a>Textures Panel</a></Link></li>
                                             <li><Link href="/services-details"><a>Renderer Panel</a></Link></li>
                                          </ul>
                                    </div>
                                 </div>
                              </div>
                              {/* <div className="services__widget grey-bg-20 mb-40 wow fadeInUp" data-wow-delay=".4s">
                                 <div className="services__widget-title">
                                    <h4>Subscribe Now</h4>
                                 </div>
                                 <div className="services__widget-content">
                                    <div className="services__form">
                                          <form action="#">
                                             <input type="text" placeholder="Name"/>
                                             <input type="email" placeholder="Email"/>
                                             <button className="w-btn w-100">Subscribe Now</button>
                                          </form>
                                    </div>
                                 </div>
                              </div> */}
                              <div className="services__action grey-bg-20 mb-15 wow fadeInUp" data-wow-delay=".6s">
                                 <Link href="#"><a><i className="fal fa-download"></i>Download docs</a></Link>
                              </div>
                              <div className="services__action grey-bg-20 mb-15 wow fadeInUp" data-wow-delay=".6s">
                                 <Link href="#"><a><i className="fal fa-file-pdf"></i>Characteristics</a></Link>
                              </div>
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-8">
                        <div className="services__text">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Getting Started</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">The Three-tools UI is full of information but might be a bit overwhelming! Relevant information is separated into different panels for your convenience. Recommended starting points for learning how Three-tools can improve your productivity are listed below! </p>
                              <p className="wow fadeInUp" data-wow-delay=".6s">(NOTE: Within each panel, numbers and values can be typed or dragged to change)</p>
                        </div>
                        <div className="services__text">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Scenes & Cameras Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">View and change scene and camera properties </p>
                              <p className="wow fadeInUp" data-wow-delay=".6s">Click the dropdown menu of scenes and cameras to view different entity maps. Scenes and 3D objects are currently editable but camera properties are not able to be altered.</p>
                        </div>
                        <div className="services__img mb-45 w-img wow fadeInUp" data-wow-delay=".6s">
                              <img src="/img/services/details/services-01.jpg" alt=""/>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                 <li className="wow fadeInUp" data-wow-delay=".2s">Select entities from the tree to view a smaller panel to the right with their properties</li>
                                 <li className="wow fadeInUp" data-wow-delay=".3s">Use the search bar to search for entities by Name, Type or UUID (Note: UUID is not persistent and may change on reload)</li>
                                 <li className="wow fadeInUp" data-wow-delay=".4s">Use the refresh button to reload the panel</li>
                                 <li className="wow fadeInUp" data-wow-delay=".5s">Use the visibility icons to toggle entities on and off</li>
                                 <li className="wow fadeInUp" data-wow-delay=".6s">For Scenes and 3D Objects / Entities: </li>
                                       <li className="wow fadeInUp" data-wow-delay=".6s">Developers can view the Type, UUID, and Name properties</li>
                                 <li className="wow fadeInUp" data-wow-delay=".7s">For Cameras:</li>
                              </ul>
                        </div>
                        <div className="services__text">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Geometries Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">Cheeky say horse play cup of char bubble and squeak blower pukka what a load of rubbish off his nut, a blinding shot pardon you young delinquent argy-bargy no biggie only a quid pardon me haggle, bleeding amongst the wireless easy peasy loo <span> <Link href="/about"><a>Charles I don&#39;t want no agro</a></Link></span>. Why gormless loo he lost his bottle wellies cup of tea pardon me lost the plot naff what a plonker, lurgy show off show off pick your nose and blow off super knackered smashing blower morish my lady, bodge codswallop bits and bobs bobby arse get stuffed mate down the pub mush. Eaton lavatory on your bike mate loo bugger all mate nancy boy me old mucker he legged it, twit vagabond pardon me cockup gormless buggered wellies, A bit of how&#39;s your father bum bag codswallop bleeder cracking goal absolutely bladdered.</p>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                 <li className="wow fadeInUp" data-wow-delay=".2s">Set up in minutes</li>
                                 <li className="wow fadeInUp" data-wow-delay=".3s">Save time with Automations</li>
                                 <li className="wow fadeInUp" data-wow-delay=".4s">Visualize work with Views</li>
                                 <li className="wow fadeInUp" data-wow-delay=".5s">Customer support</li>
                              </ul>
                        </div>
                        <div className="services__text">
                              <h4 className="wow fadeInUp" data-wow-delay=".6s">Why gormless loo he lost his bottle wellies cup of tea pardon me lost the plot naff what a plonker lurgy show off show off pick your nose and blow.</h4>
                              <p className="wow fadeInUp" data-wow-delay=".8s">Horse play skive off I amongst bonnet hanky panky Richard brown bread grub I, sloshed nice one lavatory A bit of how&#39;s your father easy peasy daft jolly good is, spiffing golly gosh in my flat cup of char tomfoolery a vagabond James Bond. Mush down the pub victoria sponge zonked cracking goal off his nut the little rotter bits and bobs say starkers blower why I william give us a bell.</p>
                        </div>
                        <div className="services__text">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Materials Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">That brown bread spiffing nice one zonked spiffing good time loo so I said bite your arm off argy-bargy, skive off amongst chip shop hanky panky blow off blower it&#39;s your round sloshed, spend a penny mush pukka barmy Harry plastered gutted mate no biggie. Argy-bargy chap a blinding shot twit bits and bobs the wireless Oxford bamboozled pardon you cheers baking cakes mufty. </p>
                        </div>
                        <div className="services__img mb-45 w-img wow fadeInUp" data-wow-delay=".6s">
                              <img src="/img/services/details/services-01.jpg" alt=""/>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                 <li className="wow fadeInUp" data-wow-delay=".2s">Set up in minutes</li>
                                 <li className="wow fadeInUp" data-wow-delay=".3s">Save time with Automations</li>
                                 <li className="wow fadeInUp" data-wow-delay=".4s">Visualize work with Views</li>
                                 <li className="wow fadeInUp" data-wow-delay=".5s">Customer support</li>
                              </ul>
                        </div>
                        <div className="services__text">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Textures Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">That brown bread spiffing nice one zonked spiffing good time loo so I said bite your arm off argy-bargy, skive off amongst chip shop hanky panky blow off blower it&#39;s your round sloshed, spend a penny mush pukka barmy Harry plastered gutted mate no biggie. Argy-bargy chap a blinding shot twit bits and bobs the wireless Oxford bamboozled pardon you cheers baking cakes mufty. </p>
                        </div>
                        <div className="services__img mb-45 w-img wow fadeInUp" data-wow-delay=".6s">
                              <img src="/img/services/details/services-01.jpg" alt=""/>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                 <li className="wow fadeInUp" data-wow-delay=".2s">Set up in minutes</li>
                                 <li className="wow fadeInUp" data-wow-delay=".3s">Save time with Automations</li>
                                 <li className="wow fadeInUp" data-wow-delay=".4s">Visualize work with Views</li>
                                 <li className="wow fadeInUp" data-wow-delay=".5s">Customer support</li>
                              </ul>
                        </div>
                        <div className="services__text">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Renderer Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">That brown bread spiffing nice one zonked spiffing good time loo so I said bite your arm off argy-bargy, skive off amongst chip shop hanky panky blow off blower it&#39;s your round sloshed, spend a penny mush pukka barmy Harry plastered gutted mate no biggie. Argy-bargy chap a blinding shot twit bits and bobs the wireless Oxford bamboozled pardon you cheers baking cakes mufty. </p>
                        </div>
                        <div className="services__img mb-45 w-img wow fadeInUp" data-wow-delay=".6s">
                              <img src="/img/services/details/services-01.jpg" alt=""/>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                 <li className="wow fadeInUp" data-wow-delay=".2s">Set up in minutes</li>
                                 <li className="wow fadeInUp" data-wow-delay=".3s">Save time with Automations</li>
                                 <li className="wow fadeInUp" data-wow-delay=".4s">Visualize work with Views</li>
                                 <li className="wow fadeInUp" data-wow-delay=".5s">Customer support</li>
                              </ul>
                        </div>
                     </div>
                  </div>
            </div>
         </section>
    )
}
