'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const contactMethods = [
  { icon: Mail, label: 'Email', value: 'contact@aisystems.engineer', href: 'mailto:contact@aisystems.engineer' },
  { icon: MessageSquare, label: 'LinkedIn', value: 'linkedin.com/in/aisystemsengineer', href: 'https://linkedin.com' },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection() {
  const [formState, setFormState] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = React.useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (Math.random() > 0.1) {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="section-heading mb-4">Get in Touch</h2>
          <p className="section-subheading mx-auto">Open for senior AI engineering roles, consulting opportunities, and technical discussions.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Let&apos;s Build Something Great</h3>
              <p className="text-muted-foreground">Whether you&apos;re building production AI systems or need architectural guidance, I&apos;d love to hear from you.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">Contact Directly</h4>
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a key={method.label} href={method.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border hover:bg-secondary transition-colors group">
                    <div className="p-2 rounded-lg bg-secondary group-hover:bg-secondary/80 transition-colors">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{method.label}</div>
                      <div className="text-sm font-medium text-foreground">{method.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-teal-500/5 border border-blue-500/20">
              <h4 className="text-sm font-semibold text-foreground mb-2">Availability</h4>
              <p className="text-sm text-muted-foreground mb-3">Currently available for:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Senior AI Engineering Roles</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Technical Consulting</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Architecture Reviews</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="space-y-6 p-6 lg:p-8 rounded-2xl border border-border bg-card/50">
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Message sent successfully! I&apos;ll respond within 24 hours.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Something went wrong. Please try again.</span>
                </motion.div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" value={formState.name} onChange={handleInputChange}
                    required disabled={status === 'submitting'} className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" value={formState.email}
                    onChange={handleInputChange} required disabled={status === 'submitting'} className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                <Input id="subject" name="subject" placeholder="What&apos;s this about?" value={formState.subject}
                  onChange={handleInputChange} required disabled={status === 'submitting'} className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell me about your project or opportunity..."
                  value={formState.message} onChange={handleInputChange} required disabled={status === 'submitting'}
                  rows={5} className="resize-none" />
              </div>
              <Button type="submit" disabled={status === 'submitting'}
                className={cn('w-full h-11 rounded-lg font-medium transition-all',
                  'bg-foreground text-background hover:bg-foreground/90',
                  status === 'submitting' && 'opacity-70 cursor-not-allowed')}>
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full" />
                    Sending...
                  </span>
                ) : <span className="flex items-center gap-2"><Send className="h-4 w-4" />Send Message</span>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
