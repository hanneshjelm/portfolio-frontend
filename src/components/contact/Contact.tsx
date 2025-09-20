import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <header className="contact-title">
                <h2>Contact Me</h2>
            </header>
            <div className="contact-content">
                <p>If you have any questions or work opportunities please fill out the form below
                or send me an email at <span>hannes.hjelm1@gmail.com</span> and I'll get back to you
                as soon as possible.</p>
            </div>
            <article className="contact-section">
                <form className="contact-form">
                    <input type="text" placeholder="Enter your Name" name="name"/>
                    <input type="email" placeholder="Enter your Email" name="email"/>
                    <textarea rows={8} placeholder="Enter your message" name="message"/>
                    <button type="submit" className="contact-submit">Submit</button>
                </form>
            </article>
        </section>
    )
}

export default Contact