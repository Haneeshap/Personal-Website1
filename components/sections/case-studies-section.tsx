'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Gauge, Shield, TrendingUp, LayoutTemplate, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const caseStudies = [
  { id: 'rag-cost', title: 'RAG System Cost Optimization', tags: ['LLMOps', 'Cost Optimization', 'RAG'],
    summary: 'Reduced inference costs by 70% while maintaining accuracy through intelligent caching and query optimization.',
    metrics: [
      { label: 'Cost Reduction', value: '70%', icon: DollarSign },
      { label: 'Latency Improved', value: '45%', icon: Gauge },
      { label: 'Accuracy Maintained', value: '99%', icon: TrendingUp },
    ],
    sections: [
      { title: 'System Design', content: 'Multi-tier caching with semantic similarity caching, response caching, and embedding caching. Intelligent model routing based on complexity.', icon: LayoutTemplate },
      { title: 'Cost Optimization', content: 'Semantic caching to avoid redundant LLM calls. Model cascading from smaller to larger models. Token optimization through prompt engineering.', icon: DollarSign },
      { title: 'Monitoring', content: 'Real-time dashboards tracking cost per query, cache hit rates. Alerting for cost anomalies and quality degradation.', icon: Gauge },
      { title: 'Scaling', content: 'Horizontal scaling of cache layer with Redis Cluster. Read replicas for vector database. Automatic model instance scaling.', icon: TrendingUp },
      { title: 'Security', content: 'End-to-end encryption for cached responses. Tenant isolation. Audit logging for all model interactions.', icon: Shield },
    ] },
  { id: 'agent-scale', title: 'Multi-Agent Platform Scaling', tags: ['Agentic AI', 'Scaling', 'Infrastructure'],
    summary: 'Scaled agentic AI platform to handle 10K+ concurrent workflows with sub-2s task completion latency.',
    metrics: [
      { label: 'Concurrent Workflows', value: '10K+', icon: TrendingUp },
      { label: 'P99 Latency', value: '<2s', icon: Gauge },
      { label: 'Uptime', value: '99.9%', icon: Shield },
    ],
    sections: [
      { title: 'System Design', content: 'Hierarchical agent architecture with supervisor agents coordinating workers. Durable execution with checkpointing.', icon: LayoutTemplate },
      { title: 'Cost Optimization', content: 'Aggressive caching of agent reasoning. Token budget allocation. Spot instance usage for non-critical tasks.', icon: DollarSign },
      { title: 'Monitoring', content: 'Distributed tracing across agent interactions. Real-time SLA tracking. Anomaly detection.', icon: Gauge },
      { title: 'Scaling', content: 'Event-driven with Kafka. Kubernetes HPA for workers. Priority queues for SLA-critical workflows.', icon: TrendingUp },
      { title: 'Security', content: 'Sandboxed tool execution. Rate limiting per tenant. Secrets management with Vault.', icon: Shield },
    ] },
  { id: 'feature-rt', title: 'Real-Time Feature Engineering', tags: ['Data Engineering', 'ML', 'Streaming'],
    summary: 'Built streaming feature pipeline reducing feature freshness from hours to seconds, improving model accuracy by 15%.',
    metrics: [
      { label: 'Feature Freshness', value: '<30s', icon: Gauge },
      { label: 'Accuracy Gain', value: '15%', icon: TrendingUp },
      { label: 'Events/sec', value: '100K', icon: TrendingUp },
    ],
    sections: [
      { title: 'System Design', content: 'Kafka-based streaming with Spark Structured Streaming. Feast for feature serving with Redis online store.', icon: LayoutTemplate },
      { title: 'Cost Optimization', content: 'Tiered storage with hot/warm/cold features. Computation batching. Shared feature reuse.', icon: DollarSign },
      { title: 'Monitoring', content: 'Feature drift monitoring. Data quality checks. Feature importance tracking.', icon: Gauge },
      { title: 'Scaling', content: 'Partitioned Kafka topics. Autoscaling Spark executors. Multi-region replication.', icon: TrendingUp },
      { title: 'Security', content: 'PII detection and masking. Role-based access control. Audit trail.', icon: Shield },
    ] },
];

function CaseStudyCard({ caseStudy, index }: { caseStudy: typeof caseStudies[0]; index: number }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-border bg-card/50 overflow-hidden">
      <div className="p-6 lg:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.tags.map((tag) => <Badge key={tag} variant="secondary" className="text-xs font-mono">{tag}</Badge>)}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{caseStudy.title}</h3>
        <p className="text-muted-foreground text-sm mb-6">{caseStudy.summary}</p>
        <div className="grid grid-cols-3 gap-4 mb-6">{caseStudy.metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="text-center p-4 rounded-xl bg-secondary/50">
              <div className="flex items-center justify-center mb-2"><Icon className="h-4 w-4 text-muted-foreground" /></div>
              <div className="text-lg font-bold text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          );
        })}</div>
        <Button size="sm" variant="outline" className="w-full h-8 text-xs" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Hide Details' : 'Read Full Case Study'}
          <ChevronRight className={cn('ml-1 h-3.5 w-3.5 transition-transform', isExpanded && 'rotate-90')} />
        </Button>
        {isExpanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 space-y-4">
            {caseStudy.sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="flex gap-4 p-4 rounded-xl bg-secondary/30 border border-border">
                  <div className="p-2 rounded-lg bg-secondary shrink-0"><Icon className="h-4 w-4 text-muted-foreground" /></div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">{section.title}</h4>
                    <p className="text-sm text-muted-foreground">{section.content}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 relative bg-muted/30">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="section-heading mb-4">Case Studies</h2>
          <p className="section-subheading mx-auto">Deep dives into engineering challenges and measurable outcomes from production AI systems.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((cs, index) => <CaseStudyCard key={cs.id} caseStudy={cs} index={index} />)}
        </div>
      </div>
    </section>
  );
}
