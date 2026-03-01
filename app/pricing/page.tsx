import PricingTable from '@/components/blocks/PricingTable';
import styles from './page.module.css';

export default function PricingPage() {
  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All paid plans come with a 30-day money-back guarantee. No questions asked.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'You can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.',
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'Yes, we offer 50% off for students and educators with a valid .edu email address.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
    },
    {
      question: 'Do you offer team pricing?',
      answer: 'Yes, our Team plan is designed for organizations. Contact us for custom pricing for larger teams.',
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Simple, Transparent Pricing</h1>
        <p className={styles.subtitle}>
          Choose the plan that fits your learning goals
        </p>
      </div>
      
      <PricingTable />
      
      <section className={styles.faq}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
