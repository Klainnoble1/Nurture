import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
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
    'font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 inline-flex';

  const variants = {
    primary:
      'bg-nest-600 text-white shadow-soft hover:bg-nest-700 hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-warm-500 text-white shadow-soft hover:bg-warm-600 hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border-2 border-nest-600 text-nest-700 hover:bg-nest-50 hover:border-nest-700 active:scale-[0.98]',
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
