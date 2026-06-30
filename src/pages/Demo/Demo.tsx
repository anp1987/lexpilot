import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SEOHead from '@/components/seo/SEOHead';
import styles from './Demo.module.scss';

interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  designation: string;
  website: string;
  firmSize: string;
  preferredDate: string;
  preferredTime: string;
  meetingType: string;
}

const steps = ['Personal Details', 'Company Info', 'Firm Size', 'Date', 'Time', 'Meeting Type', 'Review', 'Confirmation'];

const firmSizes = [
  { value: 'solo', label: 'Solo Advocate', desc: '1 person' },
  { value: 'small', label: 'Small Firm', desc: '2-10 lawyers' },
  { value: 'midsize', label: 'Mid-size Firm', desc: '11-50 lawyers' },
  { value: 'large', label: 'Large Firm', desc: '51-200 lawyers' },
  { value: 'enterprise', label: 'Enterprise', desc: '200+ lawyers' },
  { value: 'corporate', label: 'Corporate Legal', desc: 'In-house team' },
];

const timeSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'];

const meetingTypes = [
  { value: 'video', label: 'Video Call', icon: 'bi-camera-video', desc: 'Microsoft Teams or Zoom' },
  { value: 'phone', label: 'Phone Call', icon: 'bi-telephone', desc: 'We will call you' },
  { value: 'in-person', label: 'In-Person', icon: 'bi-geo-alt', desc: 'At your office or ours' },
];

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<DemoFormData>();
  const formData = watch();

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const onSubmit = () => {
    setCurrentStep(7);
  };

  const getMinDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
  };

  return (
    <>
      <SEOHead
        title="Schedule Demo"
        description="Schedule a personalized demo of LexPilot AI. See how AI can transform your legal practice in 30 minutes."
        canonical="/schedule-demo"
      />

      <section className={styles.demoPage}>
        <div className="container-custom">
          <div className={styles.layout}>
            <div className={styles.sidebar}>
              <h1 className={styles.title}>Schedule Your Demo</h1>
              <p className={styles.subtitle}>See how LexPilot AI can transform your legal practice in a personalized 30-minute demo.</p>
              
              <div className={styles.stepList}>
                {steps.map((step, index) => (
                  <div key={step} className={`${styles.stepItem} ${index === currentStep ? styles.active : ''} ${index < currentStep ? styles.completed : ''}`}>
                    <div className={styles.stepCircle}>
                      {index < currentStep ? <i className="bi bi-check-lg" aria-hidden="true" /> : index + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className={styles.sidebarInfo}>
                <h4>What to expect:</h4>
                <ul>
                  <li><i className="bi bi-check-circle" aria-hidden="true" /> 30-minute personalized demo</li>
                  <li><i className="bi bi-check-circle" aria-hidden="true" /> See features relevant to you</li>
                  <li><i className="bi bi-check-circle" aria-hidden="true" /> Q&A with our product team</li>
                  <li><i className="bi bi-check-circle" aria-hidden="true" /> Custom pricing discussion</li>
                  <li><i className="bi bi-check-circle" aria-hidden="true" /> No commitment required</li>
                </ul>
              </div>
            </div>

            <div className={styles.formArea}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentStep === 0 && (
                      <div className={styles.stepContent}>
                        <h2>Personal Details</h2>
                        <p>Tell us about yourself so we can personalize your demo.</p>
                        <div className={styles.formGrid}>
                          <div className={styles.field}>
                            <label htmlFor="firstName">First Name *</label>
                            <input id="firstName" type="text" {...register('firstName', { required: 'First name is required' })} placeholder="Priya" />
                            {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
                          </div>
                          <div className={styles.field}>
                            <label htmlFor="lastName">Last Name *</label>
                            <input id="lastName" type="text" {...register('lastName', { required: 'Last name is required' })} placeholder="Sharma" />
                            {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
                          </div>
                          <div className={styles.field}>
                            <label htmlFor="email">Work Email *</label>
                            <input id="email" type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } })} placeholder="priya@lawfirm.com" />
                            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                          </div>
                          <div className={styles.field}>
                            <label htmlFor="phone">Phone Number *</label>
                            <input id="phone" type="tel" {...register('phone', { required: 'Phone is required' })} placeholder="+91 98765 43210" />
                            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className={styles.stepContent}>
                        <h2>Company Information</h2>
                        <p>Help us understand your organization.</p>
                        <div className={styles.formGrid}>
                          <div className={styles.field}>
                            <label htmlFor="companyName">Firm/Company Name *</label>
                            <input id="companyName" type="text" {...register('companyName', { required: 'Company name is required' })} placeholder="Sharma & Associates" />
                            {errors.companyName && <span className={styles.error}>{errors.companyName.message}</span>}
                          </div>
                          <div className={styles.field}>
                            <label htmlFor="designation">Your Designation *</label>
                            <input id="designation" type="text" {...register('designation', { required: 'Designation is required' })} placeholder="Senior Partner" />
                            {errors.designation && <span className={styles.error}>{errors.designation.message}</span>}
                          </div>
                          <div className={`${styles.field} ${styles.fullWidth}`}>
                            <label htmlFor="website">Website (optional)</label>
                            <input id="website" type="url" {...register('website')} placeholder="https://www.lawfirm.com" />
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className={styles.stepContent}>
                        <h2>Firm Size</h2>
                        <p>This helps us tailor the demo to your needs.</p>
                        <div className={styles.optionGrid}>
                          {firmSizes.map((size) => (
                            <label key={size.value} className={`${styles.optionCard} ${formData.firmSize === size.value ? styles.selected : ''}`}>
                              <input type="radio" value={size.value} {...register('firmSize', { required: true })} />
                              <span className={styles.optionLabel}>{size.label}</span>
                              <span className={styles.optionDesc}>{size.desc}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className={styles.stepContent}>
                        <h2>Preferred Date</h2>
                        <p>Select your preferred demo date.</p>
                        <div className={styles.dateField}>
                          <label htmlFor="preferredDate">Select Date *</label>
                          <input id="preferredDate" type="date" min={getMinDate()} {...register('preferredDate', { required: true })} />
                        </div>
                        <p className={styles.dateNote}>Demos are available Monday to Friday, IST timezone.</p>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className={styles.stepContent}>
                        <h2>Preferred Time</h2>
                        <p>Select your preferred time slot (IST).</p>
                        <div className={styles.timeGrid}>
                          {timeSlots.map((time) => (
                            <label key={time} className={`${styles.timeSlot} ${formData.preferredTime === time ? styles.selected : ''}`}>
                              <input type="radio" value={time} {...register('preferredTime', { required: true })} />
                              <span>{time}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div className={styles.stepContent}>
                        <h2>Meeting Type</h2>
                        <p>How would you like to meet?</p>
                        <div className={styles.meetingOptions}>
                          {meetingTypes.map((type) => (
                            <label key={type.value} className={`${styles.meetingCard} ${formData.meetingType === type.value ? styles.selected : ''}`}>
                              <input type="radio" value={type.value} {...register('meetingType', { required: true })} />
                              <i className={`bi ${type.icon}`} aria-hidden="true" />
                              <span className={styles.meetingLabel}>{type.label}</span>
                              <span className={styles.meetingDesc}>{type.desc}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentStep === 6 && (
                      <div className={styles.stepContent}>
                        <h2>Review Your Details</h2>
                        <p>Please confirm your demo booking details.</p>
                        <div className={styles.review}>
                          <div className={styles.reviewItem}><span>Name</span><span>{formData.firstName} {formData.lastName}</span></div>
                          <div className={styles.reviewItem}><span>Email</span><span>{formData.email}</span></div>
                          <div className={styles.reviewItem}><span>Phone</span><span>{formData.phone}</span></div>
                          <div className={styles.reviewItem}><span>Company</span><span>{formData.companyName}</span></div>
                          <div className={styles.reviewItem}><span>Designation</span><span>{formData.designation}</span></div>
                          <div className={styles.reviewItem}><span>Firm Size</span><span>{formData.firmSize}</span></div>
                          <div className={styles.reviewItem}><span>Date</span><span>{formData.preferredDate}</span></div>
                          <div className={styles.reviewItem}><span>Time</span><span>{formData.preferredTime}</span></div>
                          <div className={styles.reviewItem}><span>Meeting Type</span><span>{formData.meetingType}</span></div>
                        </div>
                      </div>
                    )}

                    {currentStep === 7 && (
                      <div className={styles.stepContent}>
                        <div className={styles.confirmation}>
                          <div className={styles.confirmIcon}>
                            <i className="bi bi-check-circle-fill" aria-hidden="true" />
                          </div>
                          <h2>Demo Scheduled!</h2>
                          <p>We have received your demo request. You will receive a confirmation email at <strong>{formData.email}</strong> with meeting details.</p>
                          <div className={styles.confirmDetails}>
                            <div><i className="bi bi-calendar" aria-hidden="true" /> {formData.preferredDate}</div>
                            <div><i className="bi bi-clock" aria-hidden="true" /> {formData.preferredTime} IST</div>
                            <div><i className="bi bi-camera-video" aria-hidden="true" /> {formData.meetingType}</div>
                          </div>
                          <p className={styles.confirmNote}>A calendar invite will be sent shortly. If you need to reschedule, reply to the confirmation email.</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {currentStep < 7 && (
                  <div className={styles.formActions}>
                    {currentStep > 0 && (
                      <button type="button" onClick={prevStep} className={styles.backBtn}>
                        <i className="bi bi-arrow-left" aria-hidden="true" /> Back
                      </button>
                    )}
                    {currentStep < 6 ? (
                      <button type="button" onClick={nextStep} className={styles.nextBtn}>
                        Next <i className="bi bi-arrow-right" aria-hidden="true" />
                      </button>
                    ) : (
                      <button type="submit" className={styles.submitBtn}>
                        Confirm Booking <i className="bi bi-check-lg" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
