import NextHead from 'next/head';
import React from 'react';

interface PageProps {
  title?: string;
}

const Head: React.FC<PageProps> = ({ title }) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />    

    <title>{title}</title>
        
    <link
      href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;700;900&display=swap"
      rel="stylesheet"
    />    
  </NextHead>
);

export default Head;