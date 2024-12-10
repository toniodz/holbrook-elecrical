import { 
  Building2, 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Lightbulb 
} from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    icon: Building2,
    title: "Industrial & Commercial Installations",
    description: "Complete electrical installation services for new builds and renovations.",
    image: "https://images.unsplash.com/photo-1565108160347-5498c67c4fcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Zap,
    title: "Power Distribution Systems",
    description: "Design and installation of efficient power distribution networks.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: ShieldCheck,
    title: "Testing & Compliance",
    description: "Comprehensive electrical testing and certification services.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Preventive maintenance and emergency repair services.",
    image: "https://images.unsplash.com/photo-1581092584641-c0d6b62e2ed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Round-the-clock support for critical electrical issues.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Lightbulb,
    title: "Energy Efficiency Solutions",
    description: "Smart solutions to reduce energy consumption and costs.",
    image: "https://images.unsplash.com/photo-1548744444-e668439de9c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export { services };