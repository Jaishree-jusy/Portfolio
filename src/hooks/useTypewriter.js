import { useEffect, useState } from 'react';

/**
 * Cycles through a list of words with a typing / deleting effect.
 * @param {string[]} words - words to cycle through
 * @param {number} typingSpeed - ms per character while typing
 * @param {number} deletingSpeed - ms per character while deleting
 * @param {number} pauseTime - ms to hold the full word before deleting
 */
export const useTypewriter = (
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1600
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};
