import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowUpRight, CalendarDays, Video, Activity } from 'lucide-react';

export default function Footer() {
  return <footer className="footer">
    <div className="container foot-grid">
      <div>
        <div className="logo foot-logo"><span className="logo-mark"><Activity/></span><span><b>GAURY <i>HOSPITAL</i></b><small>ORTHOPAEDIC & PAEDIATRIC CARE</small></span></div>
        <p>Orthopaedic and paediatric healthcare in Hanumangarh, Rajasthan.</p>
        <strong className="years">7 YEARS IN HEALTHCARE</strong>
        <div className="foot-consult-box">
          <Link href="/appointment" className="foot-consult-btn"><CalendarDays size={16}/> Book a consultation <ArrowUpRight size={16}/></Link>
          <Link href="/online-consultation" className="foot-online-btn"><Video size={16}/> Online consultation <ArrowUpRight size={14}/></Link>
        </div>
      </div>
      <div><h4>Hospital</h4><Link href="/about">About Gaury Hospital</Link><Link href="/doctors">Our doctors</Link><Link href="/reviews">Patient reviews</Link><Link href="/contact">Contact & directions</Link></div>
      <div><h4>Departments</h4><Link href="/orthopaedics">Orthopaedics</Link><Link href="/paediatrics">Paediatrics</Link><Link href="/appointment">Appointment enquiry</Link><Link href="/online-consultation">Online consultation</Link></div>
      <div><h4>Find the hospital</h4><p><MapPin/> Near MGM Govt. Hospital, Hanumangarh Town, Rajasthan 335513</p><p><Phone/> Contact the hospital for phone details</p><p><Clock/> Please confirm consultation timings before visiting</p><Link href="/contact" className="foot-map">Get directions <ArrowUpRight/></Link></div>
    </div>
    <div className="foot-bottom"><div className="container">© {new Date().getFullYear()} Gaury Hospital <span>Website information is general and does not replace medical advice.</span></div></div>
  </footer>;
}
