import {
  GraduationCap,
  Heart,
  Shield,
  Monitor,
  PieChart,
  Calculator,
  Palette,
} from "lucide-react";
import jobAccess from "../images/jobAccess.png";
import jobGoogle from "../images/jobGoogle.png";
import jobsFlutter from "../images/jobsFlutter.png";
import jobsPay from "../images/jobsPay.png";

import uberLogo from "../images/Uber.png";
import googleLogo from "../images/Google.png";
import zapierLogo from "../images/Zapier.png";
import airtelLogo from "../images/Airtel.png";
import accentureLogo from "../images/Accenture.png";
import mckinseyLogo from "../images/Mckinsey.png";
import flutterwaveLogo from "../images/Flutterwave.png";
import mobile from "../images/9mobile.png";

export const recommendedJobs = [
  {
    company: "Paystack",
    position: "QA Engineer",
    location: "Lagos, Nigeria",
    type: "Full time",
    logo: jobsPay,
  },
  {
    company: "Google",
    position: "Product Analyst",
    location: "Lagos, Nigeria",
    type: "Part time",
    logo: jobGoogle,
  },
  {
    company: "Flutterwave",
    position: "HR Manager",
    location: "Abuja, Nigeria",
    type: "Full time",
    logo: jobsFlutter,
  },
  {
    company: "Paystack",
    position: "QA Engineer",
    location: "Lagos, Nigeria",
    type: "Full time",
    logo: jobAccess,
  },
];

export const partnerCompanies = [
  uberLogo,
  googleLogo,
  zapierLogo,
  airtelLogo,
  mobile,
  accentureLogo,
  mckinseyLogo,
  flutterwaveLogo,
];

export const categories = [
  { name: "Oil and Gas", count: 20, icon: <Monitor className="w-8 h-8" /> },
  { name: "Healthcare", count: 10, icon: <Heart className="w-8 h-8" /> },
  { name: "Education", count: 10, icon: <GraduationCap className="w-8 h-8" /> },
  { name: "Accounting", count: 10, icon: <Calculator className="w-8 h-8" /> },
  {
    name: "Design, Art and Multimedia",
    count: 20,
    icon: <Palette className="w-8 h-8" />,
  },
  { name: "Technology", count: 10, icon: <Monitor className="w-8 h-8" /> },
  { name: "Security", count: 10, icon: <Shield className="w-8 h-8" /> },
  { name: "Data Analyst", count: 10, icon: <PieChart className="w-8 h-8" /> },
];

export const companies = [
  "Uber",
  "Google",
  "Zapier",
  "Airtel",
  "Accenture",
  "McKinsey & Company",
  "Flutterwave",
];
