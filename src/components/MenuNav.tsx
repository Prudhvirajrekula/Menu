import { MenuSection } from "@/data/menuData";

interface MenuNavProps {
  sections: MenuSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export const MenuNav = ({ sections, activeSection, onSectionClick }: MenuNavProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`
                px-4 py-2 rounded-full font-body text-sm font-medium whitespace-nowrap
                transition-all duration-300 ease-out
                ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }
              `}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
