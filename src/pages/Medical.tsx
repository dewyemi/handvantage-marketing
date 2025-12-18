import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Calendar,
  MessageSquare,
  Shield,
  Users,
  Star,
  PhoneOff,
  PhoneCall,
  Heart,
  ClipboardList,
  Bell,
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
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-200/40 via-transparent to-transparent" />
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium mb-6">
              <Stethoscope size={16} />
              For Medical & Dental Practices
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              The Patient Coordinator That Works{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">24/7 for $5/Day</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 max-w-xl">
              Your front desk is overwhelmed. Patients are on hold. New patients are hanging up and calling the practice down the street.
              <strong className="text-foreground"> Handvantage changes that.</strong>
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
              <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
                <Button size="xl" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                  Fill Your Schedule
                  <ArrowRight size={20} />
                </Button>
              </a>
              <a href="https://portal.handvantage.com/assessment" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="xl">
                  Watch Demo
                </Button>
              </a>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-lg">
                <Shield size={18} className="text-teal-600" />
                <span className="text-sm font-medium text-teal-700">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-lg">
                <CheckCircle2 size={18} className="text-cyan-600" />
                <span className="text-sm font-medium text-cyan-700">EHR Integrated</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Stats Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-teal-500/20 p-8 border border-teal-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Annual Revenue Lost to</p>
                  <p className="text-2xl font-bold text-foreground">Missed Patient Calls</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <PhoneOff size={24} className="text-red-500" />
                </div>
              </div>
              
              {/* Big Number */}
              <div className="text-center py-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl mb-8">
                <p className="text-6xl font-bold text-red-500">$150,000</p>
                <p className="text-muted-foreground mt-2">Average dental practice per year</p>
              </div>
              
              {/* Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <span className="text-muted-foreground">Missed calls/day</span>
                  <span className="font-bold">12-15 calls</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <span className="text-muted-foreground">New patient value</span>
                  <span className="font-bold">$800-$1,200</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-teal-100 rounded-xl">
                  <span className="text-teal-700 font-medium">Recoverable with AI</span>
                  <span className="font-bold text-teal-700">85%+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Pain Points Section
function PainPointsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const painPoints = [
    {
      icon: Users,
      title: "Front desk is overwhelmed",
      description: "Your team is juggling check-ins, insurance, and phones. Something always gets dropped.",
    },
    {
      icon: Clock,
      title: "Patients hate hold music",
      description: "67% of patients will hang up if put on hold for more than 2 minutes. They call the next practice.",
    },
    {
      icon: Calendar,
      title: "No-shows cost you $200/hour",
      description: "Empty chairs mean lost revenue. Manual reminder calls take hours your staff doesn't have.",
    },
  ];

  return (
    <section className="py-24 bg-foreground text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Your Practice Is Bleeding <span className="text-red-400">Patients</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/70 max-w-2xl mx-auto">
            Every unanswered call is a patient choosing your competitor.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
            >
              <div className="inline-flex p-3 rounded-xl bg-red-500/20 text-red-400 mb-6">
                <point.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-white/70">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const features = [
    {
      icon: Phone,
      title: "24/7 Patient Intake",
      description: "New patients can book appointments anytime. AI collects insurance info, medical history, and schedules instantly.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Integrates with your practice management software. Fills cancellations automatically from your waitlist.",
    },
    {
      icon: Bell,
      title: "Automated Reminders",
      description: "Reduces no-shows by 35% with personalized call, text, and email reminders.",
    },
    {
      icon: ClipboardList,
      title: "Pre-Visit Forms",
      description: "Sends digital intake forms before appointments. Patients arrive ready, saving 15 minutes per visit.",
    },
    {
      icon: MessageSquare,
      title: "FAQ Handling",
      description: "Answers common questions about insurance, hours, directions, and procedures without staff involvement.",
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security. All data encrypted. BAA available. Your patients' information is protected.",
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
            Your AI <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Patient Coordinator</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handvantage handles patient communication so your staff can focus on patient care.
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
              className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white mb-6">
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

// Testimonials Section
function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const testimonials = [
    {
      quote: "Our no-show rate dropped from 18% to 6% in the first month. The AI reminders are more consistent than any staff member could be.",
      author: "Dr. Sarah Chen",
      role: "Owner",
      company: "Bright Smile Dental",
      metric: "67% reduction in no-shows",
    },
    {
      quote: "We added 23 new patients in the first month just from after-hours calls we were missing. The ROI is incredible.",
      author: "Dr. Michael Torres",
      role: "Practice Owner",
      company: "Torres Family Medicine",
      metric: "23 new patients/month",
    },
    {
      quote: "My front desk staff finally has time to focus on patients in the office instead of being glued to the phone.",
      author: "Jennifer Adams",
      role: "Office Manager",
      company: "Lakeside Pediatrics",
      metric: "4 hours/day saved",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Trusted by <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Healthcare Providers</span>
          </motion.h2>
        </motion.div>

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
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-teal-400 text-teal-400" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                <p className="text-sm font-semibold text-teal-600 mt-2">{testimonial.metric}</p>
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
    <section className="py-24 bg-gradient-to-br from-teal-500 to-cyan-600 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Fill Your Chair, Not Your Voicemail
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join practices that have recovered $150k+ in annual revenue with Handvantage. 
          HIPAA compliant. EHR integrated. Setup in minutes.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="bg-white text-teal-600 hover:bg-white/90 shadow-xl">
              Start Free Trial
              <ArrowRight size={20} />
            </Button>
          </a>
          <a href="https://portal.handvantage.com/assessment" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-teal-600">
              Schedule Demo
            </Button>
          </a>
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
          <span className="flex items-center gap-2">
            <Shield size={16} />
            HIPAA Compliant
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} />
            No credit card required
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Main Page
export default function Medical() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
