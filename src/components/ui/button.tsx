// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;      // Konten yang ditampilkan dalam tombol
  className?: string;             // Kelas CSS tambahan
  onClick?: () => void;           // Properti opsional untuk menangani event click
  variant?: string;               // Properti opsional untuk variasi tombol
  size?: string;                  // Properti opsional untuk ukuran tombol
}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick, variant, size }) => {
  return (
    <button
      onClick={onClick}                     // Menangani event klik
      className={`btn ${variant ? variant : ''} ${size ? size : ''} ${className || ''}`}  // Menambahkan kelas CSS
    >
      {children}
    </button>
  );
};
