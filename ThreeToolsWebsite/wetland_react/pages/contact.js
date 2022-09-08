import React from 'react'
import ContactArea from '../components/Elements/Contact/ContactArea'
import ContactMap from '../components/Elements/Contact/ContactMap'
import ContactSupport from '../components/Elements/Contact/ContactSupport'
import ContactTitle from '../components/Elements/Contact/ContactTitle'
import Layout from '../components/Layout/Layout'

export default function contact() {
    return (
        <Layout>
            <ContactTitle/>
            <ContactArea/>
            <ContactSupport/>
            <ContactMap/>
        </Layout>
    
    )
}
