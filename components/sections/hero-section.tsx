'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const networkNodes = [
  { x: 10, y: 20, delay: 0 }, { x: 25, y: 50, delay: 0.5 }, { x: 40, y: 15, delay: 1 },
  { x: 55, y: 70, delay: 1.5 }, { x: 70, y: 30, delay: 2 }, { x: 85, y: 60, delay: 2.5 },
  { x: 15, y: 80, delay: 0.3 }, { x: 60, y: 85, delay: 0.8 }, { x: 80, y: 10, delay: 1.3 },
  { x: 30, y: 65, delay: 1.8 }, { x: 50, y: 40, delay: 2.2 }, { x: 75, y: 75, delay: 0.6 },
];

const connections = [
  [0, 1], [1, 2], [2, 4], [4, 5], [5, 8], [0, 6], [6, 9], [9, 10],
  [10, 7], [7, 11], [11, 5], [3, 9], [3, 10], [1, 10], [4, 11],
];

function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {connections.map(([from, to], index) => {
          const fromNode = networkNodes[from];
          const toNode = networkNodes[to];
          return (
            <motion.line
              key={`line-${index}`}
              x1={fromNode.x} y1={fromNode.y} x2={toNode.x} y2={toNode.y}
              stroke="url(#edgeGradient)" strokeWidth="0.1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: fromNode.delay, repeat: Infinity, repeatType: 'reverse' }}
            />
          );
        })}
        {networkNodes.map((node, index) => (
          <motion.circle
            key={`node-${index}`} cx={node.x} cy={node.y} r="0.4" fill="rgb(59, 130, 246)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>
      <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8"
        >
          <Sparkles className="h-4 w-4 text-blue-500" />
          <span className="text-sm font-medium text-muted-foreground">Available for Senior AI Engineering Roles</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">AI Systems</span><br />
          <span className="text-gradient-blue">Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
        >
          Building Production AI Systems, Agentic Workflows, LLMOps Platforms, Data Pipelines, and Cloud-Native AI Applications at enterprise scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" onClick={() => scrollToSection('projects')}
            className="h-12 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 group">
            View Projects <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}
            className="h-12 px-8 rounded-full border-border hover:bg-secondary">
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
          >
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
