# Online Menu (React + TS + Tailwind)

This project is a **responsive online menu website** built using:
- **React + TypeScript (TSX)**
- **Vite** (build tool/dev server)
- **Tailwind CSS** (styling)
- **Netlify** (deployment)

It’s designed for a restaurant menu experience:
- Category navigation (sticky + horizontally scrollable)
- Section-based layout (Soups, Starters, Entrees, Biryanis, etc.)
- Menu cards with images + price + badges (Veg/Spicy/Popular)
- Smooth scrolling to sections
- Active category highlights while scrolling (scroll-spy)
- Description shows `...` by default and expands on hover (desktop)

---

## 1) Project Structure (Where things are)

### Core Files
- `src/data/menuData.ts`
  - **All menu sections + menu items live here**
  - Add/edit items, prices, descriptions, images, flags (veg/spicy/popular)

- `src/pages/Index.tsx`
  - **Main page layout**
  - Renders sections and connects navigation with scroll behavior
  - Holds logic for active section (scroll-spy) + click-to-scroll

- `src/components/MenuHeader.tsx`
  - Top branding header (title/logo area)

- `src/components/MenuNav.tsx`
  - **Sticky category navigation bar**
  - Buttons for each section
  - Highlights active section
  - Auto-scrolls horizontally so active tab stays visible on mobile

- `src/components/MenuSection.tsx`
  - Renders a category section (title/subtitle + list of cards)

- `src/components/MenuCard.tsx`
  - **Each menu item card UI**
  - Image, name, price, badges
  - Description line clamp + hover expand

- `src/components/MenuFooter.tsx`
  - Footer content (hours/contact/credits etc.)

### Styling + Config
- `src/index.css`
  - Global styles + Tailwind base utilities
  - Design tokens or global theme (if used)

- `tailwind.config.ts`
  - Tailwind config
  - Includes plugins like:
    - `tailwindcss-animate`
    - `@tailwindcss/line-clamp` (for `line-clamp-2`)

- `index.html`
  - HTML shell + SEO meta tags

---

## 2) How Menu Data is Stored (menuData.ts)

All menu content is inside:

```ts
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
  isVeg?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  // sections here...
];
