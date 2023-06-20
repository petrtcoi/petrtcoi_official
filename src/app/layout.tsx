import Script from "next/script"
import "./globals.css"

import { UseDarkMode } from "@features/dark_mode"

export const metadata = {
  title: "Petr Tcoi Official Website",
  description:
    "Welcome to Petr Tcoi Official Website. A little information about me and my programming skills.",
  icons: "/favicon.ico",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <YandexMetrika />
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

function YandexMetrika() {
  return (
    <Script
      id="yandex-metrika"
      strategy="afterInteractive"
    >
      {`
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                 
                    ym(91236839, "init", {
                         clickmap:true,
                         trackLinks:true,
                         accurateTrackBounce:true
                    });
                `}
    </Script>
  )
}
