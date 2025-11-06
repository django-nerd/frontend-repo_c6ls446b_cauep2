import React from 'react';

const styles = [
  {
    id: 'classic-elegance',
    name: 'Classic Elegance',
    price: 29,
    photos: 6,
    accent: 'from-pink-500 to-rose-500',
    desc: 'Timeless serif typography with soft florals and gentle motion.'
  },
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    price: 19,
    photos: 3,
    accent: 'from-gray-900 to-gray-700',
    desc: 'Clean layout, high-contrast type, and subtle micro-interactions.'
  },
  {
    id: 'rustic-charm',
    name: 'Rustic Charm',
    price: 24,
    photos: 5,
    accent: 'from-amber-600 to-orange-600',
    desc: 'Warm textures and nature-inspired accents for outdoor vibes.'
  },
  {
    id: 'boho-romance',
    name: 'Boho Romance',
    price: 34,
    photos: 9,
    accent: 'from-fuchsia-500 to-violet-500',
    desc: 'Artful patterns, dreamy colors, and layered imagery.'
  },
  {
    id: 'lux-gold',
    name: 'Luxe Gold',
    price: 49,
    photos: 12,
    accent: 'from-yellow-500 to-yellow-700',
    desc: 'Opulent details with metallic accents and premium layout.'
  }
];

export default function StyleCatalog({ authenticated, onSelect }) {
  return (
    <section className="mx-auto max-w-md px-4 py-6">
      <h2 className="text-xl font-semibold">Choose your invitation style</h2>
      <p className="text-sm text-gray-500">Select a design to continue. Prices vary by number of photos supported.</p>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {styles.map((s) => (
          <button
            key={s.id}
            onClick={() => authenticated && onSelect(s)}
            className={`text-left rounded-xl border shadow-sm overflow-hidden active:scale-[0.99] transition ${authenticated ? 'hover:shadow-md' : 'opacity-60 cursor-not-allowed'}`}
          >
            <div className={`h-28 bg-gradient-to-r ${s.accent} relative`}>
              <div className="absolute inset-0 bg-white/10" />
              <div className="absolute bottom-2 left-3 bg-white/90 rounded-md px-2 py-1 text-[11px] font-medium">
                {s.photos} photos supported
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <p className="font-medium">{s.name}</p>
                <p className="text-pink-600 font-semibold">${s.price}</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
              <div className="mt-3">
                <span className={`inline-flex items-center text-xs font-medium rounded-full px-2 py-1 bg-gray-100`}>Mobile optimized</span>
              </div>
            </div>
          </button>
        ))}
      </div>
      {!authenticated && (
        <div className="mt-3 text-xs text-gray-500">
          Please login first to select and purchase a style.
        </div>
      )}
    </section>
  );
}
