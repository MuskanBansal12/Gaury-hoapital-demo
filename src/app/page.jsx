'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  Activity, ArrowRight, ArrowUpRight, Bone, Baby, Bandage, Stethoscope,
  Footprints, ShieldCheck, CalendarDays, MapPin, Phone, Clock3, Video,
  ChevronDown, MoveUpRight, HeartPulse, ClipboardList, Dumbbell, X,
  ScanLine, CheckCircle2, Navigation, MessageCircle, Sparkles
} from 'lucide-react';
import ReviewCarousel from '@/components/ReviewCarousel';

const gallery = [
  { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1500&q=88', alt: 'Hospital reception and care space', label: 'A welcoming first visit', type: 'THE HOSPITAL' },
  { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1100&q=88', alt: 'Doctor speaking with a patient', label: 'Time to understand', type: 'PATIENT CARE' },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=88', alt: 'Healthcare professional at work', label: 'Care conversations', type: 'OUR APPROACH' },
  { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1300&q=88', alt: 'Parent with a young child', label: 'Care for growing families', type: 'PAEDIATRICS' },
];
const concerns = [
  { title: 'Knee & joint pain', text: 'Pain, stiffness or difficulty with everyday movement? Learn what to discuss during an orthopaedic assessment.', icon: Bone, tag: 'JOINTS' },
  { title: 'Fractures & injuries', text: 'Find out what details and previous reports can help when you contact the hospital after an injury.', icon: Bandage, tag: 'INJURY' },
  { title: 'Back & spine concerns', text: 'Explore common back and spine concerns and prepare questions for your consultation.', icon: ScanLine, tag: 'SPINE' },
  { title: 'Mobility & recovery', text: 'Talk to the hospital team about movement, mobility and recovery-related questions.', icon: Footprints, tag: 'MOVEMENT' },
];
const childCare = [
  ['Growth & development', 'Questions about milestones, nutrition and development.', Baby],
  ['Fever & common illness', 'Know when to contact a paediatric professional.', Activity],
  ['Everyday child wellness', 'General health questions and routine care guidance.', HeartPulse],
];
const visitSteps = [
  ['01', 'Tell us what you need', 'Choose an appointment enquiry or online consultation and share the reason for your visit.', ClipboardList],
  ['02', 'Speak with the hospital', 'The hospital team can help confirm the appropriate department and available timings.', Phone],
  ['03', 'Prepare your reports', 'Keep previous prescriptions, scans, reports and current medication details handy.', FileIcon],
  ['04', 'Plan your visit', 'Find the hospital near MGM Government Hospital, Hanumangarh Town.', MapPin],
];
function FileIcon(props) { return <CheckCircle2 {...props}/>; }
const faqs = [
  ['Where is Gaury Hospital?', 'Gaury Hospital is near MGM Government Hospital, Hanumangarh Town, Hanumangarh, Rajasthan 335513.'],
  ['How can I request an appointment?', 'Use the appointment enquiry page or contact the hospital directly. The team can confirm availability and timings.'],
  ['Are online consultations available?', 'Yes. You can send an online consultation enquiry through the dedicated page. The hospital team will confirm the process and availability.'],
  ['What should I bring for my consultation?', 'Bring previous prescriptions, investigation reports, X-rays or scans, and a list of current medicines if available.'],
];

export default function Home() {
  const [activeConcern, setActiveConcern] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  return <>
    <div className="gh-ticker" aria-label="Hospital information"><div className="gh-ticker-track">{Array.from({length:2}).map((_,i)=><span key={i}>GAURY HOSPITAL <b>✳</b> ORTHOPAEDIC CARE <b>✳</b> PAEDIATRIC CARE <b>✳</b> 7 YEARS IN HEALTHCARE <b>✳</b> HANUMANGARH, RAJASTHAN <b>✳</b> ONLINE CONSULTATION ENQUIRIES <b>✳</b></span>)}</div></div>

    <section className="gh-hero">
      <div className="gh-hero-grain"/>
      <div className="gh-hero-orbit orbit-a"/><div className="gh-hero-orbit orbit-b"/>
      <div className="gh-wrap gh-hero-grid">
        <div className="gh-hero-copy">
          <div className="gh-eyebrow gh-eyebrow-light"><i/> ORTHOPAEDIC & PAEDIATRIC HOSPITAL <span>·</span> HANUMANGARH</div>
          <h1><span>GAURY</span><em>HOSPITAL</em></h1>
          <div className="gh-hero-rule"><span/> <b>CARE THAT KEEPS YOU MOVING.</b></div>
          <p className="gh-hero-lead">Orthopaedic and paediatric care for every stage of life.</p>
          <p className="gh-hero-desc">From bones, joints and mobility to the health of growing children — find the right information and connect with our hospital team.</p>
          <div className="gh-hero-actions"><Link href="/appointment" className="gh-btn gh-btn-gold">Book an appointment <ArrowUpRight/></Link><Link href="/online-consultation" className="gh-btn gh-btn-glass"><Video/> Online consultation</Link></div>
          <div className="gh-hero-meta"><span><MapPin/> Near MGM Govt. Hospital, Hanumangarh</span><span><Activity/> 7 years in healthcare</span></div>
        </div>
        <div className="gh-hero-art">
          <div className="gh-hero-photo gh-photo-main"><img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1300&q=90" alt="Healthcare professional in a clinical setting"/><span className="gh-photo-shade"/><b>ORTHOPAEDIC<br/>CARE</b></div>
          <div className="gh-hero-photo gh-photo-child"><img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=88" alt="Parent caring for a young child"/><span>PAEDIATRIC<br/>CARE</span></div>
          <div className="gh-hero-seal"><span>7</span><small>YEARS IN<br/>HEALTHCARE</small><i>✳</i></div>
          <div className="gh-hero-side">BONE · JOINT · CHILD HEALTH</div>
        </div>
      </div>
      <div className="gh-hero-bottom"><span>01 / SPECIALIST DEPARTMENTS</span><span>ORTHOPAEDICS + PAEDIATRICS</span><span>HANUMANGARH · RAJASTHAN</span></div>
    </section>

    <section className="gh-quickbar"><div className="gh-wrap gh-quick-grid">
      <Link href="/appointment"><span className="gh-quick-icon"><CalendarDays/></span><span><b>Book a visit</b><small>Appointment enquiry</small></span><ArrowUpRight/></Link>
      <Link href="/orthopaedics"><span className="gh-quick-icon"><Bone/></span><span><b>Orthopaedics</b><small>Bones, joints & movement</small></span><ArrowUpRight/></Link>
      <Link href="/paediatrics"><span className="gh-quick-icon"><Baby/></span><span><b>Paediatrics</b><small>Care for growing children</small></span><ArrowUpRight/></Link>
      <Link href="/contact"><span className="gh-quick-icon"><Navigation/></span><span><b>Find us</b><small>Hanumangarh Town</small></span><ArrowUpRight/></Link>
    </div></section>

    <section className="gh-specialties gh-section">
      <div className="gh-wrap">
        <div className="gh-section-head"><div><span className="gh-eyebrow gh-eyebrow-wine">TWO SPECIALITIES · ONE HOSPITAL</span><h2>Care for the way<br/><i>life moves.</i></h2></div><p>Explore the departments at Gaury Hospital and find information to help you take the next step with confidence.</p></div>
        <div className="gh-dept-grid">
          <Link href="/orthopaedics" className="gh-dept-card gh-dept-ortho"><div className="gh-dept-image"><img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=88" alt="Orthopaedic healthcare professional"/><span>01 / ORTHOPAEDICS</span></div><div className="gh-dept-copy"><div className="gh-dept-icon"><Bone/></div><h3>Bones. Joints.<br/><i>Better movement.</i></h3><p>Information on joint pain, fractures, back and spine concerns, mobility and orthopaedic consultations.</p><div className="gh-dept-link">EXPLORE ORTHOPAEDICS <span><ArrowUpRight/></span></div></div><div className="gh-dept-index">ORTHO</div></Link>
          <Link href="/paediatrics" className="gh-dept-card gh-dept-paed"><div className="gh-dept-image"><img src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=1200&q=88" alt="Child with parent"/><span>02 / PAEDIATRICS</span></div><div className="gh-dept-copy"><div className="gh-dept-icon"><Baby/></div><h3>Little people.<br/><i>Big milestones.</i></h3><p>Helpful information for parents on child wellness, growth, development and common childhood concerns.</p><div className="gh-dept-link">EXPLORE PAEDIATRICS <span><ArrowUpRight/></span></div></div><div className="gh-dept-index">CHILD</div></Link>
        </div>
      </div>
    </section>

    <section className="gh-ortho-tool">
      <div className="gh-wrap gh-ortho-layout"><div className="gh-ortho-intro"><span className="gh-eyebrow gh-eyebrow-light">ORTHOPAEDIC PATIENT GUIDE</span><h2>What brings<br/><i>you here today?</i></h2><p>Choose a concern to explore useful information before contacting the hospital. This guide is for general information and does not replace a medical assessment.</p><Link href="/orthopaedics" className="gh-text-link gh-link-light">View orthopaedic department <ArrowUpRight/></Link><div className="gh-ortho-decoration"><Activity/><span>MOVE<br/>FORWARD</span></div></div>
        <div className="gh-concern-panel"><div className="gh-concern-tabs">{concerns.map((item,i)=><button key={item.title} className={activeConcern===i?'active':''} onClick={()=>setActiveConcern(i)}><small>0{i+1}</small><item.icon/><b>{item.title}</b><ArrowUpRight/></button>)}</div><div className="gh-concern-content" key={activeConcern}><span className="gh-concern-tag">{concerns[activeConcern].tag} / PATIENT INFORMATION</span><div className="gh-concern-graphic"><div className="gh-pulse-ring"/><div className="gh-pulse-ring ring-two"/><div className="gh-pulse-icon"><Activity/></div><span>+</span></div><h3>{concerns[activeConcern].title}</h3><p>{concerns[activeConcern].text}</p><Link href="/appointment" className="gh-concern-cta">ASK ABOUT AN APPOINTMENT <ArrowUpRight/></Link></div></div>
      </div>
    </section>

    <section className="gh-child-section"><div className="gh-child-image"><img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1300&q=88" alt="Parent holding a child"/><div className="gh-child-image-note">CARE FOR<br/><b>EVERY LITTLE<br/>MILESTONE</b></div></div><div className="gh-child-copy"><span className="gh-eyebrow gh-eyebrow-wine">PAEDIATRIC PATIENT & PARENT GUIDE</span><h2>Growing up<br/><i>needs good care.</i></h2><p>Every child is different. Explore common topics parents may want to discuss with a paediatric healthcare professional.</p><div className="gh-child-topics">{childCare.map(([title,desc,Icon],i)=><Link href="/paediatrics" key={title}><span>0{i+1}</span><Icon/><div><b>{title}</b><small>{desc}</small></div><ArrowUpRight/></Link>)}</div><Link href="/paediatrics" className="gh-btn gh-btn-wine">Explore paediatrics <ArrowUpRight/></Link></div></section>

    <section className="gh-online"><div className="gh-wrap gh-online-inner"><div className="gh-online-graphic"><div className="gh-online-ring"><Video/></div><span>CARE<br/>CONNECTED</span><i>✳</i></div><div className="gh-online-copy"><span className="gh-eyebrow gh-eyebrow-wine">CARE, WHERE YOU ARE</span><h2>Can't visit today?<br/><i>Connect online.</i></h2><p>Online consultation enquiries are also available. Send your details to the hospital team to ask about the process and available timings.</p><div className="gh-online-tags"><span><CheckCircle2/> Online enquiry</span><span><Clock3/> Timing confirmation</span><span><MessageCircle/> Hospital follow-up</span></div></div><div className="gh-online-action"><small>ONLINE CONSULTATION</small><b>Speak to our team about a remote consultation.</b><Link href="/online-consultation" className="gh-btn gh-btn-wine">Start online enquiry <ArrowUpRight/></Link><span>Availability is confirmed by the hospital.</span></div></div></section>

    <section className="gh-gallery gh-section"><div className="gh-wrap"><div className="gh-section-head"><div><span className="gh-eyebrow gh-eyebrow-wine">A CLOSER LOOK AT GAURY</span><h2>A place for<br/><i>care & connection.</i></h2></div><div className="gh-gallery-aside"><p>Explore the spaces and moments that shape a hospital visit. Gallery images are illustrative placeholders until replaced with actual Gaury Hospital photographs.</p><Link href="/contact" className="gh-text-link">Find the hospital <ArrowUpRight/></Link></div></div><div className="gh-gallery-grid">{gallery.map((photo,i)=><button key={photo.src} className={`gh-gallery-card gh-gallery-${i+1}`} onClick={()=>setLightbox(photo)}><img src={photo.src} alt={photo.alt}/><span className="gh-gallery-shade"/><small>0{i+1} / 04 · {photo.type}</small><b>{photo.label}</b><i><MoveUpRight/></i></button>)}</div><div className="gh-gallery-foot"><span>GAURY HOSPITAL · HANUMANGARH</span><span>HOVER OR TAP TO EXPLORE <ArrowUpRight/></span></div></div></section>
    {lightbox && <div className="gh-lightbox" role="dialog" aria-modal="true" onClick={()=>setLightbox(null)}><button onClick={()=>setLightbox(null)} aria-label="Close image"><X/></button><img src={lightbox.src} alt={lightbox.alt} onClick={e=>e.stopPropagation()}/><b>{lightbox.label}</b></div>}

    <section className="gh-patient-journey"><div className="gh-wrap"><div className="gh-section-head gh-journey-head"><div><span className="gh-eyebrow gh-eyebrow-light">A SIMPLE GUIDE FOR PATIENTS</span><h2>Know what to do<br/><i>before you arrive.</i></h2></div><p>From your first enquiry to planning your visit, here's a simple guide to help you prepare.</p></div><div className="gh-journey-grid"><div className="gh-journey-tabs">{visitSteps.map(([n,title,desc,Icon],i)=><button key={n} className={activeStep===i?'active':''} onClick={()=>setActiveStep(i)}><span>{n}</span><b>{title}</b><ArrowUpRight/></button>)}</div><div className="gh-journey-detail" key={activeStep}><div className="gh-journey-number">{visitSteps[activeStep][0]}</div>{(()=>{const Icon=visitSteps[activeStep][3];return <Icon className="gh-journey-icon"/>})()}<h3>{visitSteps[activeStep][1]}</h3><p>{visitSteps[activeStep][2]}</p><Link href={activeStep===0?'/appointment':activeStep===1?'/contact':activeStep===2?'/appointment':'/contact'} className="gh-text-link gh-link-light">{activeStep===3?'View directions':'Continue'} <ArrowUpRight/></Link></div></div></div></section>

    <section className="gh-reviews gh-section"><div className="gh-wrap gh-reviews-grid"><div className="gh-reviews-intro"><span className="gh-eyebrow gh-eyebrow-wine">PATIENT EXPERIENCES</span><h2>Every visit<br/><i>is personal.</i></h2><p>Patient and family feedback can help others understand what to expect. The examples shown here are placeholders and must be replaced with genuine, approved reviews.</p><Link href="/reviews" className="gh-text-link">See patient reviews <ArrowUpRight/></Link><div className="gh-review-stamp"><span>✳</span><b>YOUR<br/>EXPERIENCE<br/>MATTERS</b></div></div><div className="gh-review-card-wrap"><div className="gh-review-topline"><span>WHAT PATIENTS SAY</span><span>GAURY HOSPITAL · HANUMANGARH</span></div><ReviewCarousel/></div></div></section>

    <section className="gh-faq gh-section"><div className="gh-wrap gh-faq-grid"><div><span className="gh-eyebrow gh-eyebrow-wine">PATIENT INFORMATION</span><h2>Good to know<br/><i>before you go.</i></h2><p>Quick answers to common questions about appointments, online enquiries and visiting the hospital.</p><Link href="/contact" className="gh-btn gh-btn-wine">Contact the hospital <ArrowUpRight/></Link></div><div className="gh-faq-list">{faqs.map(([q,a],i)=><article key={q} className={faqOpen===i?'active':''}><button onClick={()=>setFaqOpen(faqOpen===i?-1:i)}><span>0{i+1}</span><b>{q}</b><ChevronDown/></button>{faqOpen===i&&<p>{a}</p>}</article>)}</div></div></section>

    <section className="gh-final-cta"><div className="gh-wrap gh-final-inner"><div><span className="gh-eyebrow gh-eyebrow-light">GAURY HOSPITAL · HANUMANGARH</span><h2>Take the next step<br/><i>towards better care.</i></h2><p>For orthopaedic or paediatric enquiries, our hospital team is here to help you plan your visit.</p></div><div className="gh-final-actions"><Link href="/appointment" className="gh-btn gh-btn-gold">Book an appointment <ArrowUpRight/></Link><Link href="/online-consultation" className="gh-btn gh-btn-outline">Online consultation <Video/></Link><Link href="/contact" className="gh-final-phone"><Phone/> Contact & directions <ArrowUpRight/></Link></div></div><div className="gh-final-watermark">GAURY</div></section>
  </>;
}
