import { media, Theme } from '@andideve/ids-react';
import { styles } from '@andideve/ids-react/dist/styles';

const global = (theme: Theme) => `
  :root {
    --g-color-system-accent: hsl(252deg, 96%, 66%);
    --g-color-system-accent--accessible: hsl(252deg, 96%, 66%);
    color-scheme: ${theme.colorMode};
    font-size: 14px;
  }
  ${media('lg')} {
    :root { font-size: 16px; }
  }
  ${styles.flexbox}
  ${styles.layouts}
  ${styles.size}
  ${styles.typography}

  #__next {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1 1 auto;
  }
  hr {
    border-color: var(--color-system-separator);
  }

  // Colors

  .color-primary {
    color: var(--g-color-system-accent--accessible);
  }
  .color-secondary,
  .color-secondary--hoverable {
    color: var(--color-system-foreground-secondary);
  }
  .color-secondary--hoverable {
    &:focus {
      color: var(--color-system-foreground);
    }
    ${media('lg')} {
      &:hover {
        color: var(--color-system-foreground);
      }
    }
  }
  .color-tertiary {
    color: var(--color-system-foreground-tertiary);
  }

  // Radii

  .rounded {
    border-radius: ${theme.radii.base};
  }
  .rounded-md {
    border-radius: ${theme.radii.md} !important;
  }
  .rounded-lg {
    border-radius: ${theme.radii.lg} !important;
  }
  .rounded-xl {
    border-radius: ${theme.radii.xl} !important;
  }
  .rounded-full {
    border-radius: ${theme.radii.full} !important;
  }

  // Others

  .sr-only {
    position: absolute;
    left: -100vw;
    max-width: 0;
  }
  .focus-visible:focus-visible {
    outline: 1px solid var(--color-system-foreground);
  }
`;

export { global as globalStyles };
export default global;
