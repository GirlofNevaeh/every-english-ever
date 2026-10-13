import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Paywall } from "@/components/paywall";
import { clearAccessKey, isAccessKey, readStoredAccessKey } from "@/lib/access-key";

type AccessValue = { lock: () => void };

const AccessContext = createContext<AccessValue | null>(null);

export function AccessGate({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isAccessKey(readStoredAccessKey())) setOpen(true);
  }, []);

  if (!open) return <Paywall onUnlock={() => setOpen(true)} />;

  return (
    <AccessContext.Provider
      value={{
        lock: () => {
          clearAccessKey();
          setOpen(false);
        },
      }}
    >
      {children}
    </AccessContext.Provider>
  );
}

export function useLock() {
  const value = useContext(AccessContext);
  return value?.lock ?? (() => undefined);
}
