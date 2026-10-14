import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource-variable/inter";
import "./globals.css";
import Link from "next/link";
import { profile } from "@/lib/data";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jenna Gozali | Business Analyst, Product and Project portfolio",
  description:
    "Data analyst in Kuala Lumpur moving into business analysis, product and project management. Case studies from research and requirements to delivery plans, testing and launch.",
  openGraph: {
    title: "Jenna Gozali | Business Analyst, Product and Project portfolio",
    description: "Case studies from research and requirements to delivery plans, testing and launch.",
    images: [profile.photo],
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="wrap header-inner">
            <Link href="/" className="wordmark" aria-label="Jenna Gozali, home">
              <b>Jenna</b>
              <span>Gozali</span>
            </Link>
            <nav className="site-nav" aria-label="Main">
              <Link href="/#about" className="nav-link hide-sm">About</Link>
              <Link href="/#projects" className="nav-link hide-sm">Projects</Link>
              <Link href="/#experience" className="nav-link hide-sm">Experience</Link>
              <a href={profile.cv} className="btn btn-sm" download>
                <DownloadIcon /> CV
              </a>
              <Link href="/#contact" className="btn btn-sm btn-solid">Contact</Link>
            </nav>
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="site-footer">
          <div className="wrap">
            <div className="socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
            </div>
            <p>
              © {new Date().getFullYear()} Jenna Gozali · Kuala Lumpur. Built with Next.js and deployed on Vercel.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
