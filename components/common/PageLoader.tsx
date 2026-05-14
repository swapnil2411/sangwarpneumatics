"use client";

import { InfinitySpin } from "react-loader-spinner";

type Props = {
  loading: boolean;
};

export default function PageLoader({
  loading,
}: Props) {
  if (!loading) return null;

  return (
    <div className="page_loader">
      <InfinitySpin
        width="200"
        color="#fff"
      />
    </div>
  );
}