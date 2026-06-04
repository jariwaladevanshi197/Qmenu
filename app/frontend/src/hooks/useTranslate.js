import { useRef } from 'react';

const translate = async (text, targetLang) => {
  if (!text?.trim()) return '';
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
    );
    const data = await res.json();
    const result = data.responseData?.translatedText || '';
    // MyMemory sometimes returns the original text when it can't translate
    return result.toLowerCase() === text.toLowerCase() ? '' : result;
  } catch {
    return '';
  }
};

/**
 * Usage:
 *   const { handleEngChange } = useTranslate(setForm);
 *   <input onChange={(e) => handleEngChange(e.target.value)} />
 *
 * setForm must accept functional updater: (prev) => ({ ...prev, name_guj: ..., name_hindi: ... })
 */
export const useTranslate = (setForm) => {
  const timerRef = useRef(null);
  // Store setForm in a ref so the debounced callback always uses the latest version
  const setFormRef = useRef(setForm);
  setFormRef.current = setForm;

  const handleEngChange = (value) => {
    // Update English field immediately
    setFormRef.current((prev) => ({ ...prev, name_eng: value }));

    // Clear previous debounce
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!value.trim()) {
      setFormRef.current((prev) => ({ ...prev, name_guj: '', name_hindi: '' }));
      return;
    }

    timerRef.current = setTimeout(async () => {
      const [guj, hindi] = await Promise.all([
        translate(value, 'gu'),
        translate(value, 'hi'),
      ]);
      setFormRef.current((prev) => ({
        ...prev,
        ...(guj   ? { name_guj: guj }     : {}),
        ...(hindi ? { name_hindi: hindi } : {}),
      }));
    }, 700);
  };

  return { handleEngChange };
};
