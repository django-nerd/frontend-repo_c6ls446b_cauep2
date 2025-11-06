import React from 'react';

function Section({ title, children }) {
  return (
    <section className="px-4 py-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="space-y-2 text-sm text-gray-700">{children}</div>
    </section>
  );
}

export default function MobileInvitationPreview({ data, onReset }) {
  const { style } = data;
  const badge = {
    'classic-elegance': 'from-pink-500 to-rose-500',
    'modern-minimal': 'from-gray-900 to-gray-700',
    'rustic-charm': 'from-amber-600 to-orange-600',
    'boho-romance': 'from-fuchsia-500 to-violet-500',
    'lux-gold': 'from-yellow-500 to-yellow-700'
  }[style.id] || 'from-gray-900 to-gray-700';

  return (
    <div className="mx-auto max-w-md">
      <div className={`h-40 bg-gradient-to-r ${badge} grid place-items-center text-white text-center`}>
        <div className="px-6">
          <p className="text-xs uppercase tracking-widest">Introducing</p>
          <h1 className="text-2xl font-bold">{data.bride} & {data.groom}</h1>
          <p className="text-sm opacity-90">{data.date}</p>
        </div>
      </div>

      <Section title="Home">
        <p className="leading-relaxed">We joyfully invite you to celebrate our wedding.</p>
        <p className="text-gray-600">{data.bride} ❤ {data.groom}</p>
      </Section>

      <Section title="Event">
        <p><span className="font-medium">Ceremony:</span> {data.ceremonyTime}</p>
        <p><span className="font-medium">Reception:</span> {data.receptionTime}</p>
        <p><span className="font-medium">Venue:</span> {data.venue}</p>
        {data.gmaps && (
          <a href={data.gmaps} target="_blank" rel="noreferrer" className="text-pink-600 underline">Open Google Maps</a>
        )}
      </Section>

      <Section title="Story">
        <p className="whitespace-pre-wrap">{data.story || 'Your story will appear here.'}</p>
      </Section>

      <Section title="Gallery">
        <div className="grid grid-cols-3 gap-2">
          {data.gallery?.slice(0, style.photos).map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i+1}`} className="w-full h-20 object-cover rounded" />
          ))}
        </div>
      </Section>

      <Section title="RSVP & Messages">
        <p>Guests will confirm attendance and leave messages here.</p>
        <button className="mt-2 w-full rounded-md bg-pink-600 text-white py-2 text-sm">Fill RSVP</button>
      </Section>

      <Section title="Gifts">
        <p>Bank: {data.bankName || '-'} | Acc: {data.bankAccount || '-'}</p>
        {data.qrUrl && <img src={data.qrUrl} alt="E-money QR" className="w-40 h-40 object-contain rounded" />}
      </Section>

      <Section title="Verse & Thanks">
        <blockquote className="text-gray-700 italic">{data.verse || 'Your favorite verse goes here.'}</blockquote>
        <p className="text-gray-600">{data.thanks || 'Thank you for being part of our story.'}</p>
      </Section>

      <footer className="px-4 pb-8">
        <button onClick={onReset} className="w-full rounded-lg border py-3 text-sm">Start over</button>
        <p className="text-center text-[11px] text-gray-500 mt-2">Preview only. Your live site will be mobile-optimized.</p>
      </footer>
    </div>
  );
}
