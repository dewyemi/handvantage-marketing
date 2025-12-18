import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-200/30 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-700 text-sm font-medium mb-6">
            <MessageSquare size={16} />
            Get in Touch
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Let's Transform Your{" "}
            <span className="text-gradient">Business Together</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8">
            Have questions about Handvantage? Want to see a demo? Our team is here to help you get started with AI-powered communication.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Info Section
function ContactInfoSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Our team typically responds within 24 hours",
      value: "hello@dg.handvantage.com",
      href: "mailto:hello@dg.handvantage.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Monday to Friday, 9AM - 5PM PST",
      value: "+1 778 200 7160",
      href: "tel:+17782007160",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our AI assistant 24/7",
      value: "See chatbot below",
      href: "#chatbot",
      color: "from-brand-500 to-brand-600",
    },
  ];

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.title}
              href={method.href}
              variants={fadeInUp}
              className="group bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                <method.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
              <p className="text-brand-600 font-medium">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactFormSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://portal.handvantage.com/frm/2qQtsupvZea2aEh1S.js';
    script.async = true;
    
    // Append the script to the form container
    if (formContainerRef.current) {
      formContainerRef.current.appendChild(script);
    }

    return () => {
      // Cleanup: remove the script when component unmounts
      if (formContainerRef.current && formContainerRef.current.contains(script)) {
        formContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Send Us a <span className="text-gradient">Message</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
            Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-border"
        >
          {/* Form container - script will inject the form here */}
          <div ref={formContainerRef} className="min-h-[400px]">
            {/* The external script will populate this container */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Chatbot Section
function ChatbotSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="chatbot" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Try Our <span className="text-gradient">AI Assistant</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
            Chat with our AI-powered assistant 24/7. Get instant answers to your questions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-br from-brand-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-brand-200"
        >
          {/* Chatbot iframe */}
          <div className="relative" style={{ height: '600px' }}>
            <iframe 
              src="https://cdn.handvantage360.com/chat-widget-v2/index.html?widgetId=019703ff-014f-7d41-a616-2134b54189b7"
              allow="microphone" 
              style={{ 
                border: 'none', 
                display: 'block', 
                width: '100%', 
                height: '100%',
                borderRadius: '1.5rem'
              }}
              title="Handvantage AI Chat Assistant"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "Most businesses are up and running within 24-48 hours. Our onboarding team will guide you through setup, training your AI, and integrating with your existing tools.",
    },
    {
      question: "Do you offer custom pricing for enterprises?",
      answer: "Yes! We offer custom enterprise plans with volume discounts, dedicated support, and advanced features. Contact our sales team to discuss your specific needs.",
    },
    {
      question: "Can I schedule a demo?",
      answer: "Absolutely! Click any 'Schedule Demo' button on our site or use the contact form above to book a personalized walkthrough of Handvantage.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for all plans, with priority support and dedicated account managers available for enterprise customers. Our AI assistant is also available 24/7 via chat.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-md border border-border"
            >
              <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {faq.question}
              </h3>
              <p className="text-muted-foreground ml-11">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ContactInfoSection />
        <ContactFormSection />
        <ChatbotSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
