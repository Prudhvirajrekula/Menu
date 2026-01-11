import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 450);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={[
                "fixed bottom-5 right-5 z-50",
                "h-12 w-12 rounded-full",
                "bg-primary text-primary-foreground",
                "shadow-lg shadow-black/20",
                "transition-all duration-200",
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
                "hover:opacity-95 active:scale-95",
                "flex items-center justify-center",
            ].join(" ")}
        >
            <ChevronUp className="h-5 w-5" />
        </button>
    );
}
