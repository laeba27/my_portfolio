import { useState, FormEvent } from 'react';
import { Mail, Send, Loader2, CheckCircle, XCircle, Github, MapPin } from 'lucide-react';
import { personalInfo, web3formsConfig } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Check if Web3Forms access key is configured
      if (!web3formsConfig.accessKey || web3formsConfig.accessKey.includes('YOUR_WEB3FORMS')) {
        throw new Error('Web3Forms is not properly configured. Please add your access key.');
      }

      // Prepare form data
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', web3formsConfig.accessKey);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      // Send form to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again or email directly.'
      );

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass-card rounded-2xl p-6 text-center group animate-float"
          >
            <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-2 text-sm">Email</h3>
            <p className="text-gray-400 text-xs break-all">{personalInfo.email}</p>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 text-center group animate-float"
            style={{ animationDelay: '0.1s' }}
          >
            <Github className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-2 text-sm">GitHub</h3>
            <p className="text-gray-400 text-xs">laebafirdous</p>
          </a>

          <div className="glass-card rounded-2xl p-6 text-center group animate-float" style={{ animationDelay: '0.2s' }}>
            <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-2 text-sm">Location</h3>
            <p className="text-gray-400 text-xs">{personalInfo.location}</p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium group-hover:text-purple-300 transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all hover:border-purple-500/30"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium group-hover:text-purple-300 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all hover:border-purple-500/30"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium group-hover:text-purple-300 transition-colors">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all hover:border-purple-500/30"
                placeholder="What's this about?"
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium group-hover:text-purple-300 transition-colors">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none hover:border-purple-500/30"
                placeholder="Tell me about your project or just say hi..."
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-600/20 border border-green-500/50 rounded-xl text-green-400 animate-fade-in">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-600/20 border border-red-500/50 rounded-xl text-red-400 animate-fade-in">
                <XCircle className="w-5 h-5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
