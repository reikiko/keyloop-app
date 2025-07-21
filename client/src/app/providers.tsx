"use client";

import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
import { ProgressProvider } from "@bprogress/next/app";
import Auth from "@/app/(auth)/authProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Authenticator.Provider>
        <Auth>
          <ProgressProvider
            color="#fffd00"
            options={{ showSpinner: false }}
            shallowRouting
            startOnLoad
          >
            {children}
          </ProgressProvider>
        </Auth>
      </Authenticator.Provider>
    </StoreProvider>
  );
};

export default Providers;
