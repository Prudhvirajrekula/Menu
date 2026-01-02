import { MenuItem } from "@/data/menuData";
import { Flame, Leaf, Star } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export const MenuCard = ({ item, index }: MenuCardProps) => {
  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 animate-slide-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="flex items-center gap-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
              <Star className="w-3 h-3" fill="currentColor" />
              Popular
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 flex gap-2">
          {item.isVeg && (
            <span className="flex items-center justify-center w-7 h-7 bg-green-500 text-white rounded-full">
              <Leaf className="w-4 h-4" />
            </span>
          )}
          {item.isSpicy && (
            <span className="flex items-center justify-center w-7 h-7 bg-spice text-white rounded-full">
              <Flame className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-primary whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        {item.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 font-body">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};
