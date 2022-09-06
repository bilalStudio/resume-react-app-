import React from 'react';
import MainWrapper from "../component/MainWrapper";
import Menu from "../component/Menu";
import Footer from "../component/Footer";
import Map from "../component/Map";
import ContactForm from "../component/ContactForm";
import Tittle from "../component/Tittle";
import MainTitle from "../component/MainTitle";

function Contact() {
    return (
        <MainWrapper>
            <div className="col-12 col-md-12 col-xl-9 ">
                <div className="box shadow">
                   <Menu/>
                    <MainTitle title={'Contact'}/>
                    <Map/>
                    <Tittle tittle={'Contact Form'} />
                    <ContactForm/>
                </div>
                <Footer/>
            </div>
        </MainWrapper>
    );
}
export default Contact;