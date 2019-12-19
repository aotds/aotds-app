import React from 'react';

export default function NavItem({
  min,
  max,
  label,
  value,
  onChange = () => {}
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
