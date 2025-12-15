import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  MessageSquare,
  Calendar,
  Zap,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Building2,
  Stethoscope,
  Home as HomeIcon,
  Star,
  TrendingUp,
  Shield,
  Bot,
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-100/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-200/30 via-transparent to-transparent" />
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-700 text-sm font-medium mb-6">
              <Zap size={16} className="text-brand-500" />
              AI-Powered Communication Platform
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              The AI Employee That{" "}
              <span className="text-gradient">Never Sleeps</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 max-w-xl">
              Stop losing revenue to voicemail. Handvantage answers every call, qualifies every lead, 
              and books every appointment—24/7, 365 days a year.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
              <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
                <Button size="xl">
                  Start Free Trial
                  <ArrowRight size={20} />
                </Button>
              </a>
              <Button variant="secondary" size="xl">
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-success" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-success" />
                Setup in 5 minutes
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-brand-500/20 p-8 border border-brand-100">
              {/* Mock Phone Interface */}
              <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-6 text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Handvantage AI</p>
                    <p className="text-sm text-white/80">Active • Handling calls</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm">"Hi! Thank you for calling. How can I help you today?"</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 ml-8">
                    <p className="text-sm">"I need to schedule an emergency repair..."</p>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="text-2xl font-bold text-brand-600">24/7</p>
                  <p className="text-xs text-muted-foreground">Availability</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="text-2xl font-bold text-brand-600">3s</p>
                  <p className="text-xs text-muted-foreground">Avg Response</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="text-2xl font-bold text-brand-600">98%</p>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-float">
              +$10k/mo recovered
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Industry Segmentation Section
function IndustrySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const industries = [
    {
      icon: HomeIcon,
      title: "Home Services",
      description: "HVAC, Plumbing, Roofing, Electrical. Capture emergency calls 24/7 and never lose a job to voicemail again.",
      href: "/home-services",
      color: "from-orange-500 to-red-500",
      stat: "$15k avg job value",
    },
    {
      icon: Stethoscope,
      title: "Medical & Dental",
      description: "Patient intake, appointment scheduling, and follow-ups. HIPAA-compliant and integrated with your EHR.",
      href: "/medical",
      color: "from-teal-500 to-cyan-500",
      stat: "$150k/yr in missed calls",
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Qualify leads instantly, schedule showings, and never miss a hot buyer. Speed to lead wins deals.",
      href: "/real-estate",
      color: "from-purple-500 to-indigo-500",
      stat: "5min response = 21x more leads",
    },
  ];

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Built for <span className="text-gradient">Your Industry</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handvantage is trained on industry-specific scenarios to handle your unique challenges.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {industries.map((industry) => (
            <motion.div key={industry.title} variants={fadeInUp}>
              <Link href={industry.href}>
                <div className="group relative bg-white rounded-2xl p-8 border border-border hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 cursor-pointer h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${industry.color} text-white mb-6`}>
                    <industry.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-600 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {industry.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-600">{industry.stat}</span>
                    <ArrowRight size={20} className="text-brand-500 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const features = [
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "Natural conversations that handle complex inquiries, qualify leads, and book appointments automatically.",
    },
    {
      icon: MessageSquare,
      title: "AI Chat Agents",
      description: "Deploy on your website, WhatsApp, Facebook, and more. Engage visitors 24/7 with intelligent responses.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Integrates with your calendar to book appointments, send reminders, and reduce no-shows by 40%.",
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description: "Syncs with GoHighLevel, HubSpot, Salesforce, and 50+ tools. Your data flows seamlessly.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant, HIPAA ready, and encrypted end-to-end. Your data is always protected.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track calls, conversions, and ROI in real-time. Know exactly what's working.",
    },
  ];

  return (
    <section className="py-24 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Everything You Need to <span className="text-gradient">Win</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete AI communication platform that works while you sleep.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-3 rounded-xl bg-brand-100 text-brand-600 mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Social Proof Section
function SocialProofSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const stats = [
    { value: "500+", label: "Businesses Served" },
    { value: "$2M+", label: "Revenue Recovered" },
    { value: "1M+", label: "Calls Handled" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  const testimonials = [
    {
      quote: "Handvantage recovered $12,000 in the first month alone. It's like having a full-time receptionist that never takes a break.",
      author: "Mike Johnson",
      role: "Owner, Johnson HVAC",
      rating: 5,
    },
    {
      quote: "Our no-show rate dropped by 35% after implementing the AI appointment reminders. Game changer for our practice.",
      author: "Dr. Sarah Chen",
      role: "Dental Practice Owner",
      rating: 5,
    },
    {
      quote: "I closed 3 deals in the first week because the AI qualified leads while I was showing properties. Speed to lead is everything.",
      author: "David Martinez",
      role: "Real Estate Agent",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold text-brand-600 mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-muted rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-warning text-warning" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Stop Losing Money to Voicemail?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join 500+ businesses that trust Handvantage to handle their calls. 
          Start your free trial today—no credit card required.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="bg-white text-brand-700 hover:bg-white/90 shadow-xl">
              Start Free Trial
              <ArrowRight size={20} />
            </Button>
          </a>
          <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-700">
            Schedule Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Main Home Page
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IndustrySection />
        <FeaturesSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
