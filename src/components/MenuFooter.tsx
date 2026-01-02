import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export const MenuFooter = () => {
  return (
    <footer className="bg-warm-brown text-cream">
      {/* Top wave */}
      <div className="relative -mt-px">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto rotate-180"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <img
              src="https://biryanipoteastwindsor.com/wp-content/uploads/2022/03/Biryani_Pot_LogoX350-300x93.png"
              alt="Biryani Pot"
              className="h-12 object-contain brightness-0 invert"
            />
            <p className="font-body text-sm text-cream/80">
              Experience the authentic flavors of Hyderabadi cuisine. Our biryanis are prepared with
              traditional recipes passed down through generations.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+16094484169"
                  className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-body text-sm">(609) 448-4169</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=400+US-130,+East+Windsor,+NJ+08520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-cream/80 hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="font-body text-sm">
                    400 US-130, East Windsor, NJ 08520
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-cream/80">
                <Clock className="w-4 h-4" />
                <span className="font-body text-sm">Open Daily</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-gold">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/10 hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/10 hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="font-body text-xs text-cream/60">
              Follow us on social media for updates and special offers!
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/20 text-center">
          <p className="font-body text-sm text-cream/60">
            © {new Date().getFullYear()} Biryani Pot East Windsor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
