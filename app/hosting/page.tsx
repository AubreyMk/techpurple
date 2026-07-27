"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Shield, Zap, HardDrive, Mail, Cloud } from "lucide-react";

export default function HostingPage() {
  const plans = [
    { name: "Starter", price: "MWK 6,000", storage: "500 MB SSD", emails: "Unlimited", websites: "1 Website" },
    { name: "Business", price: "MWK 10,000", storage: "1 GB SSD", emails: "Unlimited", websites: "2 Websites", highlight: true },
    { name: "Professional", price: "MWK 18,000", storage: "2 GB SSD", emails: "Unlimited", websites: "5 Websites" },
    { name: "Enterprise", price: "MWK 30,000", storage: "3 GB SSD", emails: "Unlimited", websites: "10 Websites" },
  ];

  const features = [
    { title: "Free SSL", icon: Shield },
    { title: "Daily Backups", icon: Cloud },
    { title: "Cloudflare Protection", icon: Shield },
    { title: "99.9% Uptime", icon: Zap },
    { title: "Unlimited Email", icon: Mail },
    { title: "Fast SSD Storage", icon: HardDrive },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-950 pt-24 pb-16 text-center border-b border-slate-800">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Reliable Hosting for <span className="text-primary">Malawi Businesses</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Fast, secure, and fully managed. Everything you need to keep your website online.
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`h-full relative overflow-hidden ${plan.highlight ? 'border-primary ring-2 ring-primary/50 bg-primary/5' : 'border-slate-800 bg-slate-900/50'}`}>
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>Perfect for getting started</CardDescription>
                    <div className="text-4xl font-bold text-primary mt-4">{plan.price}<span className="text-base font-normal text-slate-400">/mo</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 text-slate-300 mb-8">
                      <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> {plan.storage}</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> {plan.emails} Emails</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> {plan.websites}</li>
                      <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> Free SSL</li>
                    </ul>
                    <Button className="w-full" variant={plan.highlight ? 'default' : 'outline'}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-950/50 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Included With Every Plan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-medium text-slate-300">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is managed hosting?</AccordionTrigger>
              <AccordionContent>
                Managed hosting means we take care of the technical side of keeping your website online, including server setup, security, backups, and updates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I upgrade my plan later?</AccordionTrigger>
              <AccordionContent>
                Yes, you can seamlessly upgrade your hosting plan at any time as your business grows without any downtime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer email accounts?</AccordionTrigger>
              <AccordionContent>
                Yes, all our plans come with unlimited business email accounts matched to your custom domain name.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}