import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata={title:'Gaury Hospital | Orthopaedic & Paediatric Hospital',description:'Gaury Hospital, near MGM Govt Hospital, Hanumangarh, Rajasthan 335513.'};
export default function RootLayout({children}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
