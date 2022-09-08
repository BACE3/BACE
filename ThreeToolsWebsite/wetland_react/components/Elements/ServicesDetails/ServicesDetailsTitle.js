import React from 'react'
import Link from 'next/link'

export default function ServicesDetailsTitle() {
    return (
        <section className="page__title-area page__title-height d-flex align-items-center fix p-relative z-index-1" style={{"backgroundImage":"url(/img/page-title/page-title.jpg)"}}>
         <div className="page__title-shape">
            <img className="page-title-dot-4" src="/img/page-title/dot-4.png" alt=""/>
            <img className="page-title-dot" src="/img/page-title/dot.png" alt=""/>
            <img className="page-title-dot-2" src="/img/page-title/dot-2.png" alt=""/>
            <img className="page-title-dot-3" src="/img/page-title/dot-3.png" alt=""/>
            <img className="page-title-plus" src="/img/page-title/plus.png" alt=""/>
            <img className="page-title-triangle" src="/img/page-title/triangle.png" alt=""/>
         </div>
           <div className="container">
              <div className="row">
                 <div className="col-xxl-12">
                    <div className="page__title-wrapper text-center">
                       <h3> Services Details</h3>
                        <nav aria-label="breadcrumb">
                           <ol className="breadcrumb justify-content-center">
                              <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                              <li className="breadcrumb-item active" aria-current="page">Services Details</li>
                           </ol>
                        </nav>
                    </div>
                 </div>
              </div>
           </div>
        </section>
    )
}
