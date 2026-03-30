import { useEffect, useMemo, useRef } from "react";
import { MenuSection } from "@/data/menuData";

interface MenuNavProps {
  sections: MenuSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export const MenuNav = ({ sections, activeSection, onSectionClick }: MenuNavProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // store button refs by id
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // only keep ids we actually render (safe)
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  useEffect(() => {
    if (!activeSection) return;
    if (!sectionIds.includes(activeSection)) return;

    const btn = buttonRefs.current[activeSection];
    const scroller = scrollerRef.current;
    if (!btn || !scroller) return;

    // Smoothly center the active button inside the horizontal scroller
    const btnRect = btn.getBoundingClientRect();
    const scrollerRect = scroller.getBoundingClientRect();

    const currentScrollLeft = scroller.scrollLeft;
    const btnCenter = btnRect.left + btnRect.width / 2;
    const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;

    const delta = btnCenter - scrollerCenter;

    scroller.scrollTo({
      left: currentScrollLeft + delta,
      behavior: "smooth",
    });
  }, [activeSection, sectionIds]);

  return (
    <nav className="sticky top-0 z-50 bg-background will-change-transform border-b border-border">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* subtle edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background/95 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background/95 to-transparent" />

          <div
            ref={scrollerRef}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-3 px-1"
          >
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  ref={(el) => {
                    buttonRefs.current[section.id] = el;
                  }}
                  onClick={() => onSectionClick(section.id)}
                  className={[
                    "relative px-4 py-2 rounded-full font-body text-sm font-medium whitespace-nowrap",
                    "transition-all duration-300 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-warm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  ].join(" ")}
                >
                  {section.title}

                  {/* active indicator */}
                  <span
                    className={[
                      "absolute -bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full transition-all duration-300",
                      isActive ? "bg-primary" : "bg-transparent",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
