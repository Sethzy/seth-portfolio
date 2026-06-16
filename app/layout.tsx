import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seth Portfolio",
  description: "A compact personal portfolio scaffold inspired by siddz.com.",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : prefersDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();`
          }}
        />
        {children}
      </body>
    </html>
  );
}
