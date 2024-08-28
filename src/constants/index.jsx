import { Wallet, Banknote, Globe, ShieldCheck, UserCheck, PieChart } from "lucide-react"; 

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Specials", href: "#" },
  { label: "News & Insights", href: "#" },
  { label: "Locations", href: "#" },
  { label: "About", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];


export const features = [
  {
    icon: <Wallet />,
    text: "Secure Transactions",
    description:
      "Ensure your financial transactions are secure with top-notch encryption and security protocols.",
  },
  {
    icon: <Banknote />,
    text: "Account Management",
    description:
      "Easily manage your accounts, view statements, and track your spending with our intuitive account management tools.",
  },
  {
    icon: <Globe />,
    text: "Global Accessibility",
    description:
      "Access your account and perform transactions from anywhere in the world with our global banking services.",
  },
  {
    icon: <ShieldCheck />,
    text: "Fraud Protection",
    description:
      "Benefit from advanced fraud detection and protection measures to keep your account safe from unauthorized access.",
  },
  {
    icon: <UserCheck />,
    text: "Customer Support",
    description:
      "Get assistance whenever you need it with our 24/7 customer support and personalized help.",
  },
  {
    icon: <PieChart />,
    text: "Financial Insights",
    description:
      "Analyze your spending habits and get financial insights with our easy-to-use analytics dashboard.",
  },
];

export const offers = [
  {
    title: "Earn 5% Interest on Your Savings",
    description: "Boost your savings with a 5% annual interest rate on all savings accounts. Limited time offer!",
    buttonText: "Open Account",
    buttonColor: "bg-blue-800",
    newLabel: true
  },
  {
    title: "No Fees for New Checking Accounts",
    description: "Open a new checking account with no monthly fees for the first year. Act now!",
    buttonText: "Sign Up",
    buttonColor: "bg-green-600",
    newLabel: false
  },
  {
    title: "Get a $100 Bonus for Referrals",
    description: "Refer a friend to our bank and get a $100 bonus when they open a new account. There's no limit to how many you can earn!",
    buttonText: "Refer Now",
    buttonColor: "bg-yellow-500",
    newLabel: true
  }
];



export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
