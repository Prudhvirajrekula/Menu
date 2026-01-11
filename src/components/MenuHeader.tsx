import { Phone, MapPin, Clock } from "lucide-react";

export const MenuHeader = () => {
  const scrollToThalis = () => {
    document.getElementById("thalis")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/30 rounded-full blur-2xl" />

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        {/* Weekday Thali Callout */}
        <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 hidden lg:block">
          <button
            type="button"
            onClick={scrollToThalis}
            className="text-left bg-primary-foreground/12 backdrop-blur-md border border-primary-foreground/15 rounded-xl px-4 py-3 shadow-md max-w-[220px] hover:bg-primary-foreground/20 transition-colors"
          >
            <p className="text-[11px] uppercase tracking-wide font-medium text-primary-foreground/70">
              Weekday Special
            </p>

            <p className="text-sm font-semibold text-primary-foreground mt-0.5">
              Veg &amp; Non-Veg Thalis
            </p>

            <p className="text-xs text-primary-foreground/65 mt-1 italic">
              11:30 AM – 2:30 PM
            </p>
          </button>
        </div>

        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="inline-flex items-center justify-center">
            <img
              src="https://biryanipoteastwindsor.com/wp-content/uploads/2022/03/Biryani_Pot_LogoX350-300x93.png"
              alt="Biryani Pot"
              className="h-16 md:h-20 object-contain brightness-0 invert"
            />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Our Menu
            </h1>
            <p className="font-elegant text-xl md:text-2xl text-primary-foreground/90 italic">
              Authentic Hyderabadi Cuisine
            </p>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="tel:+16094484169"
              className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full backdrop-blur-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(609) 448-4169</span>
            </a>

            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">400 US-130, East Windsor, NJ</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Open Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </header>
  );
};
