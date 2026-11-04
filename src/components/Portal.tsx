"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type PortalProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: PortalProps) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // The portal target is browser-only and must be set after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPortalRoot(document.body);
  }, []);

  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};
