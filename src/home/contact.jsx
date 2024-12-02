import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#f0f8ff' }} id='contact'>
      <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', flex: '1', paddingRight: '20px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px',
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px',
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px',
              }}
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff', 
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Submit
            </button>
          </div>
        </form>

        {/* Google Map iframe */}
        <div style={{ flex: '1', marginLeft: '20px' }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.3315244204088!2d78.40245542826969!3d17.493328114963717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910006a2057d%3A0x76c2234f0ebffb2f!2sDgg!5e0!3m2!1sen!2sin!4v1732701483185!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: '0', borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
