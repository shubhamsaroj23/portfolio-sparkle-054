import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/header";
import { BackToTop, ScrollProgress } from "@/components/portfolio/chrome";
import { Hero } from "@/components/portfolio/hero";
import {
  About,
  Certifications,
  Education,
  Experience,
  Recognitions,
  Skills,
} from "@/components/portfolio/sections";
import { Projects } from "@/components/portfolio/projects";
import { Contact, Footer } from "@/components/portfolio/contact";
import { Toaster } from "@/components/ui/sonner";

const title = "Shubham Saroj — Data Engineer & Software Engineer";
const description =
  "Data Engineer with 2.6+ years building scalable ETL pipelines and cloud data platforms with Python, SQL, Airflow, PySpark, AWS and Snowflake.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Shubham Saroj",
          jobTitle: "Data Engineer",
          worksFor: { "@type": "Organization", name: "LTIMindtree" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Terna Engineering College" },
          knowsAbout: ["Python", "SQL", "Apache Airflow", "PySpark", "AWS", "Snowflake"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Recognitions />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </>
  );
}
