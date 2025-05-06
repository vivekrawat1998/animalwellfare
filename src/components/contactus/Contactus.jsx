import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../ui/Header';
import { IoCall } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { useApi } from "../context/Apiprovider";

const Contactus = () => {
    const apiResponse = useApi() || { data: {}, isLoading: true };
    const { data = {}, isLoading } = apiResponse;
    const emaildata = Array.isArray(data?.api9) ? data.api9 : [];
    const phonedata = Array.isArray(data?.api10) ? data.api10 : [];

    const formatPhoneNumber = (number) => {
        if (!number) return "N/A";
        const str = number.toString();
        return `(+91) ${str.slice(0, 5)}-${str.slice(5)}`;
    };

    const contactDetails = [
        ...phonedata.map(phone => ({
            icon: <IoCall className='text-[#95CF7B] text-3xl' />,
            title: formatPhoneNumber(phone?.title || phone)
        })),
        ...emaildata.map(email => ({
            icon: <AiOutlineMessage className='text-[#95CF7B] text-3xl' />,
            title: email?.title || email
        })),
        { icon: <FaWhatsapp className='text-[#95CF7B] text-3xl' />, title: "Whatsapp Support" },
        { icon: <MdAccessTime className='text-[#95CF7B] text-3xl' />, title: "Mon - Fri 9:00 AM - 5:00 PM" },
    ];

    const initialValues = {
        name: '',
        email: '',
        message: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required')
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/contactQuery`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                alert('Message sent successfully!');
                resetForm();
            } else {
                alert('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong');
        }
        setSubmitting(false);
    };

    return (
        <div className='relative overflow-hidden'>
            <Header
                title="Contact Us"
                subheading="Join Our Mission for Animal Rescue"
                description="Every animal deserves a loving home, and we are committed to making that a reality."
                height="h-[100vh]"
            />
            <div className='-mt-32 px-6 md:px-2 relative z-10'>
                <div className='bg-white grid grid-cols-1 md:grid-cols-2 w-full h-full'>
                    <div>
                        <img src='/assets/image/contactus.webp' alt='Animal shelter' className='md:w-[60vw] w-full h-full md:h-[70vh] object-cover' />
                    </div>
                    <div className='p-8 flex flex-col justify-start items-start font-Lora'>
                        <h1 className='text-xl font-semibold text-[#D89D55] mb-2'>Write Us</h1>
                        <p className='text-[#404E4D] text-4xl mb-6'>We are here to assist you</p>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            {({ isSubmitting }) => (
                                <Form className='w-full flex flex-col gap-3'>
                                    <label htmlFor='name' className='text-[#072724] font-semibold'>Your name</label>
                                    <Field type='text' name='name' className='border rounded-xl py-3 px-2 border-[#072724]' />
                                    <ErrorMessage name='name' component='div' className='text-red-500 text-sm' />

                                    <label htmlFor='email' className='text-[#072724] font-semibold'>Your email</label>
                                    <Field type='email' name='email' className='border rounded-xl py-3 px-2 border-[#072724]' />
                                    <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />

                                    <label htmlFor='message' className='text-[#072724] font-semibold'>Your message</label>
                                    <Field as='textarea' name='message' rows={5} className='border rounded-xl py-2 px-2 border-[#072724]' />
                                    <ErrorMessage name='message' component='div' className='text-red-500 text-sm' />

                                    <button type='submit' disabled={isSubmitting} className='bg-[#072724] text-white px-6 py-2 mt-2 rounded hover:bg-[#0b3a33] transition'>
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <div className='bg-[#F1E7DB] w-full flex items-center justify-center px-3 md:px-10 py-20'>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-20'>
                    {contactDetails.map((item, index) => (
                        <div key={index} className='flex items-center gap-5 mb-2'>
                            <div className='bg-[#0B4B43] p-3 rounded-full'>{item.icon}</div>
                            <p className='text-[#404E4D] md:text-xl'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contactus;
