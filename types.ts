
import React from 'react';

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

