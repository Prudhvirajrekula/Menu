import { MenuSection } from "@/data/menuData";

interface MenuNavProps {
  sections: MenuSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export const MenuNav = ({ sections, activeSection, onSectionClick }: MenuNavProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Scrollable row */}
        <div className="relative">
          {/* subtle edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background/95 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background/95 to-transparent" />

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-3 px-1">
            {sections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <button
                  key={section.id}
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
