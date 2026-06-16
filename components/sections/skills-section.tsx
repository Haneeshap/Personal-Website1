'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Cpu, Database, Cloud, Server, Sparkles } from 'lucide-react';

const skillCategories = [
  { name: 'AI & ML', icon: Brain, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20',
    skills: [{ name: 'Machine Learning', level: 95 }, { name: 'Deep Learning', level: 90 }, { name: 'Computer Vision', level: 85 }, { name: 'NLP', level: 90 }, { name: 'Reinforcement Learning', level: 80 }, { name: 'Model Optimization', level: 92 }] },
  { name: 'GenAI & Agentic AI', icon: Sparkles, color: 'from-teal-500 to-emerald-500', bgColor: 'bg-teal-500/10', borderColor: 'border-teal-500/20',
    skills: [{ name: 'LLM Architecture', level: 95 }, { name: 'RAG Systems', level: 96 }, { name: 'Multi-Agent Systems', level: 92 }, { name: 'Prompt Engineering', level: 94 }, { name: 'LangChain/LangGraph', level: 90 }, { name: 'Fine-tuning', level: 88 }] },
  { name: 'Data Engineering', icon: Database, color: 'from-amber-500 to-orange-500', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/20',
    skills: [{ name: 'Apache Spark', level: 92 }, { name: 'Kafka', level: 90 }, { name: 'Airflow', level: 88 }, { name: 'ETL Pipelines', level: 95 }, { name: 'Data Modeling', level: 90 }, { name: 'Real-time Streaming', level: 85 }] },
  { name: 'MLOps & LLMOps', icon: Cpu, color: 'from-rose-500 to-pink-500', bgColor: 'bg-rose-500/10', borderColor: 'border-rose-500/20',
    skills: [{ name: 'MLflow', level: 92 }, { name: 'Kubeflow', level: 85 }, { name: 'Model Deployment', level: 94 }, { name: 'Model Monitoring', level: 90 }, { name: 'LLM Evaluation', level: 88 }, { name: 'Vector Databases', level: 92 }] },
  { name: 'Cloud & DevOps', icon: Cloud, color: 'from-cyan-500 to-blue-500', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/20',
    skills: [{ name: 'AWS', level: 92 }, { name: 'GCP', level: 88 }, { name: 'Kubernetes', level: 90 }, { name: 'Docker', level: 95 }, { name: 'Terraform', level: 85 }, { name: 'CI/CD', level: 90 }] },
  { name: 'Backend Engineering', icon: Server, color: 'from-violet-500 to-purple-500', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/20',
    skills: [{ name: 'Python', level: 96 }, { name: 'FastAPI', level: 92 }, { name: 'PostgreSQL', level: 90 }, { name: 'Redis', level: 88 }, { name: 'GraphQL', level: 85 }, { name: 'System Design', level: 92 }] },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <motion.div className="h-full rounded-full bg-gradient-to-r from-foreground/80 to-foreground"
          initial={{ width: 0 }} animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: 'easeOut' }} />
      </div>
    </div>
  );
}

function SkillCategoryCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = category.icon;
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-2xl border ${category.borderColor} ${category.bgColor} backdrop-blur-sm`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="section-heading mb-4">Technical Skills</h2>
          <p className="section-subheading mx-auto">
            Comprehensive expertise across the AI/ML stack, from foundational algorithms to production-grade infrastructure.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
