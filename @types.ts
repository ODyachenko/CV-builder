import React from 'react';

export type InputFieldType = {
  value: string;
  handler: () => void;
  className?: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'phone' | 'date' | 'month';
  name?: string;
  autoComplete?: string;
};

export type TextAreaType = {
  label?: string;
  className?: string;
};

export type OptionsType = {
  value: string;
  label: string;
};

export type SelectType = {
  options: OptionsType[];
  label?: string;
  placeholder?: string;
  className?: string;
};

export type BtnType = {
  children: string | React.ReactNode;
  handler: () => void;
  className?: string;
};

export type DocumentType = {
  id: number;
  title: string;
  lastUpdate: string;
  screenshot: string;
};

export type DocumentActions = {
  id: number;
  icon: string;
  value: string;
};

export type CVBlockType = {
  title: string;
  text?: string;
  form: React.ReactNode;
  name: string;
};
