import React from 'react';

const LogoutPage: React.FC = () => {
  localStorage.removeItem('token');
  
  window.location.href = "/";
  
  return <></>;
}

export default LogoutPage;