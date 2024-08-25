'use client';
import React, { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";
import SITE_KEY from "@/lib/values"

export default function ContactUsContent() {  
  const recaptchaRef = useRef(null);
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [best_time, setBest_time] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  }

  const onReCAPTCHAChange = async (captchaCode) => {
    if(!captchaCode) {
      return;
    }
    
    const notification = toast.loading('Sending....');
    try {
      const response = await fetch('/api/sendgrid', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ person, email, phone, best_time, subject, message, captcha: captchaCode }),
      })

      const res = await response.json();

      if (response.ok) {        
        toast.success(res.message, { id: notification, });
        document.getElementById("contact_form").reset()
      } else {
        toast.error(res.message, { id: notification, });
      }
    } catch (error) {
      toast.error('Sorry an error occurred');
    } finally {
      recaptchaRef.current.reset();     
    }
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto my-8 px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-slate-500">

              <p className="mb-6">Ready to let our team work for you? Feel free to use any of the methods below to get in touch! We look forward to working with you.</p>
              <p className="text-slate-800 mb-2"><strong>Phone: </strong> 215.515.8004</p>
              <p className="text-slate-800 mb-8"><strong>Email: </strong> <a href="mailto: contact@simplysyncedllc.com">contact@simplysyncedllc.com</a></p>            
              <p className="mb-6"><strong>Contact Form:</strong></p>

              <form id="contact_form" onSubmit={handleOnSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-md font-medium mb-1" htmlFor="person">Name <span className="text-rose-500">*</span></label>
                    <input onChange={(e) => setPerson(e.target.value)} id="person" name="person" className="form-input py-2 w-full" type="text" required />
                  </div>
                  <div>
                    <label className="block text-md font-medium mb-1" htmlFor="email">Email <span className="text-rose-500">*</span></label>
                    <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="form-input py-2 w-full" type="email" required />
                  </div>
                  <div>
                    <label className="block text-md font-medium mb-1" htmlFor="phone">Phone </label>
                    <input onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" className="form-input py-2 w-full" type="text" />
                  </div>
                  <div>
                    <label className="block text-md font-medium mb-1" htmlFor="country">Best time to call <span className="text-rose-500">*</span></label>
                    <select onChange={(e) => setBest_time(e.target.value)} id="best_time" name="best_time" className="form-select py-2 w-full">
                      <option>Do Not Call</option>
                      <option>Morning (8AM-11:59AM)</option>
                      <option>Afternoon (12PM-2:59PM)</option>
                      <option>Night (3PM-6PM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-md font-medium mb-1" htmlFor="subject">Subject <span className="text-rose-500">*</span></label>
                    <input onChange={(e) => setSubject(e.target.value)} id="subject" name="subject" className="form-input py-2 w-full" type="text" required />
                  </div>
                  <div>
                    <label className="block text-md font-medium mb-1" htmlFor="message">Message <span className="text-rose-500">*</span></label>
                    <textarea onChange={(e) => setMessage(e.target.value)} id="message" name="message" className="form-input py-2 w-full" required></textarea>
                  </div>
                </div>
                <div className="mt-6">
                  <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={SITE_KEY} onChange={onReCAPTCHAChange} />
                </div>
                <div className="mt-6">
                  <button 
                    id="submit-button" 
                    className="btn-sm w-full text-md text-white bg-blue-600 hover:bg-blue-700 group" 
                    type="submit">                                        
                    Submit! <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}