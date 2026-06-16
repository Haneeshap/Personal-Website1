'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Box, ChevronRight, Layers, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const architectures = [
  { id: 'rag', title: 'Enterprise RAG Architecture', icon: Database, color: 'from-blue-500 to-cyan-500',
    description: 'Production RAG with hybrid search, reranking, and multi-tenant isolation.',
    components: ['Query Processing', 'Embedding Service', 'Vector Database', 'Reranking Model', 'LLM Generation', 'Response Streaming'],
    diagram: <svg viewBox="0 0 400 200" className="w-full h-full text-muted-foreground">
      <defs><marker id="rag-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/></marker></defs>
      <rect x="15" y="60" width="60" height="40" rx="4" className="fill-blue-500/10 stroke-blue-500" strokeWidth="1"/>
      <text x="45" y="85" textAnchor="middle" className="fill-current text-[10px] font-medium">Query</text>
      <rect x="115" y="60" width="60" height="40" rx="4" className="fill-cyan-500/10 stroke-cyan-500" strokeWidth="1"/>
      <text x="145" y="85" textAnchor="middle" className="fill-current text-[10px] font-medium">Embed</text>
      <rect x="215" y="40" width="60" height="40" rx="4" className="fill-teal-500/10 stroke-teal-500" strokeWidth="1"/>
      <text x="245" y="65" textAnchor="middle" className="fill-current text-[10px] font-medium">Vector DB</text>
      <rect x="215" y="100" width="60" height="40" rx="4" className="fill-emerald-500/10 stroke-emerald-500" strokeWidth="1"/>
      <text x="245" y="125" textAnchor="middle" className="fill-current text-[10px] font-medium">Rerank</text>
      <rect x="315" y="60" width="60" height="40" rx="4" className="fill-blue-500/10 stroke-blue-500" strokeWidth="1"/>
      <text x="345" y="85" textAnchor="middle" className="fill-current text-[10px] font-medium">LLM</text>
      <line x1="75" y1="80" x2="115" y2="80" className="stroke-current" strokeWidth="1.5" markerEnd="url(#rag-arrow)"/>
      <line x1="175" y1="80" x2="215" y2="60" className="stroke-current" strokeWidth="1.5" markerEnd="url(#rag-arrow)"/>
      <line x1="245" y1="80" x2="245" y2="100" className="stroke-current" strokeWidth="1.5" markerEnd="url(#rag-arrow)"/>
      <line x1="275" y1="120" x2="315" y2="80" className="stroke-current" strokeWidth="1.5" markerEnd="url(#rag-arrow)"/>
    </svg> },
  { id: 'multi-agent', title: 'Multi-Agent Architecture', icon: Layers, color: 'from-teal-500 to-emerald-500',
    description: 'Hierarchical agent orchestration with tool usage, memory, and human-in-the-loop.',
    components: ['Supervisor Agent', 'Worker Agents', 'Tool Registry', 'Shared Memory', 'State Manager', 'Approval Gateway'],
    diagram: <svg viewBox="0 0 400 200" className="w-full h-full text-muted-foreground">
      <rect x="170" y="20" width="60" height="40" rx="4" className="fill-teal-500/10 stroke-teal-500" strokeWidth="1"/>
      <text x="200" y="45" textAnchor="middle" className="fill-current text-[10px] font-medium">Supervisor</text>
      <rect x="70" y="90" width="50" height="35" rx="4" className="fill-emerald-500/10 stroke-emerald-500" strokeWidth="1"/>
      <text x="95" y="112" textAnchor="middle" className="fill-current text-[9px] font-medium">Worker A</text>
      <rect x="170" y="90" width="50" height="35" rx="4" className="fill-emerald-500/10 stroke-emerald-500" strokeWidth="1"/>
      <text x="195" y="112" textAnchor="middle" className="fill-current text-[9px] font-medium">Worker B</text>
      <rect x="280" y="90" width="50" height="35" rx="4" className="fill-emerald-500/10 stroke-emerald-500" strokeWidth="1"/>
      <text x="305" y="112" textAnchor="middle" className="fill-current text-[9px] font-medium">Worker C</text>
      <rect x="70" y="150" width="260" height="35" rx="4" className="fill-cyan-500/10 stroke-cyan-500" strokeWidth="1"/>
      <text x="200" y="172" textAnchor="middle" className="fill-current text-[10px] font-medium">Shared Memory & Tools</text>
      <line x1="180" y1="60" x2="95" y2="90" className="stroke-current" strokeWidth="1.5" markerEnd="url(#rag-arrow)"/>
      <line x1="200" y1="60" x2="195" y2="90" className="stroke-current" strokeWidth="1.5" markerEnd="url(#rag-arrow)"/>
      <line x1="220" y1="60" x2="305" y2="90" className="stroke-current" strokeWidth="1.5" markerEnd="url(#rag-arrow)"/>
    </svg> },
  { id: 'llmops', title: 'LLMOps Architecture', icon: Server, color: 'from-rose-500 to-pink-500',
    description: 'End-to-end ML lifecycle management with registry, monitoring, and deployment.',
    components: ['Experiment Tracking', 'Model Registry', 'Deployment Pipeline', 'Inference Service', 'Monitoring Stack', 'Feedback Loop'],
    diagram: <svg viewBox="0 0 400 200" className="w-full h-full text-muted-foreground">
      <rect x="20" y="30" width="70" height="35" rx="4" className="fill-rose-500/10 stroke-rose-500" strokeWidth="1"/>
      <text x="55" y="52" textAnchor="middle" className="fill-current text-[9px] font-medium">Experiments</text>
      <rect x="110" y="30" width="70" height="35" rx="4" className="fill-pink-500/10 stroke-pink-500" strokeWidth="1"/>
      <text x="145" y="52" textAnchor="middle" className="fill-current text-[9px] font-medium">Registry</text>
      <rect x="200" y="30" width="70" height="35" rx="4" className="fill-fuchsia-500/10 stroke-fuchsia-500" strokeWidth="1"/>
      <text x="235" y="52" textAnchor="middle" className="fill-current text-[9px] font-medium">CI/CD</text>
      <rect x="290" y="30" width="70" height="35" rx="4" className="fill-rose-500/10 stroke-rose-500" strokeWidth="1"/>
      <text x="325" y="52" textAnchor="middle" className="fill-current text-[9px] font-medium">Deploy</text>
      <rect x="165" y="90" width="70" height="35" rx="4" className="fill-amber-500/10 stroke-amber-500" strokeWidth="1"/>
      <text x="200" y="112" textAnchor="middle" className="fill-current text-[9px] font-medium">Inference</text>
      <rect x="165" y="140" width="70" height="35" rx="4" className="fill-orange-500/10 stroke-orange-500" strokeWidth="1"/>
      <text x="200" y="162" textAnchor="middle" className="fill-current text-[9px] font-medium">Monitor</text>
      <line x1="90" y1="47" x2="110" y2="47" className="stroke-current" strokeWidth="1.5"/>
      <line x1="180" y1="47" x2="200" y2="47" className="stroke-current" strokeWidth="1.5"/>
      <line x1="270" y1="47" x2="290" y2="47" className="stroke-current" strokeWidth="1.5"/>
      <line x1="325" y1="65" x2="235" y2="90" className="stroke-current" strokeWidth="1.5"/>
    </svg> },
  { id: 'data-platform', title: 'AI Data Platform Architecture', icon: Box, color: 'from-amber-500 to-orange-500',
    description: 'Real-time streaming with feature engineering, storage, and serving layers.',
    components: ['Event Streaming (Kafka)', 'Stream Processing', 'Feature Store', 'Data Lake', 'Serving Layer', 'Analytics Engine'],
    diagram: <svg viewBox="0 0 400 200" className="w-full h-full text-muted-foreground">
      <rect x="20" y="60" width="60" height="40" rx="4" className="fill-amber-500/10 stroke-amber-500" strokeWidth="1"/>
      <text x="50" y="85" textAnchor="middle" className="fill-current text-[10px] font-medium">Kafka</text>
      <rect x="110" y="60" width="60" height="40" rx="4" className="fill-orange-500/10 stroke-orange-500" strokeWidth="1"/>
      <text x="140" y="85" textAnchor="middle" className="fill-current text-[10px] font-medium">Spark</text>
      <rect x="200" y="30" width="60" height="40" rx="4" className="fill-yellow-500/10 stroke-yellow-500" strokeWidth="1"/>
      <text x="230" y="55" textAnchor="middle" className="fill-current text-[10px] font-medium">Feature</text>
      <rect x="200" y="90" width="60" height="40" rx="4" className="fill-amber-500/10 stroke-amber-500" strokeWidth="1"/>
      <text x="230" y="115" textAnchor="middle" className="fill-current text-[10px] font-medium">Data Lake</text>
      <rect x="300" y="60" width="60" height="40" rx="4" className="fill-orange-500/10 stroke-orange-500" strokeWidth="1"/>
      <text x="330" y="85" textAnchor="middle" className="fill-current text-[10px] font-medium">Serve</text>
      <line x1="80" y1="80" x2="110" y2="80" className="stroke-current" strokeWidth="1.5"/>
      <line x1="170" y1="80" x2="200" y2="50" className="stroke-current" strokeWidth="1.5"/>
      <line x1="170" y1="80" x2="200" y2="110" className="stroke-current" strokeWidth="1.5"/>
      <line x1="260" y1="50" x2="300" y2="80" className="stroke-current" strokeWidth="1.5"/>
    </svg> },
  { id: 'cloud', title: 'Cloud AI Deployment Architecture', icon: Cloud, color: 'from-cyan-500 to-blue-500',
    description: 'Multi-cloud infrastructure with auto-scaling, cost optimization, and security.',
    components: ['Terraform IaC', 'Kubernetes Clusters', 'GPU Node Pools', 'Load Balancer', 'CDN & Caching', 'Security Controls'],
    diagram: <svg viewBox="0 0 400 200" className="w-full h-full text-muted-foreground">
      <rect x="170" y="20" width="60" height="30" rx="4" className="fill-cyan-500/10 stroke-cyan-500" strokeWidth="1"/>
      <text x="200" y="40" textAnchor="middle" className="fill-current text-[9px] font-medium">Load Balancer</text>
      <rect x="70" y="70" width="60" height="35" rx="4" className="fill-blue-500/10 stroke-blue-500" strokeWidth="1"/>
      <text x="100" y="92" textAnchor="middle" className="fill-current text-[10px] font-medium">K8s</text>
      <rect x="170" y="70" width="60" height="35" rx="4" className="fill-blue-500/10 stroke-blue-500" strokeWidth="1"/>
      <text x="200" y="92" textAnchor="middle" className="fill-current text-[10px] font-medium">K8s</text>
      <rect x="270" y="70" width="60" height="35" rx="4" className="fill-blue-500/10 stroke-blue-500" strokeWidth="1"/>
      <text x="300" y="92" textAnchor="middle" className="fill-current text-[10px] font-medium">K8s</text>
      <rect x="120" y="130" width="160" height="40" rx="4" className="fill-cyan-500/10 stroke-cyan-500" strokeWidth="1"/>
      <text x="200" y="155" textAnchor="middle" className="fill-current text-[10px] font-medium">GPU Node Pool + Auto-scaling</text>
      <line x1="180" y1="50" x2="100" y2="70" className="stroke-current" strokeWidth="1.5"/>
      <line x1="200" y1="50" x2="200" y2="70" className="stroke-current" strokeWidth="1.5"/>
      <line x1="220" y1="50" x2="300" y2="70" className="stroke-current" strokeWidth="1.5"/>
    </svg> },
];

function ArchitectureCard({ arch, index }: { arch: typeof architectures[0]; index: number }) {
  const Icon = arch.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-border bg-card/50 overflow-hidden">
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${arch.color}`}><Icon className="h-6 w-6 text-white" /></div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{arch.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{arch.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {arch.components.slice(0, 3).map((c) => (
            <span key={c} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">{c}</span>
          ))}
          {arch.components.length > 3 && <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">+{arch.components.length - 3}</span>}
        </div>
        <div className="h-32 rounded-lg bg-secondary/50 border border-border p-4 mb-4">{arch.diagram}</div>
        <Button size="sm" variant="ghost" className="w-full h-8 text-xs">
          View Full Architecture <ChevronRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </div>
    </motion.div>
  );
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="section-heading mb-4">Architecture Showcase</h2>
          <p className="section-subheading mx-auto">Production architectures for AI systems, from RAG to multi-agent orchestration.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectures.map((arch, index) => <ArchitectureCard key={arch.id} arch={arch} index={index} />)}
        </div>
      </div>
    </section>
  );
}
