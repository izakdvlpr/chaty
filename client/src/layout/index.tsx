import React from 'react';

import Head from './Head';

interface PageProps {
  title?: string;
}

const LayoutDefault: React.FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Head title={title} />

      {children}
    </>
  );
};

export default LayoutDefault;