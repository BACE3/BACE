import React from 'react'
import Link from 'next/link'

export default function ServicesDetailsDetails() {
   const nestedOneTab = {
      marginLeft: '50px'
   }
   const nestedTwoTabs = {
      marginLeft: '100px'
   }
   const nestedThreeTabs = {
      marginLeft: '150px'
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
                                             <li><Link href="/services-details#getting-started"><a>Getting Started</a></Link></li>
                                             <li><Link href="/services-details#scenes-cameras"><a>Scenes & Cameras Panel</a></Link></li>
                                             <li><Link href="/services-details#geometries"><a>Geometries Panel</a></Link></li>
                                             <li><Link href="/services-details#materials"><a>Materials Panel</a></Link></li>
                                             <li><Link href="/services-details#textures"><a>Textures Panel</a></Link></li>
                                             <li><Link href="/services-details#renderer"><a>Renderer Panel</a></Link></li>
                                             <li><Link href="/services-details#popup"><a>Popup Cache</a></Link></li>
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
                              {/* <div className="services__action grey-bg-20 mb-15 wow fadeInUp" data-wow-delay=".6s">
                                 <Link href="#"><a><i className="fal fa-download"></i>Download docs</a></Link>
                              </div>
                              <div className="services__action grey-bg-20 mb-15 wow fadeInUp" data-wow-delay=".6s">
                                 <Link href="#"><a><i className="fal fa-file-pdf"></i>Characteristics</a></Link>
                              </div> */}
                        </div>
                     </div>
                     <div className="col-xl-8 col-lg-8">
                        <div className="services__text" id="getting-started">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Getting Started</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">The Three-tools UI is full of information but might be a bit overwhelming! Relevant information is separated into different panels for your convenience. Recommended starting points for learning how Three-tools can improve your productivity are listed below! </p>
                              <p className="wow fadeInUp" data-wow-delay=".6s">(NOTE: Within each panel, numbers and values can be typed or dragged to change)</p>
                        </div>
                        <div className="services__text" id="scenes-cameras">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Scenes & Cameras Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">View and change scene and camera properties </p>
                              <p className="wow fadeInUp" data-wow-delay=".6s">Click the dropdown menu of scenes and cameras to view different entity maps. Scenes and 3D objects are currently editable but camera properties are not able to be altered.</p>
                        </div>
                        <div className="services__img mb-45 w-img wow fadeInUp" data-wow-delay=".6s">
                              <img src="/img/services/details/services-01.png" alt=""/>
                              <p style={{ fontSize: '11px' }}>Credits to <a className="hyperlink" href="https://threejs.org/examples/webgl_animation_multiple.html" target="_blank">three.js Project Sample.</a> Click for more info.</p>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                 <li className="wow fadeInUp" data-wow-delay=".2s">Select entities from the tree to view a smaller panel to the right with their properties</li>
                                 <li className="wow fadeInUp" data-wow-delay=".3s">Use the search bar to search for entities by Name, Type or UUID (Note: UUID is not persistent and may change on reload)</li>
                                 <li className="wow fadeInUp" data-wow-delay=".4s">Use the refresh button to reload the panel</li>
                                 <li className="wow fadeInUp" data-wow-delay=".5s">Use the visibility icons to toggle entities on and off</li>
                                 <li className="wow fadeInUp" data-wow-delay=".6s">For Scenes and 3D Objects / Entities: </li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Developers can view the Type, UUID, and Name properties</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Developers can see the Transform and Rendering information and adjust those properties</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Within the Transform tab:</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>Adjust the position, rotation and scale</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>Use the Matrix Auto Update toggle to adjust whether or not changes are immediately reflected in the DOM</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>Click "Save" button to save specific properties if you would like to go back to them</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>Click "Display Saved Data" to open a popup caching these saved specs and log them to your console. Please see <a className="hyperlink" href="/services-details#popup">below</a> for a visual summary</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Within the Rendering tab:</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>Adjust the Render Order</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>The visibility toggle here works the same way as the visibility icon</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>Adjust shadow properties</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>FOR ONLY SCENES:</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>A Background tab will be available to adjust the Background color if it has been set (currently no support for Background textures or the default null background)</li>
                                 <li className="wow fadeInUp" data-wow-delay=".7s">For Cameras:</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>View the Type, UUID, Name and type specific properties</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>These properties are not currently adjustable</li>
                              </ul>
                        </div>
                        <div className="services__text" id="geometries">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Geometries Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">View and change geometry properties.</p>
                              <p className="wow fadeInUp" data-wow-delay=".6s">Lists the Geometries / BufferGeometries rendered to the scene(s) available</p>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                 <li className="wow fadeInUp" data-wow-delay=".2s">Use the search bar to search for entities by Name or UUID (Note: UUID is not persistent and may change on reload)</li>
                                 <li className="wow fadeInUp" data-wow-delay=".3s">Use the refresh button to reload the panel</li>
                                 <li className="wow fadeInUp" data-wow-delay=".4s">Use the visibility icons to toggle the entities on and off</li>
                                 <li className="wow fadeInUp" data-wow-delay=".5s">Select geometries from the list to see a list of their properties rendered on the right</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Type, UUID and Name</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Index</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Groups</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>If Groups is an array, it will be hyperlinked to open more information in a new tab</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Morph Targets Relative</li>
                              </ul>
                        </div>
                        <div className="services__text" id="materials">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Materials Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">View and change materials properties</p>
                              <p className="wow fadeInUp" data-wow-delay=".6s">Lists the Materials rendered to the scene(s) available</p>
                        </div>
                        <div className="services__img mb-45 w-img wow fadeInUp" data-wow-delay=".6s">
                              <img src="/img/services/details/services-02.png" alt=""/>
                              <p style={{ fontSize: '11px' }}>Credits to<a className="hyperlink" href="https://threejs.org/examples/webgl_animation_keyframes.html" target="_blank"> three.js Project Sample.</a> Click for more info.</p>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                 <li className="wow fadeInUp" data-wow-delay=".2s">Use the search bar to search for entities by Name or UUID (Note: UUID is not persistent and may change on reload)</li>
                                 <li className="wow fadeInUp" data-wow-delay=".3s">Use the refresh button to reload the panel</li>
                                 <li className="wow fadeInUp" data-wow-delay=".4s">Use the visibility icons to toggle the entities on and off</li>
                                 <li className="wow fadeInUp" data-wow-delay=".5s">Select Materials from the list to see a list of their properties</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Type, UUID and Name</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Color: adjustable by color map</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Materials Type Specific Properties</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>If null, not editable</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>Otherwise, can be adjusted</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Other nested tabs for more type specific properties</li>
                              </ul>
                        </div>
                        <div className="services__text" id="textures">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Textures Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">View and change textures properties</p>
                              <p className="wow fadeInUp" data-wow-delay=".6s">Lists the Textures rendered to the scene(s) available</p>
                        </div>
                        <div className="services__img mb-45 w-img wow fadeInUp" data-wow-delay=".6s">
                              <img src="/img/services/details/services-03.png" alt=""/>
                              <p style={{ fontSize: '11px' }}>Credits to <a className="hyperlink" href="https://threejs.org/examples/webgl_geometries.html" target="_blank">three.js Project Sample.</a> Click for more info.</p>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                 <li className="wow fadeInUp" data-wow-delay=".2s">Use the search bar to search for entities by Name or UUID (Note: UUID is not persistent and may change on reload)</li>
                                 <li className="wow fadeInUp" data-wow-delay=".3s">Use the refresh button to reload the panel</li>
                                 <li className="wow fadeInUp" data-wow-delay=".4s">Use the visibility icons to toggle the entities on and off </li>
                                 <li className="wow fadeInUp" data-wow-delay=".5s">Select Textures from the list to see a list of their properties</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Changes to these properties are not fully supported</li>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>Tabs:</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>Filters</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Min Filter -- dropdown menu of options</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Mag Filter -- dropdown menu of options</li>
                                          <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedTwoTabs}>Wrapping</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Wrap S -- dropdown menu of options</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Wrap T -- dropdown menu of options</li>
                                          <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedTwoTabs}>Transform</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Offset</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Repeat</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Rotation</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Center</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>matrixAutoUpdate</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Matrix</li>
                              </ul>
                        </div>
                        <div className="services__text" id="renderer">
                              <h3 className="wow fadeInUp" data-wow-delay=".2s">Renderer Panel</h3>
                              <p className="wow fadeInUp" data-wow-delay=".4s">View rendering info from the scenes available.</p>
                              <p className="wow fadeInUp" data-wow-delay=".6s">Note: this information is not always correct due to the renderer.info not being properly reset.  If the information looks incorrect, please see the three.js renderer.info documentation for further information about manually resetting your renderer.info</p>
                        </div>
                        <div className="services__img mb-45 w-img wow fadeInUp" data-wow-delay=".6s">
                              <img src="/img/services/details/services-04.png" alt=""/>
                              <p style={{ fontSize: '11px' }}>Credits to <a className="hyperlink" href="https://threejs.org/examples/webgl_morphtargets_horse.html" target="_blank">three.js Project Sample.</a> Click for more info.</p>
                        </div>
                        <div className="services__list mb-40">
                              <ul>
                                    <li className="wow fadeInUp" data-wow-delay=".2s">Left panel: </li>
                                          <li className="wow fadeInUp" data-wow-delay=".3s">Renderer tab tracks different data with a setInterval function to update every second.  This tab lists the information from WebGLRenderer.info.render</li>
                                                <li className="wow fadeInUp" data-wow-delay=".4s">frames</li>
                                                <li className="wow fadeInUp" data-wow-delay=".5s">draw calls</li>
                                                <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>triangles</li>
                                                <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedOneTab}>points</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedTwoTabs}>lines</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Memory tab tracks data from WebGLRenderer.info.memory</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>geometries</li>
                                                <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedTwoTabs}>textures</li>
                                                <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>programs</li>
                                    <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Right panel: WebGLRenderer</li>
                                          <li className="wow fadeInUp" data-wow-delay=".6s" style={nestedTwoTabs}>Lists the type of renderer used, name and properties</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>(gammaFactor has been removed from THREE.WebGLRenderer so we removed that property)</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Tone Mapping</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Shadow Map</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}> Buffer Clearing</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Capabilities</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Clipping</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Scene</li>
                                          <li className="wow fadeInUp" data-wow-delay=".8s" style={nestedThreeTabs}>Morph Limits</li>
                              </ul>
                        </div>
                        <div className="services__text" id="popup">
                          <h3 className="wow fadeInUp" data-wow-delay=".2s">Popup Cache</h3>
                          <p className="wow fadeInUp" data-wow-delay=".4s">Cache entity data and display it in a popup window</p>
                          <p className="wow fadeInUp" data-wow-delay=".6s">Lists the position, rotation, and scale data of selected entities</p>
                        </div>
                        <div className="services__img mb-45 w-img wow fadeInUp" data-wow-delay=".6s">
                              <img src="/img/services/details/services-05.png" alt=""/>
                              <p style={{ fontSize: '11px' }}>Credits to<a className="hyperlink" href="https://threejs.org/examples/webgl_animation_keyframes.html" target="_blank"> three.js Project Sample.</a> Click for more info.</p>
                        </div>
                     </div>
                  </div>
            </div>
         </section>
    )
}
