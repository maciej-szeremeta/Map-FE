import React from 'react';

interface Props{
   text: string
}

export function Button({ text, }:Props) {
  return (
    <button type='button'>{ text }</button>
  );
};