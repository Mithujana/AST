import { Compass, GraduationCap, FileCheck, Plane, Home, ShieldCheck } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle?: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: any;
  number: string;
  category: string;
  badge: string;
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  deliverables: string[];
  stats: { value: string; label: string }[];
  accent: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "expert-counselling",
    title: "Expert Counselling",
    shortTitle: "Counselling",
    tagline: "Strategic 1-on-1 academic mentoring tailored to your aspirations and career ambitions.",
    description: "Personalized guidance to help students choose the right pathway aligned with their career goals and academic background.",
    longDescription: "Our certified educational counsellors conduct a holistic 360-degree assessment of your academic transcript, financial plan, career aspirations, and personal preferences. We formulate a tailored roadmap designed to maximize your career prospects and post-study opportunities globally.",
    icon: Compass,
    number: "01",
    category: "Academic Strategy",
    badge: "100% Free Initial Assessment",
    benefits: [
      {
        title: "Holistic Profile Audit",
        desc: "Thorough assessment of your GPA, standardized test scores, work history, and extracurricular strengths."
      },
      {
        title: "Career Trajectory Alignment",
        desc: "Mapping degree choices directly to high-demand skills and post-study employment prospects worldwide."
      },
      {
        title: "Financial & Scholarship Planning",
        desc: "Practical budgeting covering tuition, cost of living, and early identification of merit scholarship grants."
      },
      {
        title: "Multi-Country Feasibility",
        desc: "Unbiased comparison between the UK, Australia, Canada, Europe, and Asia based on your immigration & career targets."
      }
    ],
    process: [
      { step: "01", title: "Discovery Session", desc: "Detailed interview assessing academic background, passion, and personal priorities." },
      { step: "02", title: "Profile Evaluation", desc: "Our advisory board scores your admission competitiveness and potential gap areas." },
      { step: "03", title: "Career Mapping", desc: "Matching target degree options against emerging global market employment trends." },
      { step: "04", title: "Action Blueprint", desc: "A clear timeline with milestones for testing, applications, and visa deadlines." }
    ],
    deliverables: [
      "Custom Study Abroad Roadmap PDF",
      "Financial Budget & Living Cost Projections",
      "Curated Country Feasibility Scorecard",
      "Direct Line to Your Dedicated Senior Counselor"
    ],
    stats: [
      { value: "1,500+", label: "Students Mentored" },
      { value: "100%", label: "Free 1-on-1 Session" },
      { value: "48h", label: "Profile Audit Turnaround" }
    ],
    accent: "from-blue-600 to-indigo-700"
  },
  {
    id: "university-selection",
    title: "University Selection",
    shortTitle: "University Match",
    tagline: "Data-driven matching with world-ranked universities and high-acceptance programs.",
    description: "Find universities and programs that perfectly match your academic goals, budget, and location preferences.",
    longDescription: "Navigating thousands of global higher education institutions can be overwhelming. AST leverages direct institutional partnerships across the UK, Australia, Canada, and Europe to shortlist aspirational, target, and safe universities optimized for admission success and scholarship potential.",
    icon: GraduationCap,
    number: "02",
    category: "Admissions Architecture",
    badge: "300+ Partner Universities",
    benefits: [
      {
        title: "Three-Tier Strategic Shortlist",
        desc: "Balanced portfolio dividing choices into Dream, Target, and Guaranteed Safety universities."
      },
      {
        title: "Scholarship Maximization",
        desc: "Targeting institutions with active bursaries, departmental awards, and tuition discount schemes."
      },
      {
        title: "Course Accreditation & Employability",
        desc: "Ensuring programs carry professional certifications (AACSB, ABET, RICS) and post-study work rights."
      },
      {
        title: "Fast-Track Application Processing",
        desc: "Direct liaison with university admission officers for swift conditional offer letter turnarounds."
      }
    ],
    process: [
      { step: "01", title: "Requirement Matrix", desc: "Filtering by international rankings (QS/THE), tuition cap, city, and lifestyle." },
      { step: "02", title: "Course Comparison", desc: "Deep dive into module structures, industrial internships (co-op), and faculty." },
      { step: "03", title: "Document Review", desc: "Refining transcripts, academic references, and Statements of Purpose (SOP)." },
      { step: "04", title: "Offer Negotiation", desc: "Accepting offers, meeting conditional prerequisites, and locking your university seat." }
    ],
    deliverables: [
      "Personalized 6-University Comparison Dossier",
      "Active Scholarship Eligibility Matrix",
      "Standardized Document Checklist",
      "Direct Application Tracking Portal"
    ],
    stats: [
      { value: "300+", label: "Partner Universities" },
      { value: "98%", label: "Offer Acceptance Rate" },
      { value: "$1.2M+", label: "Scholarships Secured" }
    ],
    accent: "from-amber-500 to-orange-600"
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    shortTitle: "Visa Guidance",
    tagline: "Flawless filing, certified financial audits, and rigorous 1-on-1 interview simulations.",
    description: "Professional support throughout the complex student visa application process to maximize your chances of approval.",
    longDescription: "Student visa regulations are stringent and continuously updated by immigration authorities. Our certified visa compliance specialists run rigorous multi-layer audits on your financial proof, refine Statements of Purpose to prove Genuine Student criteria, and host realistic mock interview drills.",
    icon: FileCheck,
    number: "03",
    category: "Visa & Compliance",
    badge: "99.2% Visa Approval Rate",
    benefits: [
      {
        title: "Strict Document Compliance Audit",
        desc: "Zero-defect verification preventing formatting errors or omissions that trigger visa refusals."
      },
      {
        title: "Genuine Student (GS/GTE) SOP Coaching",
        desc: "Drafting bulletproof intent letters demonstrating ties to your home country and clear study rationale."
      },
      {
        title: "Financial Solvency Verification",
        desc: "Ensuring sponsor letters, bank statements, education loans, and tax records meet strict immigration laws."
      },
      {
        title: "Simulated Visa Mock Drills",
        desc: "Interactive roleplay sessions covering tricky embassy questions so you speak with total confidence."
      }
    ],
    process: [
      { step: "01", title: "Audit & Checklist", desc: "Comprehensive checklist customized to your specific target country and embassy rules." },
      { step: "02", title: "Financial Verification", desc: "Reviewing funding proof, bank affidavits, and sponsor documentation." },
      { step: "03", title: "Mock Interview Drill", desc: "Live 1-on-1 simulated interviews with immediate feedback and scoring." },
      { step: "04", title: "Official Lodgement", desc: "Accurate filing of visa forms, biometrics scheduling, and real-time tracking." }
    ],
    deliverables: [
      "Complete Visa Documentation Portfolio",
      "Vetted & Polished Genuine Student Statement",
      "Financial Solvency Proof Dossier",
      "Mock Embassy Interview Evaluation Report"
    ],
    stats: [
      { value: "99.2%", label: "Visa Approval Rate" },
      { value: "2,000+", label: "Visas Granted" },
      { value: "1-on-1", label: "Mock Interview Prep" }
    ],
    accent: "from-blue-700 to-cyan-600"
  },
  {
    id: "travel-support",
    title: "Travel Support",
    shortTitle: "Travel & Transit",
    tagline: "Stress-free itineraries, student baggage perks, and international transit coordination.",
    description: "Comprehensive assistance with flight bookings, travel planning, and international departure coordination.",
    longDescription: "Once your visa is secured, your physical journey begins. We help you obtain student-discounted airline fares, claim extra 40kg+ baggage allowances, coordinate transit visas, and arrange airport pickups so you arrive at your destination refreshed and stress-free.",
    icon: Plane,
    number: "04",
    category: "International Logistics",
    badge: "Exclusive Student Baggage Perks",
    benefits: [
      {
        title: "Special Student Airfare Rates",
        desc: "Access to discounted student flight fares through our global airline and travel partners."
      },
      {
        title: "Extra Baggage Allowances",
        desc: "Securing student privileges of up to 40kg to 45kg checked luggage without steep excess penalties."
      },
      {
        title: "Optimal Route & Transit Planning",
        desc: "Carefully planned layovers avoiding high-risk transit hubs and complex transit visa requirements."
      },
      {
        title: "Airport Welcome & Transfer",
        desc: "Coordinating university airport welcome shuttles or trusted private pickups direct to your room."
      }
    ],
    process: [
      { step: "01", title: "Schedule Alignment", desc: "Synchronizing flight arrival dates with university orientation week schedules." },
      { step: "02", title: "Fare & Perk Sourcing", desc: "Finding premier flight deals with maximum student baggage concessions." },
      { step: "03", title: "Transit Compliance", desc: "Clarifying customs regulations, restricted baggage items, and health declarations." },
      { step: "04", title: "Departure Kit", desc: "Emergency contact cards, boarding passes, and destination terminal maps." }
    ],
    deliverables: [
      "Discounted Student Airline Itinerary",
      "Official Baggage Concession Endorsement",
      "Airport Welcome & Transfer Voucher",
      "International Departure Day Checklist"
    ],
    stats: [
      { value: "40kg+", label: "Baggage Concessions" },
      { value: "24/7", label: "Transit Support Line" },
      { value: "100%", label: "Stress-Free Journey" }
    ],
    accent: "from-emerald-600 to-teal-700"
  },
  {
    id: "accommodation",
    title: "Accommodation Guidance",
    shortTitle: "Housing & Living",
    tagline: "Safe, verified, and budget-conscious student residences near your campus.",
    description: "Help finding safe, comfortable, and budget-friendly student accommodation near your chosen university.",
    longDescription: "Securing a safe, welcoming, and cost-effective home in a new country is fundamental to thriving academically. AST partners with verified university halls and premier Purpose-Built Student Accommodation (PBSA) providers worldwide to offer fully furnished spaces with all bills included.",
    icon: Home,
    number: "05",
    category: "Living & Settlement",
    badge: "100% Verified Housing",
    benefits: [
      {
        title: "On-Campus & PBSA Priority Access",
        desc: "Direct allocations for on-campus student halls and private studios before public waitlists open."
      },
      {
        title: "All-Inclusive Utility Bills",
        desc: "Zero surprise costs—heating, electricity, high-speed Wi-Fi, and water bundled into one flat rate."
      },
      {
        title: "Prime Campus Proximity",
        desc: "Options situated within walking distance or immediate proximity to rapid campus transit lines."
      },
      {
        title: "Transparent, Vetted Tenancy Agreements",
        desc: "Rigorous legal lease checks protecting students from scams, hidden fees, and unfair deposit rules."
      }
    ],
    process: [
      { step: "01", title: "Preferences & Budget", desc: "Defining room type (studio, en-suite, shared), lifestyle preferences, and commute limits." },
      { step: "02", title: "Verified Shortlisting", desc: "Presenting 3-4 inspected options with 3D virtual walkthroughs and neighborhood safety stats." },
      { step: "03", title: "Contract Review", desc: "Reviewing tenancy terms, guarantor requirements, and student cancellation policies." },
      { step: "04", title: "Key Handover Protocol", desc: "Scheduling arrival check-in with residence managers for a frictionless move-in day." }
    ],
    deliverables: [
      "Inspected Accommodation Options Sheet",
      "Signed Tenancy Agreement & Deposit Receipt",
      "Local Transit Pass & Neighborhood Guide",
      "Move-in Essentials & Packing List"
    ],
    stats: [
      { value: "100%", label: "Verified Safe Residences" },
      { value: "$0", label: "Hidden Utility Charges" },
      { value: "<15m", label: "Avg. Commute to Class" }
    ],
    accent: "from-purple-600 to-indigo-700"
  },
  {
    id: "pre-departure",
    title: "Pre-Departure Support",
    shortTitle: "Pre-Departure",
    tagline: "Total cultural, financial, and academic readiness before stepping on the plane.",
    description: "Complete briefing and guidance before you begin your journey, covering culture, banking, and essential tips.",
    longDescription: "Venturing abroad is an exhilarating milestone. Our interactive pre-departure briefings prepare you and your family for every facet of life overseas—from setting up zero-fee student bank accounts and international SIMs to understanding classroom etiquette, healthcare, and part-time student employment laws.",
    icon: ShieldCheck,
    number: "06",
    category: "Cultural & Financial Onboarding",
    badge: "Complete Onboarding Kit",
    benefits: [
      {
        title: "International Banking & Forex Setup",
        desc: "Opening overseas bank accounts prior to departure and acquiring multi-currency cards with top rates."
      },
      {
        title: "Student Health Insurance & Coverage",
        desc: "Full guidance on mandatory student healthcare (NHS/IHS, OSHC) and GP clinic registration."
      },
      {
        title: "Part-Time Job Regulations & CV Prep",
        desc: "Clear legal briefings on allowed working hours, minimum wage standards, and local CV formatting."
      },
      {
        title: "Senior Alumni Network Access",
        desc: "Direct connection with AST alumni currently studying at your target university or city."
      }
    ],
    process: [
      { step: "01", title: "Family Briefing", desc: "Interactive orientation covering cultural transition, academic expectations, and emergency plans." },
      { step: "02", title: "Forex & SIM Activation", desc: "Setting up foreign currency cards and receiving your international SIM card before flying." },
      { step: "03", title: "Health & Legal Formalities", desc: "Validating medical records, vaccinations, and student visa condition compliance." },
      { step: "04", title: "Campus Buddy Pairing", desc: "Connecting you with an existing AST senior student on your destination campus." }
    ],
    deliverables: [
      "Official AST Pre-Departure Handbook",
      "Active International Mobile SIM Card",
      "Multi-Currency Forex Card Setup",
      "Direct Senior Student WhatsApp Connection"
    ],
    stats: [
      { value: "100%", label: "Orientation Attendance" },
      { value: "40+", label: "Cities with AST Alumni" },
      { value: "Free", label: "SIM & Forex Setup" }
    ],
    accent: "from-blue-600 to-amber-600"
  }
];

