import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'wonder';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base =
    'font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 inline-flex';

  const variants = {
    primary:
      'bg-nest-500 text-white shadow-lg shadow-nest-500/20 hover:bg-nest-600 hover:shadow-xl hover:shadow-nest-500/30 hover:-translate-y-1 active:translate-y-0',
    secondary:
      'bg-joy-500 text-white shadow-lg shadow-joy-500/20 hover:bg-joy-600 hover:shadow-xl hover:shadow-joy-500/30 hover:-translate-y-1 active:translate-y-0',
    wonder:
      'bg-wonder-500 text-white shadow-lg shadow-wonder-500/20 hover:bg-wonder-600 hover:shadow-xl hover:shadow-wonder-500/30 hover:-translate-y-1 active:translate-y-0',
    outline:
      'border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combined = `${base} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`;

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combined}>
      {children}
    </button>
  );
}
