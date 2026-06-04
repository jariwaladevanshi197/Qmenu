import { useEffect } from 'react';

const radiusPx = { sharp: '0px', rounded: '12px', pill: '999px' };

export const useTheme = (theme) => {
  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    root.style.setProperty('--qm-primary',    theme.primaryColor    || '#f97316');
    root.style.setProperty('--qm-secondary',  theme.secondaryColor  || '#1f2937');
    root.style.setProperty('--qm-accent',     theme.accentColor     || '#fbbf24');
    root.style.setProperty('--qm-bg',         theme.bgColor         || '#f9fafb');
    root.style.setProperty('--qm-card',       theme.cardColor       || '#ffffff');
    root.style.setProperty('--qm-text',       theme.textColor       || '#111827');
    root.style.setProperty('--qm-nav-bg',     theme.navBg           || '#ffffff');
    root.style.setProperty('--qm-btn-text',   theme.buttonTextColor || '#ffffff');
    root.style.setProperty('--qm-radius',     radiusPx[theme.borderRadius] || '12px');
    root.style.setProperty('--qm-font',       theme.fontFamily      || 'Inter');

    // Load Google Font dynamically
    const fontName = theme.fontFamily || 'Inter';
    const linkId = 'qmenu-theme-font';
    let link = document.getElementById(linkId);
    if (!link) { link = document.createElement('link'); link.id = linkId; link.rel = 'stylesheet'; document.head.appendChild(link); }
    link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}:wght@400;500;600;700&display=swap`;

    return () => {
      // cleanup on unmount (back to admin panel etc.)
      root.style.removeProperty('--qm-primary');
      root.style.removeProperty('--qm-bg');
      root.style.removeProperty('--qm-nav-bg');
    };
  }, [theme]);

  return {
    primary:    theme?.primaryColor    || '#f97316',
    secondary:  theme?.secondaryColor  || '#1f2937',
    accent:     theme?.accentColor     || '#fbbf24',
    bg:         theme?.bgColor         || '#f9fafb',
    card:       theme?.cardColor       || '#ffffff',
    text:       theme?.textColor       || '#111827',
    navBg:      theme?.navBg           || '#ffffff',
    btnText:    theme?.buttonTextColor || '#ffffff',
    radius:     radiusPx[theme?.borderRadius] || '12px',
    font:       theme?.fontFamily      || 'Inter',
  };
};
