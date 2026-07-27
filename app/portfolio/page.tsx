"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Image as ImageIcon } from "lucide-react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Websites", "Photography", "Apps", "Branding"];
  
  const projects = [
    { id: 1, title: "E-Commerce Store", category: "Websites" },
    { id: 2, title: "Wedding Highlights", category: "Photography" },
    { id: 3, title: "Fintech Dashboard", category: "Apps" },
    { id: 4, title: "Tech Startup Identity", category: "Branding" },
    { id: 5, title: "Real Estate Portal", category: "Websites" },
    { id: 6, title: "Corporate Event", category: "Photography" },
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-slate-950 py-20 text-center border-b border-slate-800">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-primary">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            A showcase of our recent projects across web development, design, and photography.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
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
          
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden border-slate-800 bg-slate-900/50 hover:border-primary/50 transition-colors">
                    <div className="aspect-[4/3] bg-slate-800 relative overflow-hidden flex items-center justify-center text-slate-600">
                       <ImageIcon className="w-12 h-12" />
                       <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Link href={`#`}>
                            <Button variant="secondary" className="gap-2">
                              View Project <ExternalLink className="w-4 h-4" />
                            </Button>
                          </Link>
                       </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}