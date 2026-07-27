"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Hosting", "Programming", "Photography", "AI", "Business"];
  
  const posts = [
    { id: 1, title: "10 Reasons Your Business Needs Managed Hosting", category: "Hosting", date: "Jul 24, 2026" },
    { id: 2, title: "Next.js 16 Features You Need to Know", category: "Programming", date: "Jul 20, 2026" },
    { id: 3, title: "How to Prepare for Your Graduation Photoshoot", category: "Photography", date: "Jul 15, 2026" },
    { id: 4, title: "Automating Customer Support with AI", category: "AI", date: "Jul 10, 2026" },
    { id: 5, title: "Scaling Your Digital Agency in Malawi", category: "Business", date: "Jul 5, 2026" },
    { id: 6, title: "Understanding SSL and Why It Matters", category: "Hosting", date: "Jul 1, 2026" },
  ];

  const filteredPosts = filter === "All" ? posts : posts.filter(p => p.category === filter);

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
            The Tech Purple <span className="text-primary">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Insights, tutorials, and news from our expert team.
          </motion.p>
        </div>
      </section>

      {/* Content */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-colors group">
                  <div className="aspect-video bg-slate-800 flex items-center justify-center text-slate-600 relative overflow-hidden">
                    <ImageIcon className="w-12 h-12" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <span className="font-medium text-primary uppercase tracking-wider">{post.category}</span>
                      <span className="text-slate-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 line-clamp-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Link href={`#`} className={buttonVariants({ variant: "link", className: "px-0 text-white hover:text-primary gap-2 font-semibold group/btn" })}>
                      Read More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}