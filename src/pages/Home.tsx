import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, createElement } from "react";
import {
  Phone,
  MessageSquare,
  Calendar,
  Zap,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Building2,
  Stethoscope,
  Home as HomeIcon,
  TrendingUp,
  Shield,
  Bot,
  Settings,
  Link2,
  PlayCircle,
  Users,
  BarChart3,
  Truck,
  Heart,
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
                  <p className="text-2xl font-bold text-brand-600">&lt;3s</p>
                  <p className="text-xs text-muted-foreground">Response Time</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <p className="text-2xl font-bold text-brand-600">100%</p>
                  <p className="text-xs text-muted-foreground">Call Capture</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Train Your AI on Your Data",
      subtitle: "Accurate and Effortless",
      description: "Upload your business information, FAQs, and service details. Our AI learns your brand voice, offerings, and processes in minutes.",
      icon: Settings,
    },
    {
      id: 2,
      title: "Set Up Your AI Agent",
      subtitle: "No Coding Needed",
      description: "Simply create your AI agent on our intuitive platform with zero coding required. Easily customize the design and functionality to meet your business needs.",
      icon: Bot,
    },
    {
      id: 3,
      title: "Integrate Seamlessly",
      subtitle: "With Your Tools and Data Source",
      description: "Connect with your existing CRM, calendar, phone system, and other tools. Your AI agent syncs with your workflow automatically.",
      icon: Link2,
    },
    {
      id: 4,
      title: "Automate Customer Interactions",
      subtitle: "& Workflows",
      description: "Go live and let your AI handle calls, chats, bookings, and follow-ups. Monitor performance and optimize in real-time.",
      icon: PlayCircle,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/20 rounded-full text-brand-300 text-sm font-medium mb-6">
            How it works
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            How Handvantage 360 Works
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Steps */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-4"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                  activeStep === step.id
                    ? "bg-brand-600 shadow-xl shadow-brand-500/30"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeStep === step.id ? "bg-white/20" : "bg-white/10"
                  }`}>
                    <span className="text-2xl font-bold">{step.id}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className={`text-sm mb-2 ${
                      activeStep === step.id ? "text-white/90" : "text-white/60"
                    }`}>
                      {step.subtitle}
                    </p>
                    {activeStep === step.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-white/80 text-sm leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Placeholder for demo video/image */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand-500/20 flex items-center justify-center">
                    {createElement(steps[activeStep - 1].icon, { size: 40, className: "text-brand-400" })}
                  </div>
                  <p className="text-white/60 text-sm">Step {activeStep}: {steps[activeStep - 1].title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="bg-white text-brand-700 hover:bg-white/90">
              Get started
              <ArrowRight size={20} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Use Cases Section with Tabs
function UseCasesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<"inbound" | "outbound">("inbound");

  const inboundUseCases = [
    {
      icon: Heart,
      title: "Healthcare",
      color: "from-green-500 to-emerald-500",
      features: [
        "Schedule appointments, answer patient FAQs, and monitor treatments",
        "Telehealth check-ins ensuring better patient care",
      ],
    },
    {
      icon: DollarSign,
      title: "Finance & Insurance",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Assist with claims, policy inquiries, and general support",
        "Offer seamless banking and insurance solutions",
      ],
    },
    {
      icon: Building2,
      title: "Real Estate",
      color: "from-purple-500 to-indigo-500",
      features: [
        "Handle property inquiries and schedule viewings",
        "Automate realtor office interactions with AI",
      ],
    },
    {
      icon: HomeIcon,
      title: "Hospitality & Restaurants",
      color: "from-pink-500 to-rose-500",
      features: [
        "Manage reservations, provide menu details, and handle bookings",
        "Improve customer experience with AI-powered automation",
      ],
    },
  ];

  const outboundUseCases = [
    {
      icon: Users,
      title: "Customer Experience",
      color: "from-green-500 to-emerald-500",
      features: [
        "Collect real-time feedback through satisfaction surveys",
        "Improve engagement with AI-driven insights",
      ],
    },
    {
      icon: TrendingUp,
      title: "Sales & Lead Generation",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Identify potential clients and screen prospects",
        "Automate outreach for better conversions",
      ],
    },
    {
      icon: BarChart3,
      title: "Finance Management",
      color: "from-purple-500 to-indigo-500",
      features: [
        "Automate debt collection and repayment reminders",
        "Enhance recovery rates with AI-driven follow-ups",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Operations",
      color: "from-orange-500 to-red-500",
      features: [
        "Provide shipment tracking and delivery updates",
        "Notify customers about order status in real-time",
      ],
    },
  ];

  const currentUseCases = activeTab === "inbound" ? inboundUseCases : outboundUseCases;

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-700 text-sm font-medium mb-6">
            Use Cases
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            From Pain Points to Solutions.
            <br />
            <span className="text-gradient">One Platform</span>
          </motion.h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-full bg-white border border-border p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("inbound")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "inbound"
                  ? "bg-brand-600 text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Inbound Support
            </button>
            <button
              onClick={() => setActiveTab("outbound")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "outbound"
                  ? "bg-brand-600 text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Outbound Engagement
            </button>
          </div>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentUseCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border hover:border-brand-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.color} text-white mb-4`}>
                <useCase.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-4">{useCase.title}</h3>
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
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
    },
    {
      icon: Stethoscope,
      title: "Medical & Dental",
      description: "Patient intake, appointment scheduling, and follow-ups. HIPAA-compliant and integrated with your EHR.",
      href: "/medical",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Qualify leads instantly, schedule showings, and never miss a hot buyer. Speed to lead wins deals.",
      href: "/real-estate",
      color: "from-purple-500 to-indigo-500",
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
                  <div className="flex items-center justify-end">
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
      description: "Integrates with your calendar to book appointments, send reminders, and reduce no-shows.",
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
        <HowItWorksSection />
        <UseCasesSection />
        <IndustrySection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
