import React from 'react';
import { BRAND } from './BRAND';

/**
 * The Aurum Fitness mark: a gradient tile carrying A power barbell with plated ends and core grip ring.
 * Vector only - no raster assets - so it stays crisp at any size and
 * inherits the surrounding layout.
 */
export function BrandMark({ size = 34, className = '', title, ...rest }) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const gid = `bm-{uid}`;
  const label = title || BRAND.name;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
      {...rest}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BRAND.primary} />
          <stop offset="100%" stopColor={BRAND.secondary} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.3" fill={`url(#${gid})`} />
      <g transform="translate(14.0 14.0) scale(0.5625)">
        <line x1='12' y1='32' x2='52' y2='32' stroke='#ffffff' stroke-width='7' stroke-linecap='round'/><polygon points='10,19 21,19 21,45 10,45' fill='#ffffff'/><polygon points='43,19 54,19 54,45 43,45' fill='#ffffff'/><circle cx='32' cy='32' r='6' fill='none' stroke='#6d3074' stroke-width='3'/><polygon points='29,29 35,29 35,35 29,35' fill='#ffffff'/>
      </g>
    </svg>
  );
}

export default BrandMark;
