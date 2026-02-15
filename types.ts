
import React from 'react';

export interface Offer {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  price?: string;
  link: string;
  badge?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Service {
  title: string;
  description: string;
  // Use React.ReactNode and import React to fix "Cannot find namespace 'JSX'" error
  icon: React.ReactNode;
}
