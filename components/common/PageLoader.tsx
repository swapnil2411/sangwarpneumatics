"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { InfinitySpin } from "react-loader-spinner";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
const handleComplete = () => {
      setLoading(false);
    };

    // small delay for smooth UX
    const timeout = setTimeout(handleComplete, 800);

    return () => clearTimeout(timeout);
    
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="page_loader">
      {/* <TailSpin
        visible={true}
        height="60"
        width="60"
        color="#000"
        ariaLabel="tail-spin-loading"
        radius="1"
      /> */}

      <InfinitySpin
width="200"
color="#fff"
/>
    </div>
  );
}