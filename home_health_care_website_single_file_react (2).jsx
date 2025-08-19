import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Phone, MapPin, Clock, ShieldCheck, ChevronRight, CheckCircle2, UserCheck, Mail, Home, HandHeart, Activity, HelpingHand, Brain, CalendarCheck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  { icon: <Stethoscope className="w-6 h-6" />, title: "Skilled Nursing", desc: "RN/LVN visits, wound care, medication management, vitals & chronic care.", img: "https://source.unsplash.com/600x400/?nurse,home,patient" },
  { icon: <HandHeart className="w-6 h-6" />, title: "Hospice & Palliative", desc: "Comfort-focused care, pain management, symptom control & family support.", img: "https://source.unsplash.com/600x400/?hospice,care,comfort" },
  { icon: <Home className="w-6 h-6" />, title: "Personal Care", desc: "Bathing, grooming, mobility assistance, meal prep, companionship.", img: "https://source.unsplash.com/600x400/?caregiver,elderly,home" },
  { icon: <Activity className="w-6 h-6" />, title: "Physical Therapy", desc: "Rehab plans post-injury or surgery, strength & balance training.", img: "https://source.unsplash.com/600x400/?physical-therapy,rehab,exercise" },
  { icon: <CalendarCheck className="w-6 h-6" />, title: "Post-Operative Care", desc: "Discharge coordination, dressing changes, medication reminders.", img: "https://source.unsplash.com/600x400/?postoperative,care,bandage" },
  { icon: <Brain className="w-6 h-6" />, title: "Dementia Care", desc: "Memory-supportive routines, safety, caregiver respite & education.", img: "https://source.unsplash.com/600x400/?dementia,senior,care" }
];

const faqs = [
  { q: "What areas do you serve?", a: "We currently serve the broader metro area and surrounding suburbs. See the Locations section for exact coverage and on-call hours." },
  { q: "Do you accept insurance?", a: "Yes. We work with Medicare/Medicaid and most private insurers. We also provide private-pay options and flexible plans." },
  { q: "How fast can care start?", a: "Same-day or next-day in many cases once we complete assessment & physician orders. Call us 24/7 for urgent needs." },
  { q: "What’s the difference between home health and hospice?", a: "Home health focuses on recovery and independence; hospice centers on comfort and quality of life for those with life-limiting illness." }
];

const testimonials = [
  { name: "Maria S.", text: "Compassionate, punctual, and skilled. They made our dad comfortable and kept us informed every step.", img: "https://source.unsplash.com/200x200/?portrait,smile,woman" },
  { name: "Jason R.", text: "From the first call, we felt supported. The nurses were outstanding and the office responsive.", img: "https://source.unsplash.com/200x200/?portrait,smile,man" },
  { name: "Anita K.", text: "Professional therapists who truly cared about my recovery after surgery. Highly recommend!", img: "https://source.unsplash.com/200x200/?portrait,caregiver,woman" }
];

const locations = [
  { city: "Downtown", onCall: "24/7" },
  { city: "North Suburbs", onCall: "6am–10pm" },
  { city: "East Side", onCall: "24/7" },
  { city: "West End", onCall: "8am–8pm" }
];

const Feature = ({ icon, title, text }) => (
  <div className="flex gap-3 items-start">
    <div className="p-2 rounded-xl bg-primary/10">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  </div>
);

export default function HomeHealthCareSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="w-full bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /><span>Licensed • Insured • Trusted</span></div>
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> 24/7 Intake: +1 (234) 567‑890</a>
            <a href="https://wa.me/1234567890" className="underline">WhatsApp</a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">YourCare Home Health</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#locations" className="hover:text-primary">Locations</a>
            <a href="#insurance" className="hover:text-primary">Insurance</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-xl">
              <a href="#contact">Book a Free Assessment</a>
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Compassionate <span className="text-primary">Home Health Care</span> for Every Stage
            </h1>
            <p className="text-muted-foreground text-lg max-w-prose">
              Professional nurses, therapists, and caregivers delivering hospital‑grade care in the comfort of home.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#contact" className="inline-flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5" /> Free Assessment
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl">
                <a href="tel:+1234567890" className="inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call 24/7
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Feature icon={<Clock className="w-5 h-5" />} title="Same/Next‑Day Starts" text="Fast intake & physician coordination" />
              <Feature icon={<UserCheck className="w-5 h-5" />} title="Vetted Care Team" text="Licensed, background‑checked professionals" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img src="https://source.unsplash.com/1600x1200/?homecare,nurse,patient" alt="Nurse caring for patient at home" className="w-full h-full object-cover" loading="eager" />
            </div>
          </motion.div>
        </div>
      </section>
      <section id="services" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Comprehensive Services</h2>
              <p className="text-muted-foreground">Personalized plans tailored to your goals and preferences.</p>
            </div>
            <Button asChild variant="outline" className="rounded-xl hidden md:inline-flex">
              <a href="#contact" className="inline-flex items-center gap-2">See Care Plans <ChevronRight className="w-4 h-4" /></a>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="rounded-2xl shadow-sm">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </CardContent>
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">{s.icon}</div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Families Choose YourCare</h2>
            <p className="text-muted-foreground">
              We combine clinical excellence with genuine compassion. Our interdisciplinary team works with your physician to deliver safe, effective care right at home.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <Feature icon={<ShieldCheck className="w-5 h-5" />} title="Accredited & Compliant" text="Policies aligned to CMS & best practices" />
              <Feature icon={<MapPin className="w-5 h-5" />} title="Local & Responsive" text="Trusted in our community, fast scheduling" />
              <Feature icon={<HelpingHand className="w-5 h-5" />} title="Caregiver Support" text="Education, respite & 24/7 guidance" />
              <Feature icon={<CheckCircle2 className="w-5 h-5" />} title="Outcome‑Focused" text="Clear goals, measurable progress" />
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-md mb-6">
              <img src="https://source.unsplash.com/1000x750/?caregiver,senior,smile" alt="Caregiver with senior at home" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <Card className="rounded-3xl shadow-md">
              <CardHeader>
                <CardTitle>Clinical Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Cardiopulmonary care (CHF/COPD education & monitoring)</li>
                  <li>Diabetes management & nutrition coaching</li>
                  <li>Fall‑prevention & home safety assessments</li>
                  <li>Post‑stroke rehabilitation pathways</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="locations" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {locations.map((l) => (
              <Card key={l.city} className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {l.city}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">On‑Call: {l.onCall}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-sm text-muted-foreground">Don’t see your area? <a className="text-primary underline" href="#contact">Contact us</a> — we’re expanding.</div>
        </div>
      </section>
      <section id="insurance" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Insurance & Payment</h2>
            <p className="text-muted-foreground mb-6">We support Medicare/Medicaid, most private insurers, veterans’ benefits, and private‑pay. Our team helps verify eligibility and explains your benefits clearly.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Feature icon={<ShieldCheck className="w-5 h-5" />} title="Coverage Checks" text="Fast insurance verification" />
              <Feature icon={<Wallet className="w-5 h-5" />} title="Flexible Billing" text="Transparent, family‑friendly options" />
            </div>
          </div>
          <div>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>What You’ll Need</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Physician referral (if applicable)</p>
                <p>• Insurance details or ID</p>
                <p>• Patient history & medication list</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Families We’ve Helped</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="rounded-2xl h-full">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="text-sm font-semibold">{t.name}</div>
                    </div>
                    <p className="text-sm italic">“{t.text}”</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="faq" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <div className="divide-y rounded-2xl border">
            {faqs.map((f, i) => (
              <details key={i} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="pt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-2">Get Your Free In‑Home Assessment</h2>
            <p className="text-muted-foreground mb-6">Tell us about your needs and preferred schedule. Our intake nurse will call you shortly.</p>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow mb-6">
              <img src="https://source.unsplash.com/800x500/?clinic,building" alt="Clinic exterior" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm"><Phone className="w-4 h-4" /> 24/7 Intake: <a className="underline" href="tel:+1234567890">+1 (234) 567‑890</a></div>
              <div className="flex items-center gap-3 text-sm"><Mail className="w-4 h-4" /> Email: care@yourcarehealth.com</div>
              <div className="flex items-center gap-3 text-sm"><MapPin className="w-4 h-4" /> Office: 123 Care Ave, Suite 100</div>
            </div>
          </div>
          <Card className="rounded-3xl shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John / Jane Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <Input type="tel" placeholder="(xxx) xxx‑xxxx" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Service Needed</label>
                  <Input placeholder="e.g., Skilled Nursing, Personal Care, Hospice" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell us about your needs, diagnosis, schedule…" rows={5} />
                </div>
              </div>
              <Button className="w-full rounded-xl">Request Callback</Button>
              <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted by YourCare via phone, SMS, or email. No spam—ever.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-5 h-5 text-primary" />
              <span className="font-semibold">YourCare Home Health</span>
            </div>
            <p className="text-muted-foreground">Compassionate, clinical home care tailored to your family.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#locations" className="hover:text-primary">Locations</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Resources</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#insurance" className="hover:text-primary">Insurance</a></li>
              <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567‑890</a></li>
              <li><a href="mailto:care@yourcarehealth.com" className="hover:text-primary">care@yourcarehealth.com</a></li>
              <li>123 Care Ave, Suite 100</li>
            </ul>
          </div>
        </div>
        <div className="border-t py-4 text-xs text-center text-muted-foreground">© {new Date().getFullYear()} YourCare Home Health. All rights reserved.</div>
      </footer>
    </div>
  );
}
