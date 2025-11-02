import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactStyles.module.css';

function Contact() {
    const [state, handleSubmit] = useForm("mvgvvngp");
    if (state.succeeded) {
        return  <section id="contact" className={styles.container}>
                    <p>Thanks for your Email!</p>;
                </section>
    }
    return (
        <section id="contact" className={styles.container}>
            <h1 className='sectionTitle'>Contact</h1>
            <form action='https://formspree.io/f/mvgvvngp' onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label htmlFor="name" hidden>Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" required/>
                </div>
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <div className='formGroup'>
                    <label htmlFor="email" hidden>Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" required/>
                </div>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <div className='formGroup'>
                    <label htmlFor="message" hidden>Message</label>
                    <textarea name="message" id="message" placeholder="Message" required></textarea>
                </div>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <input className="hover btn" type="submit" value="Submit" disabled={state.submitting} />
            </form>
        </section>
    )
}

export default Contact