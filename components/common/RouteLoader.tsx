"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "@/components/common/PageLoader";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return <PageLoader loading={loading} />;
}