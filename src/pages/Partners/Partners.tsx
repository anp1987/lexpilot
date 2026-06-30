import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

interface PartnerFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  partnerType: string;
  description: string;
}

const partnerTypes = [
  { id: 'technology', title: 'Technology Partner', description: 'Integrate your product with LexPilot AI. Ideal for legal tech companies, DMS providers, and practice management platforms.', icon: 'bi-code-slash', benefits: ['API access and technical support', 'Co-marketing opportunities', 'Joint product development', 'Listed in our integrations marketplace'] },
  { id: 'reseller', title: 'Reseller Partner', description: 'Sell LexPilot AI to your clients and earn recurring commissions. Perfect for IT consultants and legal tech advisors.', icon: 'bi-shop', benefits: ['20-30% recurring revenue share', 'Sales enablement materials', 'Dedicated partner manager', 'Priority support for your clients'] },
  { id: 'referral', title: 'Referral Partner', description: 'Refer law firms to LexPilot AI and earn rewards. Open to legal professionals, bar associations, and industry influencers.', icon: 'bi-megaphone', benefits: ['₹25,000 per qualified referral', 'Simple referral tracking portal', 'No sales involvement required', 'Quarterly bonus for top referrers'] },
  { id: 'consulting', title: 'Implementation Partner', description: 'Help law firms deploy and optimize LexPilot AI. Suited for legal consultants and change management firms.', icon: 'bi-gear', benefits: ['Certification training program', 'Implementation playbooks', 'Revenue from consulting services', 'Early access to new features'] },
];

export default function Partners() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<PartnerFormData>();

  const onSubmit = (data: PartnerFormData) => {
    console.log('Partner application:', data);
  };

  return (
    <>
      <SEOHead
        title="Partner Program"
        description="Join the LexPilot AI partner ecosystem. Technology, reseller, referral, and implementation partnerships for legal tech companies and consultants."
        canonical="/partners"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-handshake" aria-hidden="true" /> Partners</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Grow Together with LexPilot AI
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Join our partner ecosystem and help Indian law firms embrace AI. Whether you build, sell, or advise — there is a partnership model for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section">
        <div className="container-custom">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">Partnership Models</h2>
              <p className="section-subtitle">Choose the partnership that aligns with your business.</p>
            </div>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {partnerTypes.map((type, index) => (
              <AnimateOnScroll key={type.id} delay={index * 0.1}>
                <div
                  onClick={() => setSelectedType(type.id)}
                  style={{ background: selectedType === type.id ? '#f5f3ff' : 'white', borderRadius: '1rem', padding: '2rem', border: `2px solid ${selectedType === type.id ? '#4f46e5' : '#e5e7eb'}`, cursor: 'pointer', transition: 'all 0.2s', height: '100%' }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <i className={type.icon} style={{ fontSize: '1.25rem', color: '#4f46e5' }} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{type.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '1rem' }}>{type.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {type.benefits.map(benefit => (
                      <li key={benefit} style={{ fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="bi bi-check" style={{ color: '#059669' }} /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section section--gray">
        <div className="container-custom" style={{ maxWidth: '700px' }}>
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 className="section-title">Apply to Partner</h2>
              <p className="section-subtitle">Tell us about your organisation and how you would like to collaborate.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Company Name</label>
                  <input {...register('companyName', { required: 'Required' })} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }} placeholder="Acme Legal Tech" />
                  {errors.companyName && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.companyName.message}</span>}
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Contact Name</label>
                  <input {...register('contactName', { required: 'Required' })} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }} placeholder="Amit Patel" />
                  {errors.contactName && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.contactName.message}</span>}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Email</label>
                  <input {...register('email', { required: 'Required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} type="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }} placeholder="amit@company.com" />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.email.message}</span>}
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Phone</label>
                  <input {...register('phone', { required: 'Required' })} type="tel" style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }} placeholder="+91 99876 54321" />
                  {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.phone.message}</span>}
                </div>
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Partnership Type</label>
                <select {...register('partnerType', { required: 'Please select a type' })} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem', background: 'white' }}>
                  <option value="">Select partnership type</option>
                  <option value="technology">Technology Partner</option>
                  <option value="reseller">Reseller Partner</option>
                  <option value="referral">Referral Partner</option>
                  <option value="consulting">Implementation Partner</option>
                </select>
                {errors.partnerType && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.partnerType.message}</span>}
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Tell us about your company and partnership goals</label>
                <textarea {...register('description', { required: 'Required', minLength: { value: 20, message: 'Please provide more detail' } })} rows={4} style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem', resize: 'vertical' }} placeholder="Describe your company, your clients, and how you envision the partnership..." />
                {errors.description && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.description.message}</span>}
              </div>
              <button type="submit" style={{ width: '100%', padding: '0.875rem', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>
                Submit Application <i className="bi bi-send" style={{ marginLeft: '0.5rem' }} />
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
