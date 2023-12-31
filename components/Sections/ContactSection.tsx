"use client"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Footer from '@/components/Footer';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

type Props = {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

type formData = {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection({ sectionRefs, setActiveLink }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<formData>({
    name: '',
    email: '',
    message: ''
  })

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || "", process.env.NEXT_PUBLIC_TEMPLATE_ID || "", formRef.current || "", process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
        enqueueSnackbar('Message successfully sent', { variant: 'success' })
        setFormData({ name: '', email: '', message: '' })
        console.log(result)
      }, (error) => {
        enqueueSnackbar('Message failed to send', { variant: 'error' })
        console.log(error)
      });
  }

  return (
    <section
      className='flex flex-col justify-between contact-svg'
      id='contact'
      ref={sectionRefs.contact}
    >
      <div className='flex flex-col items-center'>
        <h2 className='text-6xl mt-20 border-b-8 border-blue-400 font-bold max-[550px]:text-5xl'>Contact</h2>
        <form ref={formRef} onSubmit={handleEmailSubmit} className='flex flex-col items-center gap-2 mt-10 w-1/4 max-xl:w-1/3 max-lg:w-2/4 max-[550px]:w-3/4'>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="user_name">Name *</label>
            <input
              type="text"
              name='user_name'
              id='user_name'
              required
              className='bg-zinc-800 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400'
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              value={formData.name}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="user_email">Email *</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className='bg-zinc-800 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400'
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="message">Message *</label>
            <textarea
              name='message'
              id='message'
              required
              className='bg-zinc-800 p-2 rounded-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-400'
              rows={6}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              value={formData.message}
            />
          </div>
          <div className='flex justify-end w-full text-xl font-bold mt-2'>
            <button
              type='submit'
              className="tracking-widest border-b-2 border-blue-400 px-2 py-1 relative ease-in duration-500 z-10 before:bg-blue-400 before:ease-in before:duration-300 before:-z-10 before:absolute after:bg-blue-400 after:ease-in after:duration-300 after:-z-10 after:absolute before:top-full before:right-0 before:bottom-0 before:left-0 hover:before:top-0"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <Footer setActiveLink={setActiveLink} sectionRefs={sectionRefs} />
      <SnackbarProvider />
    </section>
  )
}