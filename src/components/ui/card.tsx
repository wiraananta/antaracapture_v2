// src/components/ui/card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;      // Menambahkan tipe untuk children
  className?: string;             // className opsional dengan tipe string
  onClick?: () => void;           // onClick opsional dengan tipe fungsi
}

export const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={`card ${className}`} // className untuk menambahkan kelas CSS
      onClick={onClick}               // onClick untuk menangani klik
    >
      {children} {/* Konten kartu */}
    </div>
  );
};
export const CardHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`card-content ${className}`}>{children}</div>;
};

export const CardDescription = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`card-description ${className}`}>{children}</div>;  
};

export const CardTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`card-tile ${className}`}>{children}</div>;  
  
};

export const CardFooter = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`card-footer ${className}`}>{children}</div>;

}
