import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  Clock,
  TrendingUp,
  Brain,
  ArrowRight,
  CheckCircle2,
  Hotel,
  Building2,
  ShoppingBag,
  Plane,
  Briefcase,
  Stethoscope,
  MessageSquare,
  Calendar,
  Zap,
  Users,
  Globe,
  Shield,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/20 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/20 rounded-full text-brand-300 text-sm font-medium mb-6">
              <Sparkles size={16} className="text-brand-400" />
              AI-Powered Concierge Service
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              Personalized Customer Assistance,
              <br />
              <span className="text-gradient bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                Anytime, Anywhere
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-white/70 mb-10 max-w-3xl mx-auto">
              Transform your customer experience with Handvantage AI Concierge. Handle inquiries, bookings, and personalized services 24/7—delivering instant, efficient support without additional staffing costs.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-16">
              <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
                <Button size="xl" className="bg-white text-brand-700 hover:bg-white/90">
                  Get Started Free
                  <ArrowRight size={20} />
                </Button>
              </a>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-700">
                Watch Demo
              </Button>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              variants={scaleIn}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Clock, label: "24/7 Available", value: "Always On" },
                    { icon: MessageSquare, label: "Instant Response", value: "<2s" },
                    { icon: Users, label: "Unlimited Scale", value: "∞ Concurrent" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                    >
                      <stat.icon size={32} className="text-brand-400 mb-3" />
                      <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-sm text-white/60">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Why AI Concierge Section
function WhySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    {
      icon: Sparkles,
      title: "Personalized Attention Without the Overhead",
      description: "Deliver seamless, human-like experiences tailored to each customer—without the cost of hiring full-time staff.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Seamless Bookings & Requests, 24/7",
      description: "From table reservations to spa appointments, every request is managed instantly—even outside business hours.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Scalable Service for Every Business",
      description: "Whether you run a luxury hotel or a co-working space, AI Concierge adapts to your needs—handling thousands of requests effortlessly.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Brain,
      title: "Beyond Just Answering—It Anticipates Needs",
      description: "AI Concierge understands customer preferences, offers proactive recommendations, and enhances their overall experience.",
      color: "from-green-500 to-emerald-500",
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
            Why <span className="text-gradient">AI Concierge</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deliver exceptional customer experiences without the complexity or cost of traditional concierge services.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-muted to-white rounded-3xl p-8 border border-border hover:border-brand-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Use Cases Section
function UseCasesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const useCases = [
    {
      icon: Hotel,
      title: "Hotels & Hospitality",
      description: "Provide 24/7 guest assistance, handle bookings, offer personalized recommendations, and manage room service requests efficiently.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Building2,
      title: "Co-working & Corporate Spaces",
      description: "Manage visitor check-ins, conference room bookings, and office concierge services to create a well-organized workplace environment.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      title: "Luxury & Retail Services",
      description: "Enhance VIP customer experiences by offering personalized shopping assistance, styling advice, and exclusive event invitations.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Plane,
      title: "Travel & Airlines",
      description: "Offer real-time flight updates, personalized travel recommendations, and itinerary planning assistance across digital platforms.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Briefcase,
      title: "Sales & Marketing Support",
      description: "Enhance lead engagement by answering inquiries, qualifying prospects, and scheduling follow-ups—helping businesses close deals efficiently.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Clinics",
      description: "Assist patients with appointment scheduling, reminders, and wellness tips while offering a human-like conversational experience.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

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
            Built for <span className="text-gradient">Every Industry</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From hospitality to healthcare, AI Concierge adapts to your unique business needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 border border-border hover:border-brand-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.color} text-white mb-6`}>
                <useCase.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
            <Button size="xl">
              Get Started Today
              <ArrowRight size={20} />
            </Button>
          </a>
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
      icon: Brain,
      title: "Truly Personalized Responses",
      description: "Unlike generic chatbots, our AI understands context, preferences, and past interactions to offer tailored recommendations.",
    },
    {
      icon: Globe,
      title: "Seamless Multi-Channel Support",
      description: "Whether through voice, chat, SMS, or WhatsApp—your AI Concierge is always available on customers' preferred platforms.",
    },
    {
      icon: Calendar,
      title: "Effortless Bookings & Reservations",
      description: "From scheduling spa treatments to reserving VIP services, ensure real-time, accurate bookings without delays.",
    },
    {
      icon: Zap,
      title: "Proactive & Intelligent Engagement",
      description: "AI Concierge anticipates needs based on user behavior, upselling relevant services and enhancing satisfaction.",
    },
    {
      icon: TrendingUp,
      title: "Scales Without Extra Hiring",
      description: "Handle peak hours or special events effortlessly. AI Concierge manages unlimited customer interactions simultaneously.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC 2 compliant, HIPAA ready, and encrypted end-to-end. Your customer data is always protected.",
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
            More Than a Virtual Assistant—
            <br />
            <span className="text-gradient">A Business Asset</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An intelligent system that boosts customer loyalty, streamlines operations, and drives revenue growth.
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
              className="bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow"
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

// How It Works Section
function HowItWorksSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: "01",
      title: "Sign Up & Configure",
      description: "Create your account and set up your AI Concierge with your business information, services, and brand voice in minutes.",
    },
    {
      number: "02",
      title: "Customize Preferences",
      description: "Define your service offerings, booking rules, response workflows, and escalation paths to match your business needs.",
    },
    {
      number: "03",
      title: "Integrate Your Systems",
      description: "Connect your CRM, calendar, booking system, and communication channels for seamless data flow and automation.",
    },
    {
      number: "04",
      title: "Go Live & Optimize",
      description: "Your AI Concierge is now live! Monitor performance, gather insights, and continuously improve customer interactions.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white relative overflow-hidden" ref={ref}>
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
            Get Started in <span className="text-gradient bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">4 Simple Steps</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="text-6xl font-bold text-brand-400/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight size={24} className="text-brand-400/40" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="bg-white text-brand-700 hover:bg-white/90">
              Start Your Free Trial
              <ArrowRight size={20} />
            </Button>
          </a>
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
          Ready to Transform Your Customer Experience?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join businesses worldwide that trust Handvantage AI Concierge to deliver exceptional service 24/7.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="bg-white text-brand-700 hover:bg-white/90 shadow-xl">
              Get Started Free
              <ArrowRight size={20} />
            </Button>
          </a>
          <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-700">
            Schedule Demo
          </Button>
        </motion.div>
        <motion.p variants={fadeInUp} className="text-white/60 text-sm mt-6">
          <CheckCircle2 size={16} className="inline mr-2" />
          No credit card required • Setup in 5 minutes
        </motion.p>
      </motion.div>
    </section>
  );
}

// Main AI Concierge Page
export default function AIConcierge() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <UseCasesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
