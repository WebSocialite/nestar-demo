import { useState, useEffect } from 'react';

// Helper function to detect mobile devices
const useDeviceDetect = (): string => {
    const [device, setDevice] = useState<string>("desktop");

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isMobile = 
   /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    userAgent
   );
    setDevice(isMobile ? "mobile" : "desktop" );
}, [device]);
return device;
};
export default useDeviceDetect;
