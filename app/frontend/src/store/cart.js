import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      slug: null,

      setSlug: (slug) => {
        if (get().slug && get().slug !== slug) set({ items: [], slug });
        else set({ slug });
      },

      addItem: (item) => {
        const items = get().items;
        const existing = items.find((i) => i.menuitemid === item.menuitemid);
        if (existing) {
          set({ items: items.map((i) => i.menuitemid === item.menuitemid ? { ...i, quantity: i.quantity + 1 } : i) });
        } else {
          set({ items: [...items, { ...item, quantity: 1 }] });
        }
      },

      removeItem: (menuitemid) => set({ items: get().items.filter((i) => i.menuitemid !== menuitemid) }),

      updateQty: (menuitemid, qty) => {
        if (qty <= 0) { get().removeItem(menuitemid); return; }
        set({ items: get().items.map((i) => i.menuitemid === menuitemid ? { ...i, quantity: qty } : i) });
      },

      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((s, i) => s + i.price * i.quantity, 0),
      count: () => get().items.reduce((s, i) => s + i.quantity, 0),
    }),
    { name: 'qmenu-cart' }
  )
);
