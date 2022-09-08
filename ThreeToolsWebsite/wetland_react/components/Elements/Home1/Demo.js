import React from 'react'
import Link from 'next/link'

export default function Demo() {
    return (
      <section className="about__area pb-120 p-relative">
        <div className="about__shape">
          <img className="about-triangle" src="/img/icon/about/home-1/triangle.png" alt=""/>
          <img className="about-circle" src="/img/icon/about/home-1/circle.png" alt=""/>
          <img className="about-circle-2" src="/img/icon/about/home-1/circle-2.png" alt=""/>
          <img className="about-circle-3" src="/img/icon/about/home-1/circle-3.png" alt=""/>
        </div>
        <div className="container">
          <h2 className="section__title mt-65 mb-35">Video Demo</h2>
          <video id="demovideo" controls src="../../../public/demo.mp4" width="80%" height="60%" preload="metadata">
          Your browser does not support the video tag.
          </video>
        </div>
      </section>
    )
}
