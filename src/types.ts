export interface SiteData {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  favicon: string;
  language: string;
  noIndex: boolean;
}

export interface PersonData {
  name: string;
  firstName: string;
  role: string;
  personType: string;
  tagline: string;
  headline: string;
  shortBio: string;
  location: string;
  profileImage: string;
  availability: string;
  pronouns: string;
}

export interface CTA {
  label: string;
  url: string;
}

export interface HeroData {
  enabled: boolean;
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  showImage: boolean;
  showSocials: boolean;
  showAvailability: boolean;
}

export interface AboutData {
  enabled: boolean;
  sectionTitle: string;
  paragraphs: string[];
  highlights: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsData {
  enabled: boolean;
  items: StatItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  link: string;
  location: string;
  current: boolean;
}

export interface ExperienceData {
  enabled: boolean;
  sectionTitle: string;
  items: ExperienceItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  featured: boolean;
}

export interface ProjectsData {
  enabled: boolean;
  sectionTitle: string;
  items: ProjectItem[];
}

export interface ProductItem {
  name: string;
  description: string;
  image: string;
  url: string;
  status: string;
  tags: string[];
}

export interface ProductsData {
  enabled: boolean;
  sectionTitle: string;
  description: string;
  items: ProductItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface ServicesData {
  enabled: boolean;
  sectionTitle: string;
  description: string;
  items: ServiceItem[];
}

export interface WritingItem {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
  publication: string;
}

export interface WritingData {
  enabled: boolean;
  sectionTitle: string;
  items: WritingItem[];
}

export interface AchievementItem {
  title: string;
  description: string;
  icon: string;
  value: string;
}

export interface AchievementsData {
  enabled: boolean;
  sectionTitle: string;
  items: AchievementItem[];
}

export interface ThesisItem {
  title: string;
  description: string;
}

export interface PortfolioItem {
  name: string;
  description: string;
  logo: string;
  url: string;
}

export interface InvestmentData {
  enabled: boolean;
  sectionTitle: string;
  headline: string;
  description: string;
  thesis: ThesisItem[];
  portfolio: PortfolioItem[];
}

export interface CaseStudyItem {
  title: string;
  description: string;
  result: string;
  image: string;
  link: string;
  tags: string[];
}

export interface CaseStudiesData {
  enabled: boolean;
  sectionTitle: string;
  items: CaseStudyItem[];
}

export interface SkillsData {
  enabled: boolean;
  sectionTitle: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  logo: string;
  link: string;
}

export interface EducationData {
  enabled: boolean;
  sectionTitle: string;
  items: EducationItem[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  link: string;
}

export interface TestimonialsData {
  enabled: boolean;
  sectionTitle: string;
  items: TestimonialItem[];
}

export interface LogoItem {
  name: string;
  image: string;
  url: string;
}

export interface SocialProofData {
  enabled: boolean;
  title: string;
  logos: LogoItem[];
}

export interface NewsletterData {
  enabled: boolean;
  sectionTitle: string;
  description: string;
  placeholder: string;
  actionUrl: string;
  buttonLabel: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  enabled: boolean;
  sectionTitle: string;
  items: FAQItem[];
}

export interface ContactData {
  enabled: boolean;
  sectionTitle: string;
  headline: string;
  description: string;
  email: string;
  ctaLabel: string;
}

export interface SocialsData {
  linkedin: string;
  twitter: string;
  github: string;
  instagram: string;
  youtube: string;
  threads: string;
  substack: string;
  website: string;
  email: string;
}

export interface NavItem {
  label: string;
  target: string;
}

export interface NavigationData {
  enabled: boolean;
  items: NavItem[];
}

export interface FooterData {
  text: string;
  copyright: string;
  showSocials: boolean;
}

export interface ThemeData {
  accentColor: string;
  accentColorSecondary: string;
  font: string;
  defaultMode: 'light' | 'dark';
  darkMode: boolean;
  borderRadius: 'none' | 'medium' | 'large' | 'full';
}

export interface FeaturesData {
  animations: boolean;
  scrollReveal: boolean;
  darkMode: boolean;
  showScrollProgress: boolean;
  backToTop: boolean;
}

export interface PortfolioConfig {
  site: SiteData;
  person: PersonData;
  hero: HeroData;
  about: AboutData;
  stats: StatsData;
  experience: ExperienceData;
  projects: ProjectsData;
  products: ProductsData;
  services: ServicesData;
  writing: WritingData;
  achievements: AchievementsData;
  investment: InvestmentData;
  caseStudies: CaseStudiesData;
  skills: SkillsData;
  education: EducationData;
  testimonials: TestimonialsData;
  socialProof: SocialProofData;
  newsletter: NewsletterData;
  faq: FAQData;
  contact: ContactData;
  socials: SocialsData;
  navigation: NavigationData;
  footer: FooterData;
  theme: ThemeData;
  features: FeaturesData;
}
