'use client';
import React, { useEffect, useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";

export default function ContactUsContent() {

  const [siteKey, setSiteKey] = useState('');

  useEffect(() => {
    fetch('/api/recaptcha-key')
      .then((res) => res.json())
      .then((data) => setSiteKey(data.siteKey))
      .catch(() => toast.error('Failed to load reCAPTCHA, please refresh the page'));
  }, []);

  const recaptchaRef = useRef(null);
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [best_time, setBest_time] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!siteKey) {
      toast.error('reCAPTCHA is still loading, please try again in a moment');
      return;
    }
    recaptchaRef.current.execute();
  }

  const onReCAPTCHAChange = async (captchaCode) => {
    if(!captchaCode) {
      return;
    }
    
    const notification = toast.loading('Sending....');
    try {
      const response = await fetch('/api/contact', {
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
    <section className="bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="card p-8 sticky top-28">
                <h3 className="text-xl font-bold font-playfair-display text-navy-900 mb-6">Get in Touch</h3>
                <div className="section-divider !mx-0 mb-8" />
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-sm mb-1">Phone</h4>
                      <a href="tel:+12155158004" className="text-navy-600 hover:text-gold-600 transition-colors">(215) 515-8004</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-sm mb-1">Email</h4>
                      <a href="mailto:contact@simplysyncedllc.com" className="text-navy-600 hover:text-gold-600 transition-colors break-all">contact@simplysyncedllc.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-sm mb-1">Service Area</h4>
                      <p className="text-navy-600">Lower Bucks Area</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-navy-100">
                  <p className="text-xs text-navy-500 leading-relaxed mb-4">
                    We respond to all inquiries within one business day. Your technology needs are our priority.
                  </p>
                  <div className="flex items-start gap-2.5">
                    <div className="w-0.5 min-h-[2rem] bg-gold-400 rounded-full shrink-0 mt-0.5" />
                    <p className="text-xs text-navy-500 italic font-playfair-display leading-relaxed">
                      &ldquo;Serve one another humbly in love.&rdquo; — Galatians 5:13
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <div className="card p-8 md:p-10">
                <h3 className="text-xl font-bold font-playfair-display text-navy-900 mb-2">Send Us a Message</h3>
                <p className="text-navy-500 mb-8">Fill out the form below and we&apos;ll get back to you promptly.</p>

                <form id="contact_form" onSubmit={handleOnSubmit}>
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-navy-800 mb-2" htmlFor="person">Name <span className="text-red-500">*</span></label>
                        <input onChange={(e) => setPerson(e.target.value)} id="person" name="person" className="form-input w-full" type="text" placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy-800 mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
                        <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="form-input w-full" type="email" placeholder="you@example.com" required />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-navy-800 mb-2" htmlFor="phone">Phone</label>
                        <input onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" className="form-input w-full" type="text" placeholder="(555) 555-5555" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy-800 mb-2" htmlFor="best_time">Best time to call <span className="text-red-500">*</span></label>
                        <select onChange={(e) => setBest_time(e.target.value)} id="best_time" name="best_time" className="form-select w-full">
                          <option>Do Not Call</option>
                          <option>Morning (8AM-11:59AM)</option>
                          <option>Afternoon (12PM-2:59PM)</option>
                          <option>Evening (3PM-6PM)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-2" htmlFor="subject">Subject <span className="text-red-500">*</span></label>
                      <input onChange={(e) => setSubject(e.target.value)} id="subject" name="subject" className="form-input w-full" type="text" placeholder="How can we help?" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-2" htmlFor="message">Message <span className="text-red-500">*</span></label>
                      <textarea onChange={(e) => setMessage(e.target.value)} id="message" name="message" className="form-input w-full min-h-[140px]" placeholder="Tell us about your project or question..." required></textarea>
                    </div>
                  </div>
                  <div className="mt-4">
                    {siteKey && (
                      <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={siteKey} onChange={onReCAPTCHAChange} />
                    )}
                  </div>
                  <div className="mt-6">
                    <button 
                      id="submit-button" 
                      className="btn btn-gold w-full group" 
                      type="submit">
                      Send Message
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
