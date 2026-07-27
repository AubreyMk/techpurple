"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Globe, Server, Camera, Smartphone, 
  PenTool, Bot, Mail, Wrench 
} from "lucide-react";

export default function Home() {
  const services = [
    { title: "Web Development", icon: Globe, desc: "Custom websites and web apps built for scale and performance." },
    { title: "Hosting", icon: Server, desc: "Fast, secure, and reliable managed hosting for your business." },
    { title: "Photography", icon: Camera, desc: "Professional photography for weddings, events, and corporate." },
    { title: "Mobile Apps", icon: Smartphone, desc: "Native and cross-platform mobile applications." },
    { title: "Graphic Design", icon: PenTool, desc: "Stunning branding, logos, and marketing materials." },
    { title: "AI Solutions", icon: Bot, desc: "Automate your workflows with custom AI integrations." },
    { title: "Business Email", icon: Mail, desc: "Professional email addresses matched to your domain." },
    { title: "Maintenance", icon: Wrench, desc: "Ongoing support and updates for your digital assets." },
  ];

  const plans = [
    { name: "Starter", price: "MWK 6,000", storage: "500 MB SSD", emails: "Unlimited" },
    { name: "Business", price: "MWK 10,000", storage: "1 GB SSD", emails: "Unlimited" },
    { name: "Professional", price: "MWK 18,000", storage: "2 GB SSD", emails: "Unlimited" },
    { name: "Enterprise", price: "MWK 30,000", storage: "3 GB SSD", emails: "Unlimited" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-36 md:pb-48">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-950 -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 mix-blend-overlay" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px] -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10"
        />

        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Building Digital Experiences,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-400">
              Powering Businesses.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Tech Purple is a premier digital agency in Malawi offering Web Development, Hosting, Photography, and AI Solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "h-14 px-8 text-lg w-full sm:w-auto" })}>Get Started</Link>
            <Link href="/portfolio" className={buttonVariants({ size: "lg", variant: "outline", className: "h-14 px-8 text-lg w-full sm:w-auto bg-transparent text-white border-slate-600 hover:bg-slate-800" })}>View Portfolio</Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y bg-slate-950/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mb-8">Trusted By</p>
          <div className="flex flex-wrap justify-center gap-12 text-slate-500 font-bold text-xl md:text-2xl">
            <span>Businesses</span>
            <span>Schools</span>
            <span>NGOs</span>
            <span>Entrepreneurs</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Everything you need to establish and grow your brand's digital presence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 text-base">{service.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Preview */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Managed Hosting Plans</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Reliable, fast, and secure hosting for Malawi businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-slate-800 bg-slate-900/50">
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-4">{plan.price}<span className="text-sm font-normal text-slate-400">/mo</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-300 text-sm">
                      <li className="flex items-center gap-2">✓ {plan.storage}</li>
                      <li className="flex items-center gap-2">✓ {plan.emails} Emails</li>
                      <li className="flex items-center gap-2">✓ Free SSL</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/hosting" className={buttonVariants({ size: "lg", variant: "outline" })}>View All Hosting Plans</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to grow your business?</h2>
          <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary", className: "h-14 px-10 text-lg text-primary" })}>Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}
