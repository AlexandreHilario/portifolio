import React from "react";
import '../../../App.css';
import { AreaContact } from './styled'

function Contact() {
    return (
        <AreaContact>
            <section id="contato" className="contato">
                <div className="cartao">
                    <h3>Phone</h3>
                    <h4>81 98463-0413</h4>
                    <h3>Email</h3>
                    <h4>xandibackup@gmail.com</h4>
                </div>
            </section>
        </AreaContact>
    );
}

export default Contact;