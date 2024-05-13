import React from 'react';

export type InputFieldType = {
  value: string;
  handler: () => void;
  className?: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'phone';
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
