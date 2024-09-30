// src/layouts/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <header>
        <h1>Authentication</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout; // Ensure it's exported
