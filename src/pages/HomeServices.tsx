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
  AlertTriangle,
  Wrench,
  Flame,
  Droplets,
  Zap,
  Calendar,
  MessageSquare,
  TrendingUp,
  Star,
  PhoneOff,
  PhoneCall,
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
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200/40 via-transparent to-transparent" />
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
              <Wrench size={16} />
              For HVAC, Plumbing & Roofing
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Missed Calls ={" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Lost Revenue</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 max-w-xl">
              When a pipe bursts at 2 AM, they don't leave a voicemail. They call the next contractor on Google. 
              <strong className="text-foreground"> Handvantage answers instantly.</strong>
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
              <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
                <Button size="xl" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Capture Every Call
                  <ArrowRight size={20} />
                </Button>
              </a>
              <Button variant="secondary" size="xl">
                See It In Action
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur rounded-xl p-6 border border-orange-200">
              <p className="text-sm text-muted-foreground mb-2">Average revenue recovered per month:</p>
              <p className="text-4xl font-bold text-orange-600">$10,000 - $25,000</p>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Problem/Solution Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="space-y-6">
              {/* Before */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <PhoneOff size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-red-600">Without Handvantage</p>
                    <p className="text-sm text-muted-foreground">2:47 AM - Emergency Call</p>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm text-red-700">"You've reached Johnson HVAC. Leave a message..."</p>
                  <p className="text-xs text-red-500 mt-2">Customer hangs up → Calls competitor</p>
                </div>
                <p className="text-right text-2xl font-bold text-red-500 mt-4">-$4,500</p>
              </div>
              
              {/* After */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <PhoneCall size={20} className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">With Handvantage</p>
                    <p className="text-sm text-muted-foreground">2:47 AM - Emergency Call</p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-green-700">"Hi! I understand you have an emergency. Let me get some details and dispatch a technician right away..."</p>
                  <p className="text-xs text-green-600">✓ Confirmed emergency → ✓ Collected address → ✓ Dispatched job</p>
                </div>
                <p className="text-right text-2xl font-bold text-green-500 mt-4">+$4,500</p>
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
      icon: PhoneOff,
      title: "62% of calls go unanswered",
      description: "Industry average. Each missed call is a customer calling your competitor instead.",
    },
    {
      icon: Clock,
      title: "After-hours = Peak demand",
      description: "Emergencies don't wait for business hours. 40% of service calls come after 5 PM.",
    },
    {
      icon: DollarSign,
      title: "$500-$15,000 per missed job",
      description: "One HVAC replacement, one roof repair, one burst pipe. Gone to voicemail.",
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
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full text-red-300 text-sm font-medium mb-6">
            <AlertTriangle size={16} />
            The Hard Truth
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Your Phone Is Costing You <span className="text-red-400">$10,000/Month</span>
          </motion.h2>
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
      title: "Instant Answer, Every Time",
      description: "No rings, no hold music, no voicemail. Handvantage picks up on the first ring, 24/7/365.",
    },
    {
      icon: Zap,
      title: "Emergency Triage",
      description: "AI identifies true emergencies, confirms service area, and dispatches jobs automatically.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Books appointments directly into your calendar. Sends confirmations and reminders.",
    },
    {
      icon: MessageSquare,
      title: "Lead Qualification",
      description: "Asks the right questions: What's the issue? When did it start? Are you the homeowner?",
    },
    {
      icon: TrendingUp,
      title: "CRM Integration",
      description: "Syncs with ServiceTitan, Housecall Pro, Jobber, and 50+ tools you already use.",
    },
    {
      icon: DollarSign,
      title: "ROI Dashboard",
      description: "Track every call, every booking, every dollar recovered. Know your exact ROI.",
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
            Your 24/7 <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">AI Dispatcher</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handvantage handles calls like your best CSR—but it never sleeps, never calls in sick, and never loses a lead.
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
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white mb-6">
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
      quote: "We recovered $12,000 in the first month. The AI handled a burst pipe call at 3 AM and dispatched my on-call tech before I even woke up.",
      author: "Mike Johnson",
      role: "Owner, Johnson HVAC",
      company: "Johnson HVAC Services",
      revenue: "$12,000/mo recovered",
    },
    {
      quote: "I was skeptical about AI answering my phones. But the call quality is incredible—customers don't even realize it's not a human.",
      author: "Sarah Williams",
      role: "Operations Manager",
      company: "Williams Plumbing Co.",
      revenue: "$8,500/mo recovered",
    },
    {
      quote: "Best investment I've made in 20 years of business. Paid for itself in the first week with one emergency roof repair job.",
      author: "Tom Rodriguez",
      role: "Owner",
      company: "Rodriguez Roofing",
      revenue: "$15,000/mo recovered",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Trusted by <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">50+ Contractors</span>
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
                  <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                <p className="text-sm font-semibold text-green-600 mt-2">{testimonial.revenue}</p>
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
    <section className="py-24 bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Stop Bleeding Cash to Voicemail
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Every hour you wait is another emergency call going to your competitor. 
          Start capturing revenue in the next 5 minutes.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="bg-white text-orange-600 hover:bg-white/90 shadow-xl">
              Start Free Trial
              <ArrowRight size={20} />
            </Button>
          </a>
          <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-orange-600">
            Schedule Demo
          </Button>
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} />
            Setup in 5 minutes
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} />
            Cancel anytime
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Main Page
export default function HomeServices() {
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
