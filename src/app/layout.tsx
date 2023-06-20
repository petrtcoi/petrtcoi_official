import "./globals.css"

import { UseDarkMode } from "@features/dark_mode"

export const metadata = {
  title: "Petr Tcoi Official Website",
  description:
    "Welcome to Petr Tcoi Official Website. A little information about me and my programming skills.",
  icon: "/favicon.ico",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UseDarkMode />
      <body
        className="
      bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors duration-300
      max-w-5xl m-auto px-7 md:px-5
      "
      >
        {children}
      </body>
    </html>
  )
}
