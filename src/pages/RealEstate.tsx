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
  Home,
  Calendar,
  MessageSquare,
  Zap,
  Users,
  Star,
  PhoneOff,
  PhoneCall,
  TrendingUp,
  Target,
  Award,
  Building2,
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
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-200/40 via-transparent to-transparent" />
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-6">
              <Building2 size={16} />
              For Real Estate Professionals
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Speed to Lead Is{" "}
              <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Everything</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 max-w-xl">
              You're at a showing. A Zillow lead calls. You miss it. 5 minutes later, they've already spoken to another agent.
              <strong className="text-foreground"> Never again.</strong>
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
              <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
                <Button size="xl" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600">
                  Capture Every Lead
                  <ArrowRight size={20} />
                </Button>
              </a>
              <Button variant="secondary" size="xl">
                See It In Action
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur rounded-xl p-6 border border-violet-200">
              <p className="text-sm text-muted-foreground mb-2">Agents using Handvantage report:</p>
              <p className="text-4xl font-bold text-violet-600">100x Lead Conversion</p>
              <p className="text-sm text-muted-foreground mt-1">By being first to respond, every time</p>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Speed Comparison */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="space-y-6">
              {/* The Race */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-violet-100">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-violet-500" />
                  The 5-Minute Window
                </h3>
                
                <div className="space-y-4">
                  {/* Timeline */}
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-red-400" />
                    
                    <div className="relative pl-10 pb-6">
                      <div className="absolute left-2.5 w-3 h-3 bg-green-400 rounded-full" />
                      <p className="text-sm font-medium">0:00 - Lead calls</p>
                      <p className="text-xs text-muted-foreground">Zillow inquiry about 123 Main St</p>
                    </div>
                    
                    <div className="relative pl-10 pb-6">
                      <div className="absolute left-2.5 w-3 h-3 bg-green-400 rounded-full" />
                      <p className="text-sm font-medium text-green-600">0:01 - Handvantage answers</p>
                      <p className="text-xs text-green-600">"Hi! I'd love to help you with 123 Main St..."</p>
                    </div>
                    
                    <div className="relative pl-10 pb-6">
                      <div className="absolute left-2.5 w-3 h-3 bg-yellow-400 rounded-full" />
                      <p className="text-sm font-medium">0:03 - Lead qualified</p>
                      <p className="text-xs text-muted-foreground">Pre-approved, looking to buy in 30 days</p>
                    </div>
                    
                    <div className="relative pl-10 pb-6">
                      <div className="absolute left-2.5 w-3 h-3 bg-violet-400 rounded-full" />
                      <p className="text-sm font-medium text-violet-600">0:05 - Showing booked</p>
                      <p className="text-xs text-violet-600">Tomorrow at 2 PM, synced to your calendar</p>
                    </div>
                    
                    <div className="relative pl-10">
                      <div className="absolute left-2.5 w-3 h-3 bg-red-400 rounded-full" />
                      <p className="text-sm font-medium text-red-500">5:00 - Without AI</p>
                      <p className="text-xs text-red-500">Lead already talking to competitor</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl p-4 text-white">
                  <p className="text-3xl font-bold">78%</p>
                  <p className="text-sm text-white/80">of buyers work with the first agent who responds</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-violet-200">
                  <p className="text-3xl font-bold text-violet-600">$15,000</p>
                  <p className="text-sm text-muted-foreground">Average commission per closed deal</p>
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
      icon: PhoneOff,
      title: "Leads go cold in minutes",
      description: "The average agent takes 6+ hours to respond. By then, the lead has already chosen someone else.",
    },
    {
      icon: Clock,
      title: "You can't be everywhere",
      description: "Showings, closings, open houses. Your phone rings at the worst times. Voicemail isn't an option.",
    },
    {
      icon: Target,
      title: "Unqualified leads waste time",
      description: "Half your calls are tire-kickers. You need to know who's serious before you invest your time.",
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
            Every Missed Call Is a <span className="text-red-400">Lost Commission</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/70 max-w-2xl mx-auto">
            In real estate, speed isn't just important—it's everything.
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
      icon: Zap,
      title: "Instant Response",
      description: "Answers on the first ring, 24/7. Never lose a lead to voicemail again.",
    },
    {
      icon: Target,
      title: "Smart Qualification",
      description: "Asks the right questions: Pre-approved? Timeline? Budget? You only talk to serious buyers.",
    },
    {
      icon: Calendar,
      title: "Automatic Scheduling",
      description: "Books showings directly into your calendar. Sends confirmations and reminders.",
    },
    {
      icon: Home,
      title: "Property Information",
      description: "Answers questions about listings, provides details, and sends property links via text.",
    },
    {
      icon: MessageSquare,
      title: "Follow-Up Sequences",
      description: "Nurtures leads with personalized follow-ups until they're ready to move.",
    },
    {
      icon: TrendingUp,
      title: "CRM Integration",
      description: "Syncs with Follow Up Boss, KVCore, Chime, and 50+ real estate CRMs.",
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
            Your AI <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Inside Sales Agent</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handvantage qualifies leads and books showings while you're closing deals.
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
              className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white mb-6">
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
      quote: "I closed 3 deals in my first month with Handvantage. All from leads I would have missed while at showings. That's $45,000 in commissions.",
      author: "Jessica Martinez",
      role: "Top Producer",
      company: "Keller Williams Realty",
      metric: "$45,000 in 30 days",
    },
    {
      quote: "The AI qualifies leads better than my old ISA. It asks the right questions and only sends me serious buyers. My conversion rate doubled.",
      author: "David Park",
      role: "Team Lead",
      company: "eXp Realty",
      metric: "2x conversion rate",
    },
    {
      quote: "I was skeptical about AI handling my leads. But the conversations are so natural, clients don't even realize it's not me until I call them back.",
      author: "Amanda Foster",
      role: "Luxury Agent",
      company: "Compass",
      metric: "100% lead capture",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-violet-50 to-purple-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6">
            Trusted by <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Top Producers</span>
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
                  <Star key={i} size={18} className="fill-violet-400 text-violet-400" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                <p className="text-sm font-semibold text-violet-600 mt-2">{testimonial.metric}</p>
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
    <section className="py-24 bg-gradient-to-br from-violet-500 to-purple-600 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Be First. Close More.
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          78% of buyers work with the first agent who responds. 
          Make sure that's always you.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <a href="https://app.handvantage360.com" target="_blank" rel="noopener noreferrer">
            <Button size="xl" className="bg-white text-violet-600 hover:bg-white/90 shadow-xl">
              Start Free Trial
              <ArrowRight size={20} />
            </Button>
          </a>
          <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-violet-600">
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
            CRM integration included
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
export default function RealEstate() {
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
