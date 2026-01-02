import { MenuSection as MenuSectionType } from "@/data/menuData";
import { MenuCard } from "./MenuCard";

interface MenuSectionProps {
  section: MenuSectionType;
}

export const MenuSection = ({ section }: MenuSectionProps) => {
  return (
    <section id={section.id} className="py-12 scroll-mt-20">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          {section.title}
        </h2>
        {section.subtitle && (
          <p className="font-elegant text-lg text-muted-foreground italic">
            {section.subtitle}
          </p>
        )}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {section.items.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};
