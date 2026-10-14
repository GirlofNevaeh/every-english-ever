import { useRouterState } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Paywall } from "@/components/paywall";
import { clearAccessKey, isAccessKey, readStoredAccessKey } from "@/lib/access-key";

type AccessValue = {
  unlocked: boolean;
  unlock: () => void;
  lock: () => void;
};

const AccessContext = createContext<AccessValue>({
  unlocked: false,
  unlock: () => undefined,
  lock: () => undefined,
});

export function AccessProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(isAccessKey(readStoredAccessKey()));
  }, []);

  const unlock = useCallback(() => setUnlocked(true), []);
  const lock = useCallback(() => {
    clearAccessKey();
    setUnlocked(false);
  }, []);

  const value = useMemo(() => ({ unlocked, unlock, lock }), [unlocked, unlock, lock]);
  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>;
}

export function useAccess() {
  return useContext(AccessContext);
}

export function AccessGate({ children }: { children: ReactNode }) {
  const { unlocked, unlock } = useAccess();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isHome = pathname === "/";
  if (isHome || unlocked) return children;
  return <Paywall onUnlock={unlock} />;
}
