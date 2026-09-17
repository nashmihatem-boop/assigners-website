"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const PIXEL_SRC = "https://api.useleadbot.com/lead-bots/get-pixel-script.js";

// Persists across Next.js client-side navigations (the module stays loaded in
// memory) but resets to false on any real page load/reload. That difference
// is what lets us tell the two apart below.
let hasMountedInThisSession = false;

export function LeadFormsWidget({ formToken }: { formToken: string }) {
  const ranOnce = useRef(false);

  useEffect(() => {
    if (ranOnce.current) return; // guard against React Strict Mode's double-invoke in dev
    ranOnce.current = true;

    if (hasMountedInThisSession) {
      // We arrived here via client-side (SPA) navigation from another LeadForms
      // page. The vendor's pixel script only scans the DOM for #leadforms-embd-form
      // once per real page load, so it won't pick up this page's div or token
      // unless we force a full reload.
      window.location.reload();
      return;
    }

    hasMountedInThisSession = true;
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-2 shadow-lg">
      <Script src={PIXEL_SRC} strategy="afterInteractive" />
      <Script id={`leadforms-token-${formToken}`} strategy="afterInteractive">
        {`window.form_token = "${formToken}";`}
      </Script>
      <div id="leadforms-embd-form" />
    </div>
  );
}
