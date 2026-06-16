'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, BookOpen, Database, Bot, BrainCircuit, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const blogPosts = [
  { id: 'llmops-scale', title: 'LLMOps at Scale: Lessons from Production', excerpt: 'Key insights from deploying and managing 100+ LLM endpoints in production.', category: 'LLMOps', readTime: '12 min', date: '2024-01-15', icon: Database, color: 'from-rose-500 to-pink-500', featured: true },
  { id: 'multi-agent', title: 'Building Robust Multi-Agent Systems', excerpt: 'Architectural patterns for building production-grade multi-agent AI systems.', category: 'Agentic AI', readTime: '15 min', date: '2024-01-10', icon: Bot, color: 'from-blue-500 to-cyan-500', featured: true },
  { id: 'feature-stores', title: 'Feature Stores: The Missing Piece in ML Infrastructure', excerpt: 'Why feature stores are critical for ML at scale and implementation best practices.', category: 'Data Engineering', readTime: '10 min', date: '2024-01-05', icon: Database, color: 'from-amber-500 to-orange-500', featured: false },
  { id: 'rag-patterns', title: 'RAG Architecture Patterns for Enterprise', excerpt: 'Comparing simple vs hybrid vs multi-stage reranking RAG architectures.', category: 'AI Architecture', readTime: '14 min', date: '2023-12-28', icon: BrainCircuit, color: 'from-teal-500 to-emerald-500', featured: false },
  { id: 'prompt-eng', title: 'Prompt Engineering for Production Systems', excerpt: 'Systematic approaches to prompt engineering that scale: version control and testing.', category: 'GenAI', readTime: '8 min', date: '2023-12-20', icon: Sparkles, color: 'from-violet-500 to-purple-500', featured: false },
  { id: 'streaming-ml', title: 'Real-Time ML with Streaming Pipelines', excerpt: 'Building low-latency ML pipelines with Kafka and Spark Streaming.', category: 'Data Engineering', readTime: '11 min', date: '2023-12-15', icon: Database, color: 'from-cyan-500 to-blue-500', featured: false },
];

const categories = [
  { name: 'LLMOps', icon: Database },
  { name: 'Agentic AI', icon: Bot },
  { name: 'Data Engineering', icon: Database },
  { name: 'AI Architecture', icon: BrainCircuit },
  { name: 'GenAI', icon: Sparkles },
];

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const Icon = post.icon;
  return (
    <motion.a href={`#blog/${post.id}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-xl border border-border bg-card/50 overflow-hidden hover:border-border/80 transition-all">
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className={cn('p-2.5 rounded-lg bg-gradient-to-br shrink-0', post.color)}>
            <Icon className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs font-mono">{post.category}</Badge>
              {post.featured && <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-600 dark:text-amber-400">Featured</Badge>}
            </div>
            <h3 className="font-semibold text-foreground mb-1 group-hover:text-foreground/80 transition-colors line-clamp-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
              <span>{post.date}</span>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
        </div>
      </div>
    </motion.a>
  );
}

function PostCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const Icon = post.icon;
  return (
    <motion.a href={`#blog/${post.id}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-border/80 transition-all">
      <div className="p-6 lg:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className={cn('p-3 rounded-xl bg-gradient-to-br shrink-0', post.color)}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs font-mono">{post.category}</Badge>
              <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-600 dark:text-amber-400">Featured</Badge>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">{post.title}</h3>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
            <span>{post.date}</span>
          </div>
          <span className="text-sm font-medium text-foreground group-hover:text-foreground/80 flex items-center gap-1">
            Read more <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function BlogSection() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section id="blog" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="section-heading mb-4">Technical Blog</h2>
          <p className="section-subheading mx-auto">Deep dives into AI infrastructure, system design, and lessons from production ML systems.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button key={cat.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                <Icon className="h-3.5 w-3.5" />{cat.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          {featuredPosts.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {regularPosts.map((post, index) => <BlogCard key={post.id} post={post} index={index} />)}
        </div>
      </div>
    </section>
  );
}
