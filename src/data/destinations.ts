export interface Destination {
  id: string;
  name: string;
  code?: string;
  flag: string;
  image: string;
  iconImage: string;
  hasAmberDash?: boolean;
  description: string;
  popularCourses: string[];
  studyLevels: string[];
  topUniversities?: string[];
  intakes?: string;
  workRights?: string;
  avgTuition?: string;
  highlights?: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    iconImage: "/images/destinations/uk.png",
    description: "Home to some of the world's oldest and most prestigious universities. Experience a rich cultural heritage and excellent academic standards.",
    popularCourses: ["Business & Management", "Engineering", "Medicine & Healthcare", "Law & Finance"],
    studyLevels: ["Undergraduate", "Postgraduate", "PhD"],
    topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London", "UCL", "University of Edinburgh"],
    intakes: "September / January",
    workRights: "20 hrs/week during term; 2-year Graduate Route post-study work visa",
    avgTuition: "£14,000 - £30,000 / year",
    highlights: ["1-Year Master's Programs", "Global Recognition", "Fast-track Degrees", "Post-Study Work Visa"],
  },
  {
    id: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    iconImage: "/images/destinations/australia.png",
    description: "Known for global recognition, a relaxed lifestyle, and vibrant cities. Australia offers excellent post-study work opportunities.",
    popularCourses: ["Information Technology", "Nursing & Healthcare", "Accounting & Finance", "Hospitality"],
    studyLevels: ["Undergraduate", "Postgraduate", "Diploma"],
    topUniversities: ["University of Melbourne", "University of Sydney", "Australian National University", "UNSW Sydney", "Monash University"],
    intakes: "February / July / November",
    workRights: "48 hrs/fortnight during semester; 2-4 years Temporary Graduate Visa",
    avgTuition: "AUD $28,000 - $45,000 / year",
    highlights: ["Group of Eight Universities", "PR Pathways Available", "High Quality of Life", "Extended Work Rights"],
  },
  {
    id: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop",
    iconImage: "/images/destinations/canada.png",
    description: "A welcoming and diverse environment with high-quality education and clear pathways to permanent residency.",
    popularCourses: ["Computer Science", "Business Management", "Engineering", "Health Sciences"],
    studyLevels: ["Undergraduate", "Postgraduate", "Diploma"],
    topUniversities: ["University of Toronto", "McGill University", "University of British Columbia", "University of Waterloo", "McMaster University"],
    intakes: "September (Fall) / January (Winter) / May",
    workRights: "24 hrs/week off-campus; up to 3-year Post-Graduation Work Permit (PGWP)",
    avgTuition: "CAD $20,000 - $38,000 / year",
    highlights: ["Direct PR Immigration Streams", "Co-op Work Placements", "Affordable Living Standards", "Multicultural Society"],
  },
  {
    id: "europe",
    name: "Europe",
    code: "EU",
    flag: "🇪🇺",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    iconImage: "/images/destinations/europe.png",
    hasAmberDash: true,
    description: "Study across top universities in multiple countries with diverse cultures, languages, and career opportunities.",
    popularCourses: ["Architecture & Design", "Renewable Energy", "International Business", "Humanities"],
    studyLevels: ["Undergraduate", "Postgraduate", "PhD"],
    topUniversities: ["ETH Zurich (Switzerland)", "TU Munich (Germany)", "Sorbonne University (France)", "KU Leuven (Belgium)", "Karolinska Institute"],
    intakes: "September / October / February",
    workRights: "Part-time work permitted; Schengen travel across 29 European countries",
    avgTuition: "€1,500 - €16,000 / year (Many public universities offer low/no tuition)",
    highlights: ["Tuition-free / Low Tuition Options", "Schengen Visa Mobility", "English-Taught Programs", "European Tech Hubs"],
  },
  {
    id: "japan",
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    iconImage: "/images/destinations/japan.png",
    hasAmberDash: true,
    description: "A unique blend of tradition and innovation with world-renowned universities and advanced technology.",
    popularCourses: ["Robotics & AI", "Automotive Engineering", "Animation & Digital Arts", "Business"],
    studyLevels: ["Undergraduate", "Postgraduate", "Language Courses"],
    topUniversities: ["University of Tokyo", "Kyoto University", "Osaka University", "Tohoku University", "Tokyo Institute of Technology"],
    intakes: "April (Spring) / October (Autumn)",
    workRights: "Up to 28 hrs/week with permit; designated activities visa for job hunting",
    avgTuition: "¥600,000 - ¥1,200,000 / year",
    highlights: ["MEXT Government Scholarships", "High Tech & Robotics Leader", "Very Safe Living Environment", "Expanding English Programs"],
  },
  {
    id: "asia",
    name: "Asia",
    code: "",
    flag: "🌏",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop",
    iconImage: "/images/destinations/asia.png",
    hasAmberDash: true,
    description: "Discover emerging opportunities across Asia's dynamic economies with world-class education and global career prospects.",
    popularCourses: ["Finance & Fintech", "Global Supply Chain", "Biomedical Sciences", "Business"],
    studyLevels: ["Undergraduate", "Postgraduate", "PhD"],
    topUniversities: ["National University of Singapore (NUS)", "Nanyang Technological University (NTU)", "HKU (Hong Kong)", "Universiti Malaya"],
    intakes: "August / January / September",
    workRights: "Varies by country; Singapore & Malaysia offer structured intern & graduate passes",
    avgTuition: "$8,000 - $24,000 / year",
    highlights: ["Global Financial Hubs", "Close to Home & Affordable", "Top 15 Global Universities", "Booming Tech & Fintech Sector"],
  },
];

