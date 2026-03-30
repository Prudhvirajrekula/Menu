import { useState, useEffect, useMemo } from "react";
import { menuData } from "@/data/menuData";
import { MenuHeader } from "@/components/MenuHeader";
import { MenuNav } from "@/components/MenuNav";
import { MenuSection } from "@/components/MenuSection";
import { MenuCard } from "@/components/MenuCard";
import { MenuFooter } from "@/components/MenuFooter";
import { SearchBar, SearchSuggestion } from "@/components/SearchBar";

const Index = () => {
  const [activeSection, setActiveSection] = useState(menuData[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    // Cache section positions once; invalidate on resize
    let sectionOffsets: { id: string; top: number }[] = [];

    const cacheOffsets = () => {
      sectionOffsets = menuData.map((section) => ({
        id: section.id,
        top: document.getElementById(section.id)?.offsetTop ?? 0,
      }));
    };

    cacheOffsets();

    let rafPending = false;

    const handleScroll = () => {
      if (searchQuery.trim()) return;
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        const scrollPosition = window.scrollY + 150;
        for (let i = sectionOffsets.length - 1; i >= 0; i--) {
          if (sectionOffsets[i].top <= scrollPosition) {
            setActiveSection(sectionOffsets[i].id);
            break;
          }
        }
      });
    };

    const handleResize = () => { cacheOffsets(); };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [searchQuery]);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const results: Array<{ item: (typeof menuData)[0]["items"][0]; sectionTitle: string; sectionId: string }> = [];
    for (const section of menuData) {
      for (const item of section.items) {
        if (item.name.toLowerCase().includes(q)) {
          results.push({ item, sectionTitle: section.title, sectionId: section.id });
        }
      }
    }
    return results;
  }, [searchQuery]);

  const suggestions: SearchSuggestion[] = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const startsWith = searchResults.filter((r) => r.item.name.toLowerCase().startsWith(q));
    const contains = searchResults.filter((r) => !r.item.name.toLowerCase().startsWith(q));
    return [...startsWith, ...contains].slice(0, 8).map((r) => ({
      itemName: r.item.name,
      sectionTitle: r.sectionTitle,
      itemId: r.item.id,
    }));
  }, [searchResults, searchQuery]);

  const handleSelectSuggestion = (s: SearchSuggestion) => {
    setSearchQuery(s.itemName);
  };

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-background bg-pattern">
      <title>Biryani Pot Menu - Authentic Hyderabadi Cuisine | East Windsor, NJ</title>

      <MenuHeader />

      <MenuNav
        sections={menuData}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      <div className="bg-background border-b border-border py-3 px-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          suggestions={suggestions}
          onSelectSuggestion={handleSelectSuggestion}
          resultCount={searchResults.length}
        />
      </div>

      <main className="container mx-auto px-4 pb-16">
        {isSearching ? (
          <div className="py-8">
            <p className="text-center text-sm text-muted-foreground mb-6">
              {searchResults.length > 0
                ? `${searchResults.length} result${searchResults.length !== 1 ? "s" : ""} for "${searchQuery}"`
                : `No results for "${searchQuery}"`}
            </p>
            {searchResults.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {searchResults.map(({ item }, index) => (
                  <MenuCard key={item.id} item={item} index={index} />
                ))}
              </div>
            )}
          </div>
        ) : (
          menuData.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))
        )}
      </main>

      <MenuFooter />
    </div>
  );
};

export default Index;
