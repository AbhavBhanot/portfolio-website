import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import styles from './ConnectWidget.module.css';

/**
 * ConnectWidget – compact "Drop a message" card on the About page.
 * Submits to the Netlify serverless function at /api/submit-message,
 * which writes the message to MongoDB Atlas.
 */
function ConnectWidget() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setServerError('');

    try {
      const res = await fetch('/api/submit-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? 'Unexpected error');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 6000);
    } catch (err) {
      console.error('ConnectWidget submission error:', err);
      setServerError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus(null), 6000);
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.widget}>
        <div className={styles.successState}>
          <FaCheckCircle className={styles.successIcon} />
          <h3 className={styles.successTitle}>Message received!</h3>
          <p className={styles.successText}>
            Thanks for reaching out — I'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.widget}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.headerEmoji}>✉️</span>
        <div>
          <h2 className={styles.title}>Drop a Message</h2>
          <p className={styles.subtitle}>
            Have a question or want to connect? I'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Form */}
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          {/* Name */}
          <div className={styles.field}>
            <label htmlFor="cw-name" className={styles.label}>
              Name <span className={styles.required}>*</span>
            </label>
            <input
              id="cw-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              disabled={status === 'loading'}
            />
            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
          </div>

          {/* Email */}
          <div className={styles.field}>
            <label htmlFor="cw-email" className={styles.label}>
              Email <span className={styles.required}>*</span>
            </label>
            <input
              id="cw-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              disabled={status === 'loading'}
            />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </div>
        </div>

        {/* Message */}
        <div className={styles.field}>
          <label htmlFor="cw-message" className={styles.label}>
            Message <span className={styles.required}>*</span>
          </label>
          <textarea
            id="cw-message"
            name="message"
            rows={4}
            placeholder="What's on your mind?"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            disabled={status === 'loading'}
          />
          {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
        </div>

        {/* Server error banner */}
        {status === 'error' && (
          <div className={styles.errorBanner} role="alert">
            <FaExclamationCircle />
            <span>{serverError || 'Something went wrong. Please try again.'}</span>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === 'loading'}
        >
          <FaPaperPlane className={styles.btnIcon} />
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default ConnectWidget;
