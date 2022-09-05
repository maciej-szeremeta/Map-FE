/* eslint-disable react/button-has-type */
import React from 'react';

interface Props{
  text: string
  type?:'button' | 'submit' | 'reset' | undefined
}

export function Button({ text, type, }:Props) {
  return (
    <button type={type}>{ text }</button>
  );
};