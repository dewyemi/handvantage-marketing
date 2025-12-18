import { Link } from "wouter";
import { Mail, Phone, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "AI Concierge", href: "/ai-concierge" },
    { label: "Home Services", href: "/home-services" },
    { label: "Medical & Dental", href: "/medical" },
    { label: "Real Estate", href: "/real-estate" },
  ],
  resources: [
    { label: "Documentation", href: "https://docs.handvantage360.com" },
    { label: "API Reference", href: "https://docs.handvantage360.com" },
    { label: "Blog", href: "https://blog.handvantage.com" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "https://pages.handvantage.com/privacy-policy" },
    { label: "Terms of Service", href: "https://pages.handvantage.com/terms-conditions" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://x.com/handvantage", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/handvantage", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/handvantage", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/handvantage360/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo-icon.png"
                alt="Handvantage"
                className="h-10 w-10"
              />
              <span className="font-display font-bold text-xl">
                Handvantage
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              The AI employee that answers every call, books every job, and never sleeps. 
              Transform your business communication today.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-8 justify-center text-sm text-white/60">
            <a href="mailto:hello@dg.handvantage.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} />
              hello@dg.handvantage.com
            </a>
            <a href="tel:+17782007160" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} />
              +1 778 200 7160
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Handvantage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
