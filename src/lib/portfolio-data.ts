import etlImg from "@/assets/project-etl.jpg";
import warehouseImg from "@/assets/project-warehouse.jpg";
import streamingImg from "@/assets/project-streaming.jpg";

export const profile = {
  name: "Shubham Saroj",
  initials: "SS",
  role: "Data Engineer | Software Engineer",
  headline:
    "Building scalable ETL pipelines, cloud-native data platforms, and big data solutions using Python, SQL, Apache Airflow, PySpark, AWS, and Snowflake.",
  email: "shubham.saroj@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resume: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Recognitions", href: "#recognitions" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 2.6, suffix: "+", label: "Years Experience", decimals: 1 },
  { value: 10, suffix: "M+", label: "Records Processed", decimals: 0 },
  { value: 6, suffix: "+", label: "Enterprise Projects", decimals: 0 },
  { value: 1, suffix: "", label: "AWS Certification", decimals: 0 },
];

export const about = [
  "I am a Data Engineer with 2.6+ years of professional experience designing and developing scalable ETL pipelines, data integration solutions, and cloud-based data platforms.",
  "I currently work at LTIMindtree, where I build reliable data pipelines using Python, SQL, Apache Airflow, PySpark, AWS, PostgreSQL, and Snowflake. My experience spans healthcare, hospitality, and public sector projects, including large-scale healthcare data migration initiatives.",
  "I enjoy solving complex data engineering challenges, optimizing SQL performance, automating workflows, and building scalable cloud solutions. I am continuously learning modern data engineering technologies and best practices.",
];

export const experience = [
  {
    company: "LTIMindtree",
    title: "Software Engineer (Data Engineer)",
    duration: "Present",
    points: [
      "Developed scalable ETL pipelines using Python and SQL",
      "Built automated workflows with Apache Airflow",
      "Worked on healthcare data migration projects",
      "Optimized SQL queries and data transformation performance",
      "Worked with PostgreSQL, Snowflake, AWS, and PySpark",
      "Automated enterprise data workflows",
      "Collaborated with cross-functional development teams",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering (Information Technology)",
  college: "Terna Engineering College",
  university: "Mumbai University",
  cgpa: "8.74",
};

export const certifications = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", status: "Earned" },
  { title: "SnowPro Core Certification", issuer: "Snowflake", status: "In progress" },
  { title: "Databricks Data Engineer Associate", issuer: "Databricks", status: "Planned" },
];

export const recognitions = [
  "Successfully delivered enterprise healthcare data migration projects",
  "Processed millions of production records through automated ETL pipelines",
  "Recognized for automation and performance optimization initiatives",
];

export const skillGroups = [
  { category: "Programming", items: ["Python", "SQL", "JavaScript", "Bash"] },
  {
    category: "Data Engineering",
    items: ["Apache Airflow", "PySpark", "Kafka", "Snowflake", "Databricks", "ETL Development", "DBT", "Redshift", "Data Workflow", "Data Pipelines", "Data Migration", "Data Modeling", "Apache Spark", "Hadoop"],
  },
  { category: "Cloud", items: ["AWS S3", "Amazon MWAA", "AWS Lambda", "AWS Glue", "EC2", "IAM", "Athena"] },
  { category: "Databases", items: ["PostgreSQL", "SQL Server", "MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Linux", "CI/CD", "Docker", "Shell Scripting"] },
];

export const projects = [
  {
    title: "Healthcare ETL Pipeline",
    image: etlImg,
    description:
      "End-to-end ETL pipeline ingesting clinical and claims data into a governed warehouse layer.",
    detail:
      "Idempotent batch loads, schema drift handling, and data-quality gates before publishing curated tables.",
    stack: ["Python", "SQL", "Airflow", "PostgreSQL"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Data Migration Automation",
    image: warehouseImg,
    description:
      "Automated legacy-to-cloud migration framework with reconciliation and rollback support.",
    detail:
      "Config-driven table mapping, row-count and checksum validation, and automated migration reporting.",
    stack: ["Python", "AWS Glue", "S3", "Snowflake"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Snowflake Data Warehouse",
    image: warehouseImg,
    description: "Dimensional warehouse model with incremental loads and cost-aware warehouses.",
    detail: "Star schema modelling, streams and tasks for CDC, and query performance tuning.",
    stack: ["Snowflake", "SQL", "dbt-style modelling"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Real-Time Kafka Streaming Pipeline",
    image: streamingImg,
    description: "Streaming ingestion pipeline processing events with sub-minute latency.",
    detail: "Kafka topics, PySpark structured streaming, and exactly-once sink semantics.",
    stack: ["Kafka", "PySpark", "Python", "AWS"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Airflow Workflow Automation",
    image: etlImg,
    description: "Reusable DAG factory for scheduling and monitoring enterprise data workflows.",
    detail: "Dynamic DAG generation, SLA alerting, retries with backoff, and centralized logging.",
    stack: ["Apache Airflow", "Python", "Docker"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "AWS Data Engineering Project",
    image: streamingImg,
    description: "Serverless lakehouse pipeline built entirely on managed AWS services.",
    detail: "S3 landing zones, Lambda triggers, Glue catalog crawlers, and Athena-ready partitions.",
    stack: ["AWS S3", "Lambda", "Glue", "IAM"],
    github: "https://github.com/",
    demo: "",
  },
];
