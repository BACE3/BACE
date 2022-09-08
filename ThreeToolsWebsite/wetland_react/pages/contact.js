import React from 'react'
import ContactArea from '../components/Elements/Contact/ContactArea'
import ContactTitle from '../components/Elements/Contact/ContactTitle'
import Layout from '../components/Layout/Layout'

export default function contact() {
    return (
        <Layout>
            <ContactTitle/>
            <ContactArea/>
            {/* <ContactSupport/> */}
            {/* <ContactMap/> */}
        </Layout>
    
    )
}
