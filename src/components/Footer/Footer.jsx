// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3 text-center text-white mt-5 bg-dark">
      <div className="container-fluid">
        <p className="mb-0">© {new Date().getFullYear()} Radem</p>
        <p>
          Diseño por: 
        <a href="https://twc.com.ar/" className="btn-white" target='_blank'>The wireframes company</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
