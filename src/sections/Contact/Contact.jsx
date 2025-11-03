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
            <form method="post" action='https://formspree.io/f/mvgvvngp' onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label htmlFor="name" hidden>Name</label>
                    <input id="name" type="text" name="name" placeholder="Name" autoComplete="on" required/>
                </div>
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <div className='formGroup'>
                    <label htmlFor="email" hidden>Email</label>
                    <input id="email" type="text" name="email" placeholder="Email" autoComplete="on" required/>
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
                <input className="hover btn" type="submit" id="submit" name="submit" value="Submit" disabled={state.submitting} />
            </form>
        </section>
    )
}

export default Contact