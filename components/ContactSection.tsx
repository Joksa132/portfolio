"use client"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Footer from '@/components/Footer';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

type Props = {
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> };
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

export default function ContactSection({ sectionRefs, setActiveLink }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || "", process.env.NEXT_PUBLIC_TEMPLATE_ID || "", formRef.current || "", process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
        enqueueSnackbar('Message successfully sent', { variant: 'success' })
        console.log(result)
      }, (error) => {
        enqueueSnackbar('Message failed to send', { variant: 'error' })
        console.log(error)
      });
  }

  return (
    <section className='h-screen flex flex-col justify-between' id='contact' ref={sectionRefs.contact}>
      <div className='flex flex-col items-center'>
        <h2 className='text-6xl mt-20 border-b-8 border-blue-400 font-bold'>Contact</h2>
        <form ref={formRef} onSubmit={handleEmailSubmit} className='flex flex-col items-center gap-2 mt-20 w-full'>
          <input
            type="text"
            name='user_name'
            id='user_name'
            placeholder='Name'
            required
            className='bg-zinc-800 p-2 w-1/4 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400'
          />
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder='Email'
            required
            className='bg-zinc-800 p-2 w-1/4 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400'
          />
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            required
            className='bg-zinc-800 p-2 w-1/4 rounded-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-400'
            rows={6}
          />
          <div className='flex justify-end w-1/4 text-xl font-bold mt-2'>
            <button
              type='submit'
              className="tracking-widest border-b-2 border-blue-400 px-2 py-1
                relative ease-in duration-500 z-10
                before:bg-blue-400 before:ease-in before:duration-300 before:-z-10 before:absolute
                after:bg-blue-400 after:ease-in after:duration-300 after:-z-10 after:absolute
                before:top-full before:right-0 before:bottom-0 before:left-0 hover:before:top-0"
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