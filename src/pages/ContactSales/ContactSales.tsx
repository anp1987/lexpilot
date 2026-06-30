import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  subject: string;
  message: string;
}

const departments = [
  { value: 'sales', label: 'Sales', description: 'Pricing, plans, and product demonstrations', icon: 'bi-cart' },
  { value: 'support', label: 'Technical Support', description: 'Help with platform issues and troubleshooting', icon: 'bi-headset' },
  { value: 'enterprise', label: 'Enterprise Solutions', description: 'Custom deployments, on-premise, and enterprise features', icon: 'bi-building' },
  { value: 'billing', label: 'Billing & Accounts', description: 'Invoices, payment issues, and account management', icon: 'bi-credit-card' },
  { value: 'partnerships', label: 'Partnerships', description: 'Integration partners, resellers, and referral programs', icon: 'bi-handshake' },
  { value: 'general', label: 'General Inquiry', description: 'Press, events, and everything else', icon: 'bi-envelope' },
];

export default function ContactSales() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<ContactFormData>({
    defaultValues: { department: '' },
  });

  const selectedDept = watch('department');

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <>
      <SEOHead
        title="Contact Sales"
        description="Get in touch with LexPilot AI. Contact our sales, support, enterprise, or partnerships team. We respond within 2 business hours."
        canonical="/contact-sales"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-chat-dots" aria-hidden="true" /> Contact Us</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Let's Talk About Your Needs
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              Our team responds within 2 business hours. Choose the right department below and we will connect you with the right expert.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
            {/* Form */}
            <AnimateOnScroll>
              <form onSubmit={handleSubmit(onSubmit)} style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid #e5e7eb' }}>
                {/* Department Selection */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem' }}>Department</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.75rem' }}>
                    {departments.map(dept => (
                      <label
                        key={dept.value}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '0.75rem', border: `2px solid ${selectedDept === dept.value ? '#4f46e5' : '#e5e7eb'}`, cursor: 'pointer', transition: 'border-color 0.2s' }}
                      >
                        <input type="radio" value={dept.value} {...register('department', { required: 'Please select a department' })} style={{ display: 'none' }} />
                        <i className={dept.icon} style={{ fontSize: '1.25rem', color: selectedDept === dept.value ? '#4f46e5' : '#9ca3af' }} />
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{dept.label}</div>
                          <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{dept.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.department && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem', display: 'block' }}>{errors.department.message}</span>}
                </div>

                {/* Form Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Full Name</label>
                    <input {...register('name', { required: 'Name is required' })} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }} placeholder="Adv. Rahul Verma" />
                    {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.name.message}</span>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Work Email</label>
                    <input {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} type="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }} placeholder="rahul@firm.co.in" />
                    {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.email.message}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Phone</label>
                    <input {...register('phone', { required: 'Phone is required' })} type="tel" style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }} placeholder="+91 98765 43210" />
                    {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.phone.message}</span>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Organisation</label>
                    <input {...register('company', { required: 'Organisation is required' })} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }} placeholder="Verma & Associates" />
                    {errors.company && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.company.message}</span>}
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Subject</label>
                  <input {...register('subject', { required: 'Subject is required' })} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }} placeholder="Enterprise plan inquiry for 50+ users" />
                  {errors.subject && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.subject.message}</span>}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Message</label>
                  <textarea {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Please provide more detail' } })} rows={5} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem', resize: 'vertical' }} placeholder="Tell us about your requirements..." />
                  {errors.message && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.message.message}</span>}
                </div>

                <button type="submit" style={{ width: '100%', padding: '0.875rem', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>
                  Send Message <i className="bi bi-send" style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            </AnimateOnScroll>

            {/* Sidebar */}
            <div>
              <AnimateOnScroll delay={0.1}>
                <div style={{ background: '#f9fafb', borderRadius: '1rem', padding: '2rem', marginBottom: '1.5rem', border: '1px solid #e5e7eb' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}><i className="bi bi-clock" style={{ marginRight: '0.5rem', color: '#4f46e5' }} />Business Hours</h3>
                  <div style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 2 }}>
                    <div><strong>Monday – Friday:</strong> 9:00 AM – 7:00 PM IST</div>
                    <div><strong>Saturday:</strong> 10:00 AM – 4:00 PM IST</div>
                    <div><strong>Sunday:</strong> Closed</div>
                    <div style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: '#ecfdf5', borderRadius: '0.5rem', color: '#065f46', fontSize: '0.8rem' }}>
                      <i className="bi bi-lightning" style={{ marginRight: '0.25rem' }} /> Average response time: Under 2 hours
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div style={{ background: '#f9fafb', borderRadius: '1rem', padding: '2rem', marginBottom: '1.5rem', border: '1px solid #e5e7eb' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}><i className="bi bi-geo-alt" style={{ marginRight: '0.5rem', color: '#4f46e5' }} />Office</h3>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.7 }}>
                    LexPilot AI Technologies Pvt. Ltd.<br />
                    12th Floor, Prestige Shantiniketan<br />
                    Whitefield, Bengaluru 560048<br />
                    Karnataka, India
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div style={{ background: '#f9fafb', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}><i className="bi bi-telephone" style={{ marginRight: '0.5rem', color: '#4f46e5' }} />Direct Lines</h3>
                  <div style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 2.2 }}>
                    <div><strong>Sales:</strong> +91 80 4567 8901</div>
                    <div><strong>Support:</strong> +91 80 4567 8902</div>
                    <div><strong>Email:</strong> contact@lexpilot.ai</div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.4}>
                <div style={{ background: '#f9fafb', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}><i className="bi bi-chat-dots" style={{ marginRight: '0.5rem', color: '#4f46e5' }} />Quick Connect</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <button type="button" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: '#25D366', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 500, fontSize: '0.875rem' }}>
                      <i className="bi bi-whatsapp" /> Chat on WhatsApp
                    </button>
                    <button type="button" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: '#1a56db', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 500, fontSize: '0.875rem' }}>
                      <i className="bi bi-chat-left-text" /> Live Chat (Coming Soon)
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.5}>
                <div style={{ background: 'linear-gradient(135deg, #eff6ff, #ede9fe)', borderRadius: '1rem', padding: '2rem', border: '1px solid #dbeafe' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}><i className="bi bi-clock-history" style={{ marginRight: '0.5rem', color: '#4f46e5' }} />Response SLA</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#4b5563' }}>Sales inquiries</span>
                      <span style={{ fontWeight: 600, color: '#1e40af' }}>&lt; 2 hours</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#4b5563' }}>Technical support</span>
                      <span style={{ fontWeight: 600, color: '#1e40af' }}>&lt; 4 hours</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#4b5563' }}>Enterprise</span>
                      <span style={{ fontWeight: 600, color: '#1e40af' }}>&lt; 1 hour</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#4b5563' }}>Partnerships</span>
                      <span style={{ fontWeight: 600, color: '#1e40af' }}>&lt; 24 hours</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
