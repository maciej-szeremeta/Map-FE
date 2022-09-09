/* eslint-disable react/button-has-type */

import React from 'react';
import { Link, } from 'react-router-dom';

interface Props{
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  to?: string;
}

export function Button({ text, type = 'button', className, to, }: Props) {
  return to? <Link to={to} className={className}>{text}</Link>: <button type={type} className={className}>{text}</button>;
};