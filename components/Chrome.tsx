import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile } from "@/content/profile";
import Navigation from "./Navigation";

export function Mark() {
  return (
    <svg
      viewBox="0 0 40 40"
      width="36"
      height="36"
      fill="none"
      aria-hidden="true"
    >
      <path d="m20 3 16 9-16 9L4 12Z" stroke="currentColor" strokeWidth="2" />
      <path
        d="m4 19 16 9 16-9M4 26l16 9 16-9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m12 8.3 16 9M12 16.5l16-9"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Amir Kania, home">
      <Mark />
      <span>Amir Kania</span>
    </Link>
  );
}
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Brand />
        <Navigation />
      </div>
    </header>
  );
}
export function Socials() {
  return (
    <div className="socials">
      <a href={profile.github}>
        <Github />
        GitHub
      </a>
      <a href={profile.linkedin}>
        <Linkedin />
        LinkedIn
      </a>
    </div>
  );
}
export function ResumeLink({ className = "" }: { className?: string }) {
  return (
    <a className={className} href={profile.resumePdf || "/resume/"}>
      <FileText size={16} />
      View résumé{profile.resumePdf ? " (PDF)" : ""}
    </a>
  );
}
export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <p className="kicker">Contact</p>
            <h2>Get in touch</h2>
            <a className="email" href={`mailto:${profile.email}`}>
              <Mail size={19} />
              {profile.email}
            </a>
          </div>
          <div className="footer-links">
            <Socials />
            <ResumeLink />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Amir Kania</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
