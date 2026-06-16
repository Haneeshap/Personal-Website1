'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, GitBranch, GitPullRequest, CheckCircle2, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const languages = [
  { name: 'Python', percentage: 65, color: 'bg-blue-500' },
  { name: 'TypeScript', percentage: 15, color: 'bg-cyan-500' },
  { name: 'Go', percentage: 8, color: 'bg-teal-500' },
  { name: 'Rust', percentage: 5, color: 'bg-orange-500' },
  { name: 'SQL', percentage: 4, color: 'bg-amber-500' },
  { name: 'Other', percentage: 3, color: 'bg-gray-500' },
];

const stats = [
  { label: 'Total Commits', value: '2,847', icon: GitCommit },
  { label: 'Pull Requests', value: '342', icon: GitPullRequest },
  { label: 'Issues Resolved', value: '189', icon: CheckCircle2 },
  { label: 'Repositories', value: '48', icon: GitBranch },
];

const aiProjectStats = [
  { label: 'AI/ML Projects', value: 24 },
  { label: 'RAG Implementations', value: 8 },
  { label: 'Agentic Systems', value: 6 },
  { label: 'ML Pipelines', value: 12 },
];

const contributionData = Array.from({ length: 52 }, () =>
  Array.from({ length: 7 }, () => ({ level: Math.floor(Math.random() * 5) }))
);

function ContributionHeatmap() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-0.5 min-w-fit">
        {contributionData.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-0.5">
            {week.map((day, dayIndex) => (
              <div key={dayIndex} className={cn('w-2.5 h-2.5 rounded-sm',
                day.level === 0 && 'bg-secondary',
                day.level === 1 && 'bg-emerald-500/20',
                day.level === 2 && 'bg-emerald-500/40',
                day.level === 3 && 'bg-emerald-500/60',
                day.level === 4 && 'bg-emerald-500/80'
              )} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
      <div className="p-2 rounded-lg bg-secondary"><Icon className="h-4 w-4 text-muted-foreground" /></div>
      <div>
        <div className="text-lg font-bold text-foreground">{stat.value}</div>
        <div className="text-xs text-muted-foreground">{stat.label}</div>
      </div>
    </motion.div>
  );
}

export function GitHubSection() {
  return (
    <section id="github" className="py-24 lg:py-32 relative bg-muted/30">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-4">
            <Github className="h-4 w-4" />
            <span className="text-sm font-medium text-muted-foreground">Open Source Contributions</span>
          </div>
          <h2 className="section-heading mb-4">GitHub Analytics</h2>
          <p className="section-subheading mx-auto">Active contributor to AI/ML open source projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-6 rounded-2xl border border-border bg-card/50">
              <h3 className="text-sm font-semibold text-foreground mb-4">Contribution Activity</h3>
              <ContributionHeatmap />
              <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">{[0, 1, 2, 3, 4].map((level) => (
                  <div key={level} className={cn('w-2.5 h-2.5 rounded-sm',
                    level === 0 && 'bg-secondary',
                    level === 1 && 'bg-emerald-500/20',
                    level === 2 && 'bg-emerald-500/40',
                    level === 3 && 'bg-emerald-500/60',
                    level === 4 && 'bg-emerald-500/80'
                  )} />
                ))}</div>
                <span>More</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="p-6 rounded-2xl border border-border bg-card/50">
              <h3 className="text-sm font-semibold text-foreground mb-4">Languages</h3>
              <div className="space-y-4">{languages.map((lang) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div className={cn('h-full rounded-full', lang.color)}
                      initial={{ width: 0 }} whileInView={{ width: `${lang.percentage}%` }} viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }} />
                  </div>
                </div>
              ))}</div>
            </motion.div>
          </div>
          <div className="space-y-4">{stats.map((stat, index) => <StatCard key={stat.label} stat={stat} index={index} />)}</div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }} className="mt-8 p-6 rounded-2xl border border-border bg-card/50">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Star className="h-4 w-4 text-amber-500" />AI Project Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{aiProjectStats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/50">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}</div>
        </motion.div>
      </div>
    </section>
  );
}
