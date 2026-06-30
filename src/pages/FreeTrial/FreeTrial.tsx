import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

interface TrialFormData {
  fullName: string;
  email: string;
  phone: string;
  firmName: string;
  firmSize: string;
}

const benefits = [
  { icon: 'bi-check-circle-fill', text: '14 days full access to Professional plan features' },
  { icon: 'bi-check-circle-fill', text: 'No credit card required to start' },
  { icon: 'bi-check-circle-fill', text: 'AI-powered legal research across all Indian courts' },
  { icon: 'bi-check-circle-fill', text: 'Contract review and drafting assistance' },
  { icon: 'bi-check-circle-fill', text: 'Unlimited case law searches during trial' },
  { icon: 'bi-check-circle-fill', text: 'Personal onboarding session with our team' },
  { icon: 'bi-check-circle-fill', text: 'Export all your work at the end of trial' },
  { icon: 'bi-check-circle-fill', text: 'Cancel anytime — no questions asked' },
];

const trustedBy = [
  'Cyril Amarchand Mangaldas', 'Khaitan & Co', 'AZB & Partners', 'Trilegal', 'Shardul Amarchand', 'JSA Law',
];

export default function FreeTrial() {
  const { register, handleSubmit, formState: { errors } } = useForm<TrialFormData>();

  const onSubmit = (data: TrialFormData) => {
    console.log('Trial signup:', data);
  };

  return (
    <>
      <SEOHead
        title="Start Free Trial"
        description="Start your 14-day free trial of LexPilot AI. Full access to AI legal research, contract review, and drafting tools. No credit card required."
        canonical="/free-trial"
      />

      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="section-badge"><i className="bi bi-rocket-takeoff" aria-hidden="true" /> Free Trial</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
                Start Your 14-Day Free Trial
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem', lineHeight: 1.7 }}>
                Experience the full power of LexPilot AI. No credit card needed. Set up in under 2 minutes.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Full Name</label>
                  <input
                    {...register('fullName', { required: 'Full name is required' })}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }}
                    placeholder="Adv. Meera Kapoor"
                  />
                  {errors.fullName && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.fullName.message}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Work Email</label>
                  <input
                    {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' } })}
                    type="email"
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }}
                    placeholder="meera@kapoorlegal.co.in"
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.email.message}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Phone Number</label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    type="tel"
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.phone.message}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Firm Name</label>
                  <input
                    {...register('firmName', { required: 'Firm name is required' })}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem' }}
                    placeholder="Kapoor & Associates"
                  />
                  {errors.firmName && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.firmName.message}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.375rem' }}>Firm Size</label>
                  <select
                    {...register('firmSize', { required: 'Please select firm size' })}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.95rem', background: 'white' }}
                  >
                    <option value="">Select firm size</option>
                    <option value="solo">Solo Practitioner</option>
                    <option value="2-5">2–5 Lawyers</option>
                    <option value="6-20">6–20 Lawyers</option>
                    <option value="21-50">21–50 Lawyers</option>
                    <option value="51-200">51–200 Lawyers</option>
                    <option value="200+">200+ Lawyers</option>
                  </select>
                  {errors.firmSize && <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.firmSize.message}</span>}
                </div>

                <button type="submit" style={{ padding: '1rem', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 600, fontSize: '1.05rem', cursor: 'pointer', marginTop: '0.5rem' }}>
                  Start Free Trial <i className="bi bi-arrow-right" style={{ marginLeft: '0.5rem' }} />
                </button>

                <p style={{ fontSize: '0.8rem', color: '#9ca3af', textAlign: 'center' }}>
                  By signing up, you agree to our <Link to="/legal/terms" style={{ color: '#4f46e5' }}>Terms of Service</Link> and <Link to="/legal/privacy" style={{ color: '#4f46e5' }}>Privacy Policy</Link>.
                </p>
              </form>
            </motion.div>

            {/* Benefits Sidebar */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', borderRadius: '1.5rem', padding: '2.5rem', color: 'white' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>What You Get</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {benefits.map((benefit, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <i className={benefit.icon} style={{ color: '#a5b4fc', marginTop: '0.15rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem', lineHeight: 1.5, opacity: 0.9 }}>{benefit.text}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                  <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.75rem' }}>TRUSTED BY LEADING FIRMS</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {trustedBy.map(firm => (
                      <span key={firm} style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '0.25rem' }}>{firm}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
