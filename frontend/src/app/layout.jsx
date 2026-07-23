import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "PromptToInvoice",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// The app is a fully client-rendered SPA gated by Clerk. Opt out of static
// prerendering so the build does not require the Clerk publishable key and so
// runtime behaviour matches the original Vite single-page app.
export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="min-h-screen max-w-full overflow-x-hidden">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
