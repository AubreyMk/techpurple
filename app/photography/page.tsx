"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, Video, Calendar } from "lucide-react";
import { useState } from "react";

export default function PhotographyPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Graduations", "Events", "Corporate", "Portraits"];
  
  const packages = [
    { name: "Basic", time: "2 Hours", photos: "50 Photos", extra: "Edited Images", price: "MWK 80,000" },
    { name: "Standard", time: "4 Hours", photos: "100 Photos", extra: "Video Clips", price: "MWK 150,000", highlight: true },
    { name: "Premium", time: "Full Day", photos: "Unlimited Photos", extra: "Highlight Video", price: "MWK 250,000" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Capturing <span className="text-accent">Moments.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto mb-8"
          >
            Professional photography and videography for weddings, graduations, corporate events, and more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="h-14 px-8 text-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Shoot
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Work</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <Button 
                  key={cat} 
                  variant={filter === cat ? "default" : "outline"}
                  onClick={() => setFilter(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Masonry-like grid placeholders */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                  <ImageIcon className="w-12 h-12" />
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">View Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Photography Packages</h2>
            <p className="text-slate-400">Choose the perfect package for your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <Card key={pkg.name} className={`relative ${pkg.highlight ? 'border-primary ring-2 ring-primary/50 bg-slate-900' : 'bg-slate-900/50 border-slate-800'}`}>
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 left-0 bg-primary text-center text-white text-xs font-bold py-1 rounded-t-lg">
                    Recommended
                  </div>
                )}
                <CardHeader className={pkg.highlight ? 'pt-8' : ''}>
                  <CardTitle className="text-2xl text-center">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-center text-primary mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center gap-3"><Calendar className="w-5 h-5 text-primary" /> {pkg.time} Coverage</li>
                    <li className="flex items-center gap-3"><Camera className="w-5 h-5 text-primary" /> {pkg.photos}</li>
                    <li className="flex items-center gap-3"><Video className="w-5 h-5 text-primary" /> {pkg.extra}</li>
                  </ul>
                  <Button className="w-full" variant={pkg.highlight ? 'default' : 'outline'}>
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 bg-background border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Book a Shoot</h2>
            <p className="text-slate-400">Fill out the form below and we'll get back to you shortly.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input placeholder="+265 999 000 000" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="Blantyre, Malawi" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Package Selection</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option>Basic Package (MWK 80,000)</option>
                <option>Standard Package (MWK 150,000)</option>
                <option>Premium Package (MWK 250,000)</option>
                <option>Custom Request</option>
              </select>
            </div>
            <Button size="lg" className="w-full h-12 text-lg">Submit Request</Button>
          </form>
        </div>
      </section>
    </div>
  );
}