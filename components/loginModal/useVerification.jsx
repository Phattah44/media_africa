'use client';
import { useState, useEffect } from 'react';

export default function useVerification(codeLength) {
  let inputStates = [];
  const [code, setCode] = useState(null);
  let inputClass = 'code-digit';
  useEffect(() => {
    let finalCode = inputStates
      .map((input) => {
        return input.digit;
      })
      .join('');

    if (finalCode.length === codeLength) {
      setCode(finalCode);
    } else setCode(null);
  }, [inputStates]);

  for (let i = 0; i < codeLength; i++) {
    const [digit, setDigit] = useState('');
    inputStates.push({ digit, setDigit });
  }

  const handleKeyDown = (e) =>
    ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault();

  const handleChange = (e, index) => {
    let entry = e.target.value;

    if (entry.length <= 1 && !Number.isNaN(entry)) {
      inputStates[index].setDigit(e.target.value);

      if (entry.length === 1) {
        if (index < codeLength - 1) {
          let nextInput = document.querySelectorAll(`.${inputClass}`)[
            index + 1
          ];
          if (nextInput.value === '') nextInput.focus();
        }
      } else if (entry.length === 0) {
        let prevInput = document.querySelectorAll(`.${inputClass}`)[index - 1];
        if (prevInput !== undefined) prevInput.focus();
      }
    } else return;
  };

  return { code, inputStates, inputClass, handleChange, handleKeyDown };
}
