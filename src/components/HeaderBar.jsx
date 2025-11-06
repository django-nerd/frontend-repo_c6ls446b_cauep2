import React, { useState } from 'react';

export default function HeaderBar({ auth, onLogin, onLogout }) {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    onLogin({ email });
    setShowLogin(false);
    setEmail('');
    setPassword('');
  };

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-md bg-pink-500 text-white grid place-items-center font-bold">W</div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Wedding Invite Builder</p>
            <p className="text-[11px] text-gray-500">Mobile-first invitations</p>
          </div>
        </div>
        <div className="relative">
          {auth?.user ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600 truncate max-w-[120px]" title={auth.user.email}>{auth.user.email}</span>
              <button
                onClick={onLogout}
                className="text-xs px-2.5 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => setShowLogin((v) => !v)}
                className="text-xs px-3 py-1.5 rounded-md bg-gray-900 text-white"
                aria-expanded={showLogin}
              >
                Login
              </button>
              {showLogin && (
                <form
                  onSubmit={handleSubmit}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-3 space-y-2"
                >
                  <p className="text-sm font-medium">Welcome back</p>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-md bg-pink-500 text-white py-2 text-sm font-medium"
                  >
                    Continue
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
