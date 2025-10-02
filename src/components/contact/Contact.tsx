import './Contact.css'
import {type FormEvent, useState} from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("http://localhost:8081/contact/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus(""), 3000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus(""), 3000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus(""), 3000);
        }
    }


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
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />

                    <textarea
                        rows={8}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                    />
                    <button type="submit" className="contact-submit">Submit</button>
                </form>
                {status === 'success' && <p style={{ color: '#6FCF61', textAlign: 'center' }}>Message sent!</p>}
                {status === 'error' && <p style={{ color: '#ff6b6b', textAlign: 'center' }}>Failed to send.</p>}
            </article>
        </section>
    )
}

export default Contact