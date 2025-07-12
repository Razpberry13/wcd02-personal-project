'use client';

import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cf-form');
      if (saved) setFormValues(JSON.parse(saved));
    } catch {
      // no-op
    }
  }, []);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedValues = { ...formValues, [name]: value };
    const updatedErrors = { ...errors };

    // Realtime validation
    if (name === 'email') {
      if (!value.trim()) {
        updatedErrors.email = 'Email is required.';
      } else if (!isValidEmail(value)) {
        updatedErrors.email = 'Invalid email format.';
      } else {
        updatedErrors.email = '';
      }
    }

    if (name === 'name') {
      updatedErrors.name = !value.trim() ? 'Name is required.' : '';
    }

    if (name === 'message') {
      updatedErrors.message = !value.trim() ? 'Message is required.' : '';
    }

    setFormValues(updatedValues);
    setErrors(updatedErrors);
    localStorage.setItem('cf-form', JSON.stringify(updatedValues));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation before submit
    const newErrors = {
      name: !formValues.name.trim() ? 'Name is required.' : '',
      email: !formValues.email.trim()
        ? 'Email is required.'
        : !isValidEmail(formValues.email)
        ? 'Invalid email format.'
        : '',
      message: !formValues.message.trim() ? 'Message is required.' : '',
    };

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) {
      setErrors(newErrors);
      toast.error('Please fix the errors before submitting.');
      return;
    }

    setSending(true);

    try {
      await emailjs.sendForm(
        'service_xxxx',       // 🔧 replace with your EmailJS service ID
        'template_xxxx',      // 🔧 replace with your template ID
        formRef.current!,
        'KJ81xxxx'            // 🔧 replace with your public key
      );

      toast.success('Message sent successfully!');
      localStorage.removeItem('cf-form');
      setFormValues({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error('Failed to send message. Try again!');
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto space-y-6 text-left"
    >
      <Toaster position="bottom-center" reverseOrder={false} />

      {['name', 'email', 'phone'].map((field) => {
        const label = field.charAt(0).toUpperCase() + field.slice(1);
        const type = field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text';

        return (
          <div key={field} className="flex flex-col space-y-2">
            <label htmlFor={field} className="text-sm font-semibold text-black">
              {label}
            </label>
            <input
              id={field}
              name={field}
              type={type}
              value={formValues[field as keyof typeof formValues]}
              onChange={handleChange}
              placeholder={label.toUpperCase()}
              className={`w-full px-4 py-3 border-x-[3px] border-b-[3px] ${
                errors[field as keyof typeof errors]
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-black focus:ring-black'
              } text-black bg-white rounded-sm placeholder:text-sm placeholder:uppercase tracking-wide focus:outline-none focus:ring-2 transition-all`}
            />
            {errors[field as keyof typeof errors] && (
              <p className="text-sm text-red-500">
                {errors[field as keyof typeof errors]}
              </p>
            )}
          </div>
        );
      })}

      {/* Message */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formValues.message}
          onChange={handleChange}
          placeholder="YOUR MESSAGE"
          className={`w-full px-4 py-3 border-x-[3px] border-b-[3px] ${
            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-black focus:ring-black'
          } text-black bg-white rounded-sm placeholder:text-sm placeholder:uppercase tracking-wide resize-none focus:outline-none focus:ring-2 transition-all`}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit + Spinner */}
      <div className="text-center mt-6">
        <button
          type="submit"
          disabled={sending}
          className={`px-8 py-3 border-x-[3px] border-black text-black font-medium hover:bg-black hover:text-[#d7d7d7] hover:rounded-sm transition duration-300 ${
            sending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {sending ? 'Sending...' : 'Submit'}
        </button>

        {sending && (
          <div className="mt-4 flex justify-center">
            <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-black" />
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
