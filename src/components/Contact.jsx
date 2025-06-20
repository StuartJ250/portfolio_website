import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import {motion, AnimatePresence} from "framer-motion";

const Contact = () => {

    const [toast, setToast] = useState({
        type: null,
        message: '',
    });

    const [form, setForm] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
        [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_91dvuso',
            'template_8z5z496',
            {
                from_name: form.name,
                company: form.company,
                reply_to: form.email,
                message: form.message,
            },
            '3LAjj6i-KZiXI5bkZ'
        ).then(
            () => {
                setToast({type: 'success', message: '✅ Your message has been sent!'});
                setForm({name: '', company: '', email: '', message: ''});

                setTimeout(() => setToast({type: null, message:''}), 3000);
            })
            .catch((error) => {
                console.error(error);
                setToast({type: 'error', message: '❌ Failed to send message. Please try again.'});

                setTimeout(() => setToast({type: null, message: ''}), 3000);
            }
        )
    };

    return (
        <section id="contact" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">Contact Me!</h2>

                <AnimatePresence>
                    {toast.type && (
                        <motion.div initial = {{ opacity:0, y:50}}
                                    animate = {{ opacity:1, y:0}}
                                    exit = {{ opacity:0, y:50}}
                                    transition={{duration: 0.3}}
                                    className={`fixed bottom-6 z-50 px-6 py-4 rounded shadow-lg test-sm font-medium ${toast.type === 'success' ?'bg-soft-teal text-white': 'bg-red-500 text-white'}`}
                        >
                            {toast.message}
                        </motion.div>
                    )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">


                    {/*Name*/}
                    <div>
                        <label htmlFor="name" className="block text-md md:text-lg font-medium text-black dark:text-white">
                            Name:
                        </label>
                        <input required
                               name="name"
                               id="name"
                               type="text"
                               value={form.name}
                               onChange={handleChange}
                               className="mt-1 w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-soft-teal" />

                    </div>

                    {/*Company form*/}
                    <div>
                        <label htmlFor="company" className="block text-md md:text-lg font-medium text-black dark:text-white">
                            Company:
                        </label>
                        <input
                               name="company"
                               id="company"
                               type="text"
                               value={form.company}
                               onChange={handleChange}
                               className="mt-1 w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-soft-teal" />

                    </div>

                    {/*Email form*/}
                    <div>
                        <label htmlFor="email" className="block text-md md:text-lg font-medium text-black dark:text-white">
                            Email:
                        </label>
                        <input required
                               name="email"
                               id="email"
                               type="text"
                               value={form.email}
                               onChange={handleChange}
                               className="mt-1 w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-soft-teal" />

                    </div>
                    {/*Message text area*/}
                    <div>
                        <label htmlFor="message" className="block text-md md:text-lg font-medium text-black dark:text-white">
                            Message:
                        </label>
                        <textarea required
                               name="message"
                               id="message"
                               rows="5"
                               value={form.message}
                               onChange={handleChange}
                               className="mt-1 w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-soft-teal" />
                    </div>

                    {/*Submit button*/}
                    <div className="text-right">
                        <button type="submit"
                                className="px-6 py-3 bg-soft-purple text-white font-semibold rounded shadow transition duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>

    );
}
export default Contact
