import ContactBanner from "./ContactBanner";
import ContactSection from "./ContactSection";
import ContactInfo from "./ContactInfo";
import OurContact from "./OurContact";
import Footer from "./Footer";


function Contact(){
    return(
        <>
            <ContactBanner/>
            <ContactSection/>
            <ContactInfo/>
            <OurContact/>
            <Footer/>
        </>
    );
}

export default Contact;