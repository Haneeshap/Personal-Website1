'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, BookOpen, Briefcase, Calendar, BadgeCheck, GraduationCap, Rocket, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const timelineItems = [
  { type: 'milestone', title: 'Principal AI Systems Engineer', organization: 'Enterprise AI Company', date: '2024 - Present',
    description: 'Leading architecture for enterprise AI platforms serving Fortune 500 companies.',
    icon: Rocket, highlights: ['Architected multi-agent platform', 'Reduced inference costs 60%', 'Led team of 8 engineers'] },
  { type: 'milestone', title: 'Senior ML Platform Engineer', organization: 'Tech Innovation Corp', date: '2022 - 2024',
    description: 'Built LLMOps infrastructure for real-time model serving and monitoring.',
    icon: Briefcase, highlights: ['Built MLOps platform', 'Real-time feature engineering', 'Deployed 100+ models'] },
  { type: 'milestone', title: 'Machine Learning Engineer', organization: 'DataTech Analytics', date: '2020 - 2022',
    description: 'Developed deep learning models for CV and NLP applications.',
    icon: Star, highlights: ['SOTA on benchmarks', 'Reduced training time 40%', 'Model optimization'] },
  { type: 'certification', title: 'AWS Machine Learning Specialty', organization: 'Amazon Web Services', date: '2023', icon: Award },
  { type: 'certification', title: 'Google Cloud Professional ML Engineer', organization: 'Google Cloud', date: '2022', icon: BadgeCheck },
  { type: 'learning', title: 'Deep Learning Specialization', organization: 'DeepLearning.AI', date: '2020', icon: GraduationCap },
  { type: 'learning', title: 'MLOps Engineering on GCP', organization: 'Google Cloud', date: '2022', icon: BookOpen },
  { type: 'milestone', title: 'Data Engineer', organization: 'StartupXYZ', date: '2018 - 2020',
    description: 'Built ETL pipelines processing terabytes daily.',
    icon: Briefcase, highlights: ['Data warehouse design', 'Streaming analytics', 'Mentored 3 engineers'] },
];

const typeStyles = {
  milestone: { dot: 'bg-blue-500', ring: 'ring-blue-500/20', line: 'bg-blue-500' },
  certification: { dot: 'bg-amber-500', ring: 'ring-amber-500/20', line: 'bg-amber-500' },
  learning: { dot: 'bg-teal-500', ring: 'ring-teal-500/20', line: 'bg-teal-500' },
};

function TimelineItem({ item, index }: { item: typeof timelineItems[0]; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = item.icon;
  const styles = typeStyles[item.type as keyof typeof typeStyles];

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }} className="relative pl-8 pb-8 last:pb-0">
      <div className={cn('absolute left-0 top-0 w-4 h-4 rounded-full', styles.dot, 'ring-4', styles.ring)} />
      {index < timelineItems.length - 1 && (
        <div className={cn('absolute left-[7px] top-4 w-0.5 h-full -translate-x-1/2 bg-gradient-to-b', styles.line, 'to-transparent')} />
      )}
      <div className="group">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg shrink-0 bg-secondary transition-transform group-hover:scale-105">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" />{item.date}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-2">{item.organization}</p>
            {item.description && <p className="text-sm text-muted-foreground mb-3">{item.description}</p>}
            {item.highlights && (
              <ul className="space-y-1">{item.highlights.map((h, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className={cn('h-1.5 w-1.5 rounded-full', styles.dot)} />{h}
                </li>
              ))}</ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const milestones = timelineItems.filter((i) => i.type === 'milestone');
  const certifications = timelineItems.filter((i) => i.type === 'certification' || i.type === 'learning');

  return (
    <section id="experience" className="py-24 lg:py-32 relative bg-muted/30">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="section-heading mb-4">Experience & Journey</h2>
          <p className="section-subheading mx-auto">A decade building AI systems, earning certifications, and continuous learning.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />Career Milestones
            </h3>
            <div className="space-y-0">{milestones.map((item, index) => <TimelineItem key={item.title} item={item} index={index} />)}</div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-5 w-5" />Certifications & Learning
            </h3>
            <div className="space-y-0">{certifications.map((item, index) => <TimelineItem key={item.title} item={item} index={index} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
