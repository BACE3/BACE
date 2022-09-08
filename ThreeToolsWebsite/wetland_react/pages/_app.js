import '../public/css/preloader.css'
import '../public/css/backToTop.css'
import '../public/css/fontAwesome5Pro.css'
import '../public/css/elegantFont.css'
import '../public/css/style.css'
import '../public/css/animate.min.css'
import '../public/css/default.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'metismenujs/dist/metismenujs.css';
import Head from 'next/head'
import React, { useEffect } from 'react';



export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.WOW = require('wowjs');
      }  
    new WOW.WOW().init();
  });
  
  return(
  <>
    <Head>
      <title>Three-tools - Three.js Chrome Extension DevTool</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png"/>
    </Head>
    <Component {...pageProps} />
  </>
  )
}
