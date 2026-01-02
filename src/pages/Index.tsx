import { useState, useEffect } from "react";
import { menuData } from "@/data/menuData";
import { MenuHeader } from "@/components/MenuHeader";
import { MenuNav } from "@/components/MenuNav";
import { MenuSection } from "@/components/MenuSection";
import { MenuFooter } from "@/components/MenuFooter";

const Index = () => {
  const [activeSection, setActiveSection] = useState(menuData[0].id);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuData.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background bg-pattern">
      {/* SEO Meta - would be in document head in production */}
      <title>Biryani Pot Menu - Authentic Hyderabadi Cuisine | East Windsor, NJ</title>

      <MenuHeader />
      
      <MenuNav
        sections={menuData}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      <main className="container mx-auto px-4 pb-16">
        {menuData.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </main>

      <MenuFooter />
    </div>
  );
};

export default Index;
