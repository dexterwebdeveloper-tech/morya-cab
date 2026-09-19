// App.js or a custom Analytics.js component
import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UsePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag('config', 'G-CTMB4PJSPF', {
      page_path: location.pathname + location.search,
    });
  }, [location]);
};

export default UsePageTracking;
