import "../css/contact-page.css";
import "../../../globaly-styles.css";

function ContactPage() {
    return (
        <>
            <section className="contact-section">
                <div className="container map-container">
                    <iframe title="myMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7290576.488542661!2d35.375177470616904!3d26.84466556971666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2z2YXYtdix!5e0!3m2!1sar!2snl!4v1681176134279!5m2!1sar!2snl" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="container contact-container">

                    <form className="contact-form">
                        <h2>Don’t shy to Contact us.</h2>
                        <div className="inputs-div">
                            <input type="text" placeholder="Your Name"/>
                            <input type="text" placeholder="Your E-mail"/>
                        </div>
                        <textarea placeholder="Message">

                        </textarea>
                        <input type="submit" value={"Send"} className="send-input"/>
                    </form>


                    <div className="contact-info">
                        <div className="info-box location-box">
                            <h3>Location</h3>
                            <p>Baker Street 223 B, London 423668</p>
                        </div>
                        <div className="info-box phone-box">
                            <h3>Phone</h3>
                            <p>+1 623-812-4957</p>
                        </div>
                        <div className="info-box email-box">
                            <h3>E-mail</h3>
                            <p>support@promo-theme.com</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactPage;