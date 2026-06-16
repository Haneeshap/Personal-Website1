'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers, Database, Cloud, BrainCircuit, Bot, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const projects = [
  { id: 'agentic-platform', title: 'Enterprise Agentic AI Platform', featured: true,
    description: 'Production-grade multi-agent orchestration system enabling autonomous task execution across enterprise workflows.',
    problem: 'Enterprises struggle with automating complex multi-step processes that require decision-making and coordination.',
    architecture: 'Microservices with LangGraph for agent orchestration, Redis for state, PostgreSQL for persistence.',
    techStack: ['LangGraph', 'LangChain', 'OpenAI GPT-4', 'FastAPI', 'PostgreSQL', 'Redis', 'Kubernetes'],
    features: ['Multi-agent task decomposition', 'Tool calling with structured schemas', 'Human-in-the-loop approval', 'Real-time progress tracking'],
    scalability: 'Handles 10K+ concurrent workflows with horizontal autoscaling.',
    challenges: ['Agent coordination', 'Token budget optimization', 'Handling partial failures'],
    github: 'https://github.com', demo: 'https://demo.example.com', icon: Bot, color: 'from-blue-500 to-cyan-500' },
  { id: 'rag-system', title: 'Production RAG System', featured: true,
    description: 'Enterprise retrieval-augmented generation with hybrid search, reranking, and multi-tenant architecture.',
    problem: 'Building accurate, fast RAG systems while maintaining sub-second latency.',
    architecture: 'Pinecone vector DB, hybrid BM25 + semantic search, ColBERT reranking, streaming responses.',
    techStack: ['Pinecone', 'OpenAI', 'LangChain', 'PostgreSQL', 'Redis', 'Next.js', 'FastAPI'],
    features: ['Hybrid search', 'Multi-stage reranking', 'Streaming responses', 'Smart document chunking'],
    scalability: '50K+ queries/day with <500ms P99 latency across 100+ tenants.',
    challenges: ['Reducing hallucination', 'Domain-specific embeddings', 'Vector DB costs'],
    github: 'https://github.com', demo: 'https://demo.example.com', icon: Database, color: 'from-teal-500 to-emerald-500' },
  { id: 'data-platform', title: 'Real-Time AI Data Platform', featured: true,
    description: 'Streaming data platform for ML pipelines processing terabytes daily with real-time feature engineering.',
    problem: 'ML models require fresh features, but batch processing creates hours of latency.',
    architecture: 'Kafka streaming, Spark Structured Streaming, Feast feature store, real-time model endpoints.',
    techStack: ['Apache Kafka', 'Spark Streaming', 'Feast', 'Airflow', 'MLflow', 'PostgreSQL', 'AWS'],
    features: ['100K events/sec feature computation', 'Point-in-time retrieval', 'Drift detection', 'Schema evolution'],
    scalability: '5TB daily with sub-minute feature freshness.',
    challenges: ['Exactly-once processing', 'Feature latency', 'Late-arriving events'],
    github: 'https://github.com', demo: 'https://demo.example.com', icon: Layers, color: 'from-amber-500 to-orange-500' },
  { id: 'interview-agent', title: 'AI Interview Preparation Agent', featured: false,
    description: 'Intelligent interview prep with adaptive questioning, real-time feedback, and analytics.',
    problem: 'Job seekers lack realistic interview practice with personalized feedback.',
    architecture: 'Next.js frontend, FastAPI backend, OpenAI for generation and evaluation.',
    techStack: ['Next.js', 'OpenAI GPT-4', 'FastAPI', 'PostgreSQL', 'TailwindCSS', 'LangChain'],
    features: ['Role-specific questions', 'Real-time evaluation', 'Speech-to-text', 'Progress analytics'],
    scalability: '1000+ concurrent sessions with auto-scaling.',
    challenges: ['Contextual questions', 'Actionable feedback', 'Conversation coherence'],
    github: 'https://github.com', demo: 'https://demo.example.com', icon: BrainCircuit, color: 'from-violet-500 to-purple-500' },
  { id: 'cloud-architecture', title: 'Cloud AI Architecture Portfolio', featured: false,
    description: 'Production-ready cloud architectures for ML workloads with training, inference, and MLOps.',
    problem: 'Organizations need proven, cost-effective cloud architectures for AI that scale.',
    architecture: 'Terraform modules, Kubernetes operators, CI/CD pipelines, monitoring stack.',
    techStack: ['Terraform', 'Kubernetes', 'AWS', 'GCP', 'MLflow', 'Prometheus', 'Grafana'],
    features: ['Infrastructure as Code', 'GPU autoscaling', 'Model registry', 'Cost optimization'],
    scalability: 'Tested up to 1000 GPU training jobs.',
    challenges: ['Multi-cloud abstraction', 'Cost visibility', 'Security compliance'],
    github: 'https://github.com', demo: 'https://demo.example.com', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const Icon = project.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-border/80 bg-card/50">
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          {project.featured && <Badge variant="secondary" className="text-xs font-medium">Featured</Badge>}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs font-mono">{tech}</Badge>
          ))}
          {project.techStack.length > 4 && <Badge variant="outline" className="text-xs font-mono">+{project.techStack.length - 4}</Badge>}
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline" className="h-8 gap-1.5 text-xs" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="h-3.5 w-3.5" />Code</a>
          </Button>
          <Button size="sm" variant="ghost" className="h-8 gap-1.5 text-xs" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer"><ArrowUpRight className="h-3.5 w-3.5" />Demo</a>
          </Button>
          <Button size="sm" variant="ghost" className="h-8 gap-1.5 text-xs ml-auto" onClick={() => setIsExpanded(!isExpanded)}>
            Details <ChevronRight className={cn('h-3.5 w-3.5 transition-transform', isExpanded && 'rotate-90')} />
          </Button>
        </div>
        {isExpanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 pt-6 border-t border-border space-y-4">
            <div><h4 className="text-sm font-semibold text-foreground mb-2">Problem Statement</h4><p className="text-sm text-muted-foreground">{project.problem}</p></div>
            <div><h4 className="text-sm font-semibold text-foreground mb-2">Architecture</h4><p className="text-sm text-muted-foreground">{project.architecture}</p></div>
            <div><h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
              <ul className="space-y-1">{project.features.map((f, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-foreground mt-1.5 h-1 w-1 rounded-full bg-foreground shrink-0" />{f}
                </li>
              ))}</ul>
            </div>
            <div><h4 className="text-sm font-semibold text-foreground mb-2">Scalability</h4><p className="text-sm text-muted-foreground">{project.scalability}</p></div>
            <div><h4 className="text-sm font-semibold text-foreground mb-2">Challenges Solved</h4>
              <ul className="space-y-1">{project.challenges.map((c, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500 mt-0.5 shrink-0" />{c}
                </li>
              ))}</ul>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <p className="section-subheading mx-auto">Production-ready AI systems built with scale, reliability, and performance in mind.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
