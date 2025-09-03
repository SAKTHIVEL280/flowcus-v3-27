import React from 'react';

interface PlusPatternBackgroundProps {
  plusSize?: number;
  className?: string;
  style?: React.CSSProperties;
  fade?: boolean;
  opacity?: number;
  [key: string]: any;
}

export const BackgroundPlus: React.FC<PlusPatternBackgroundProps> = ({
  plusSize = 120,
  className = '',
  fade = true,
  opacity = 0.15,
  style,
  ...props
}) => {
  // Light theme gradient colors - more visible and darker
  const lightGradient1 = `url("data:image/svg+xml,%3Csvg width='${plusSize}' height='${plusSize}' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='lightGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:hsl(210, 70%, 55%);stop-opacity:0.4'/%3E%3Cstop offset='100%25' style='stop-color:hsl(270, 60%, 60%);stop-opacity:0.35'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='url(%23lightGrad1)'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
  
  const lightGradient2 = `url("data:image/svg+xml,%3Csvg width='${plusSize * 0.7}' height='${plusSize * 0.7}' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='lightGrad2' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:hsl(210, 60%, 58%);stop-opacity:0.3'/%3E%3Cstop offset='100%25' style='stop-color:hsl(270, 55%, 62%);stop-opacity:0.25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='url(%23lightGrad2)'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

  // Dark theme gradient colors - only blue-purple, no orange
  const darkGradient1 = `url("data:image/svg+xml,%3Csvg width='${plusSize}' height='${plusSize}' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='darkGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:hsl(210, 80%, 65%);stop-opacity:${opacity}'/%3E%3Cstop offset='100%25' style='stop-color:hsl(270, 60%, 70%);stop-opacity:${opacity}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='url(%23darkGrad1)'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

  const vignetteStyle: React.CSSProperties = fade
    ? {
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
      }
    : {};

  const backgroundStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    ...vignetteStyle,
    ...style,
  };

  return (
    <div
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      style={backgroundStyle}
      {...props}
    >
      {/* Light theme layers - more visible */}
      <div 
        className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-500"
        style={{
          backgroundImage: lightGradient1,
        }}
      />
      
      {/* Dark theme layer - only blue-purple gradient, no orange */}
      <div 
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: darkGradient1,
        }}
      />
    </div>
  );
};

export default BackgroundPlus;