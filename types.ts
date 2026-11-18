
import React from 'react';

export interface Service {
  title: string;
  description: string;
  // Use React.ReactNode and import React to fix "Cannot find namespace 'JSX'" error
  icon: React.ReactNode;
}

export interface OtherProject {
  id: string | number;
  title: string;
  category: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

export interface SampleProject {
  id: string | number;
  title: string;
  category: string;
  description: string;
  images: {
    url: string;
    caption: string;
  }[];
}


