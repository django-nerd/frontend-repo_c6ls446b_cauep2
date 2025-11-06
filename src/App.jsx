import React, { useState } from 'react';
import HeaderBar from './components/HeaderBar';
import StyleCatalog from './components/StyleCatalog';
import CheckoutAndForm from './components/CheckoutAndForm';
import MobileInvitationPreview from './components/MobileInvitationPreview';

export default function App() {
  const [auth, setAuth] = useState({ user: null });
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [finalData, setFinalData] = useState(null);

  const handleLogin = ({ email }) => setAuth({ user: { email } });
  const handleLogout = () => { setAuth({ user: null }); setSelectedStyle(null); setFinalData(null); };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderBar auth={auth} onLogin={handleLogin} onLogout={handleLogout} />

      {!selectedStyle && !finalData && (
        <>
          <section className="mx-auto max-w-md px-4 pt-6">
            <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-5 border">
              <h1 className="text-2xl font-bold">Create your digital wedding invitation</h1>
              <p className="text-sm text-gray-600 mt-2">Login, pick a style, purchase, and fill in your details. Your site is optimized for mobile screens.</p>
              {!auth.user && (
                <p className="text-xs text-gray-500 mt-2">Login from the top bar to continue.</p>
              )}
            </div>
          </section>
          <StyleCatalog authenticated={!!auth.user} onSelect={setSelectedStyle} />
        </>
      )}

      {selectedStyle && !finalData && (
        <CheckoutAndForm
          style={selectedStyle}
          onBack={() => setSelectedStyle(null)}
          onSubmit={(data) => setFinalData(data)}
        />
      )}

      {finalData && (
        <MobileInvitationPreview
          data={finalData}
          onReset={() => { setFinalData(null); setSelectedStyle(null); }}
        />
      )}

      <div className="h-8" />
    </div>
  );
}
