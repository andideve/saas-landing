import React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';

const TogglePill = styled.span`
  --padding: 0.25rem;
  --ellipse-size: 1.75rem;
  --ellipse-transform-space: 0.375rem;
  display: inline-flex;
  width: calc((var(--ellipse-size) + var(--padding)) * 2 + var(--ellipse-transform-space));
  height: auto;
  padding: var(--padding);
  box-shadow: inset 0 0 0 1px var(--color-system-separator);
  &.active {
    background-color: var(--g-color-system-accent);
    box-shadow: none;
    .TogglePill__Ellipse {
      transform: translateX(calc(100% + var(--ellipse-transform-space)));
      background-color: var(--color-white);
    }
  }
  .TogglePill__Ellipse {
    width: var(--ellipse-size);
    height: var(--ellipse-size);
    background-color: var(--color-system-foreground);
  }
  &,
  .TogglePill__Ellipse {
    border-radius: 999px;
    transition: all 0.15s linear;
  }
`;

export default function Toggle({
  name,
  label,
  checked,
  onChange,
}: {
  name: string;
  label?: string;
  checked?: boolean;
  onChange?(ev: React.ChangeEvent<HTMLInputElement>): void;
}) {
  const input = (
    <input
      type="checkbox"
      name={name}
      className="overlay rounded-full"
      style={{ appearance: 'none', cursor: 'pointer' }}
      checked={checked}
      onChange={onChange}
    />
  );
  return (
    <TogglePill title={label} className={clsx(checked && 'active', 'relative')}>
      {label ? (
        <label htmlFor={name}>
          <span className="sr-only">{label}</span>
          {input}
        </label>
      ) : (
        input
      )}
      <span className="TogglePill__Ellipse" />
    </TogglePill>
  );
}

Toggle.defaultProps = { label: undefined, checked: undefined, onChange: undefined };
