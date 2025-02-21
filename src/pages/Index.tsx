
import { useState } from "react";
import { Calendar, Heart, Users, Phone, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const menuItems = [
    { label: "Home", href: "#", isActive: true },
    { label: "About Us", href: "#about", hasSubmenu: true },
    { label: "Health Centers", href: "#centers" },
    { label: "Our Services", href: "#services" },
    { label: "E-Services", href: "#eservices", hasSubmenu: true },
    { label: "Digital Participation", href: "#participation", hasSubmenu: true },
    { label: "Media", href: "#media", hasSubmenu: true },
    { label