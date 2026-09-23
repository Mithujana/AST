import { Compass, GraduationCap, FileCheck, Plane, Home, ShieldCheck } from "lucide-react";

export const SERVICES = [
  {
    id: "expert-counselling",
    title: "Expert Counselling",
    description: "Personalized guidance to help students choose the right pathway aligned with their career goals and academic background.",
    icon: Compass,
    number: "01",
  },
  {
    id: "university-selection",
    title: "University Selection",
    description: "Find universities and programs that perfectly match your academic goals, budget, and location preferences.",
    icon: GraduationCap,
    number: "02",
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    description: "Professional support throughout the complex student visa application process to maximize your chances of approval.",
    icon: FileCheck,
    number: "03",
  },
  {
    id: "travel-support",
    title: "Travel Support",
    description: "Comprehensive assistance with flight bookings, travel planning, and international departure coordination.",
    icon: Plane,
    number: "04",
  },
  {
    id: "accommodation",
    title: "Accommodation Guidance",
    description: "Help finding safe, comfortable, and budget-friendly student accommodation near your chosen university.",
    icon: Home,
    number: "05",
  },
  {
    id: "pre-departure",
    title: "Pre-Departure Support",
    description: "Complete briefing and guidance before you begin your journey, covering culture, banking, and essential tips.",
    icon: ShieldCheck,
    number: "06",
  }
];
