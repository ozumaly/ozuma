"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Set dark mode and handle hydration
  useEffect(() => {
    // This runs only on the client after hydration
    setMounted(true);
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <body
      suppressHydrationWarning
      className={mounted ? "antialiased min-h-screen bg-background text-foreground dark" : ""}
    >
      {children}
    </body>
  );
}
