import React, { useState } from 'react';

export default function CheckoutAndForm({ style, onBack, onSubmit }) {
  const [step, setStep] = useState('checkout');
  const [form, setForm] = useState({
    bride: '',
    groom: '',
    date: '',
    ceremonyTime: '',
    receptionTime: '',
    venue: '',
    gmaps: '',
    story: '',
    gallery: [],
    bankName: '',
    bankAccount: '',
    qrUrl: '',
    verse: '',
    thanks: '',
  });
  const [galleryInputs, setGalleryInputs] = useState(['']);

  const handleGalleryChange = (idx, value) => {
    const newInputs = [...galleryInputs];
    newInputs[idx] = value;
    setGalleryInputs(newInputs);
    setForm((f) => ({ ...f, gallery: newInputs.filter(Boolean) }));
  };

  const addGallery = () => {
    if (galleryInputs.length < style.photos) setGalleryInputs((g) => [...g, '']);
  };

  const canProceed = step === 'checkout' ? true : !!(form.bride && form.groom && form.date);

  return (
    <section className="mx-auto max-w-md px-4 py-6">
      <button onClick={onBack} className="text-sm text-gray-600 mb-3">← Back to styles</button>
      <h2 className="text-xl font-semibold">{step === 'checkout' ? 'Checkout' : 'Invitation details'}</h2>
      {step === 'checkout' ? (
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">{style.name}</p>
              <p className="text-pink-600 font-semibold">${style.price}</p>
            </div>
            <p className="text-sm text-gray-600">Includes up to {style.photos} photos, RSVP, guest messages, and mobile-first layout.</p>
          </div>
          <button
            onClick={() => setStep('form')}
            className="w-full rounded-lg bg-pink-600 text-white py-3 font-medium"
          >
            Pay now & continue
          </button>
          <p className="text-[11px] text-gray-500 text-center">Payment simulated for demo purposes.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); onSubmit({ ...form, style }); }}
          className="mt-4 space-y-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <input className="border rounded-md px-3 py-2 text-sm" placeholder="Bride name" value={form.bride} onChange={(e)=>setForm({...form, bride:e.target.value})} />
            <input className="border rounded-md px-3 py-2 text-sm" placeholder="Groom name" value={form.groom} onChange={(e)=>setForm({...form, groom:e.target.value})} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input type="date" className="border rounded-md px-3 py-2 text-sm" placeholder="Date" value={form.date} onChange={(e)=>setForm({...form, date:e.target.value})} />
            <input className="border rounded-md px-3 py-2 text-sm" placeholder="Venue" value={form.venue} onChange={(e)=>setForm({...form, venue:e.target.value})} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input className="border rounded-md px-3 py-2 text-sm" placeholder="Ceremony time" value={form.ceremonyTime} onChange={(e)=>setForm({...form, ceremonyTime:e.target.value})} />
            <input className="border rounded-md px-3 py-2 text-sm" placeholder="Reception time" value={form.receptionTime} onChange={(e)=>setForm({...form, receptionTime:e.target.value})} />
          </div>
          <input className="border rounded-md px-3 py-2 text-sm w-full" placeholder="Google Maps link" value={form.gmaps} onChange={(e)=>setForm({...form, gmaps:e.target.value})} />
          <textarea className="border rounded-md px-3 py-2 text-sm w-full" placeholder="Love story" value={form.story} onChange={(e)=>setForm({...form, story:e.target.value})} />

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">Gallery URLs ({form.gallery.length}/{style.photos})</p>
              <button type="button" onClick={addGallery} className="text-xs px-2 py-1 rounded bg-gray-100">Add</button>
            </div>
            <div className="space-y-2">
              {galleryInputs.map((val, idx) => (
                <input
                  key={idx}
                  className="border rounded-md px-3 py-2 text-sm w-full"
                  placeholder={`Image URL ${idx+1}`}
                  value={val}
                  onChange={(e)=>handleGalleryChange(idx, e.target.value)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input className="border rounded-md px-3 py-2 text-sm" placeholder="Bank name" value={form.bankName} onChange={(e)=>setForm({...form, bankName:e.target.value})} />
            <input className="border rounded-md px-3 py-2 text-sm" placeholder="Account number" value={form.bankAccount} onChange={(e)=>setForm({...form, bankAccount:e.target.value})} />
          </div>
          <input className="border rounded-md px-3 py-2 text-sm w-full" placeholder="E-money QR image URL" value={form.qrUrl} onChange={(e)=>setForm({...form, qrUrl:e.target.value})} />

          <textarea className="border rounded-md px-3 py-2 text-sm w-full" placeholder="Bible verse" value={form.verse} onChange={(e)=>setForm({...form, verse:e.target.value})} />
          <textarea className="border rounded-md px-3 py-2 text-sm w-full" placeholder="Thank you message" value={form.thanks} onChange={(e)=>setForm({...form, thanks:e.target.value})} />

          <button
            type="submit"
            disabled={!canProceed}
            className="w-full rounded-lg bg-gray-900 text-white py-3 font-medium disabled:opacity-50"
          >
            Generate invitation preview
          </button>
        </form>
      )}
    </section>
  );
}
