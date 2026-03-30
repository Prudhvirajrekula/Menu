import { useRef, useState } from "react";
import { Search, X } from "lucide-react";

export interface SearchSuggestion {
  itemName: string;
  sectionTitle: string;
  itemId: string;
}

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  suggestions: SearchSuggestion[];
  onSelectSuggestion: (suggestion: SearchSuggestion) => void;
  resultCount: number;
}

export const SearchBar = ({
  value,
  onChange,
  suggestions,
  onSelectSuggestion,
  resultCount,
}: SearchBarProps) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (s: SearchSuggestion) => {
    setOpen(false);
    onSelectSuggestion(s);
  };

  const handleClear = () => {
    onChange("");
    setOpen(false);
    inputRef.current?.focus();
  };

  const showDropdown = open && value.trim().length > 0 && suggestions.length > 0;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "Escape") handleClear();
          }}
          placeholder="Search menu items…"
          className="w-full pl-9 pr-9 py-2 text-sm bg-background border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {value.trim().length > 0 && !showDropdown && (
        <p className="mt-1 text-xs text-muted-foreground text-center">
          {resultCount > 0 ? `${resultCount} result${resultCount !== 1 ? "s" : ""}` : "No results found"}
        </p>
      )}

      {showDropdown && (
        <ul className="absolute z-50 left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-card overflow-hidden max-h-64 overflow-y-auto">
          {suggestions.map((s) => (
            <li key={s.itemId}>
              <button
                onMouseDown={() => handleSelect(s)}
                className="w-full text-left px-4 py-2.5 hover:bg-muted transition-colors flex items-center justify-between gap-2"
              >
                <span className="text-sm font-medium text-foreground truncate">{s.itemName}</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">{s.sectionTitle}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
