import React from 'react';
const ContactForm=()=> {
    return (
        <form id="contact-form" className="contact-form">
            <div className="row">
                <div className="form-group col-12 col-md-6">
                    <i className="far fa fa-user"/>
                    <input type="text" className="input input__icon form-control bg-light" placeholder="Full name"
                           required="required" />
                </div>
                <div className="form-group col-12 col-md-6">
                    <i className="fas fa fa-envelope"/>
                    <input type="email" className="input input__icon form-control bg-light"
                           placeholder="Email address" required="required" />
                </div>
                <div className="form-group col-12 col-md-12">
                    <textarea className="textarea form-control bg-light" placeholder="Your Message" rows="4"
                              required="required"
                              style={{overflow:"hidden" ,overflowWrap:"break-word",height: "118px",outline: "currentcolor none medium"}}
                              tabIndex="1"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
                    <div id="validator-contact" className="hidden"/>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2 text-right">
                    <button type="submit" className="btnn disabledd"><i className="fa fa-send"/> Send
                        Message
                    </button>
                </div>
            </div>
        </form>
    );
}
export default ContactForm;