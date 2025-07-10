// import { ThemeProvider } from "next-themes";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import "./globals.css";
// import { notFound } from "next/navigation";
// import { routing } from "@/i18n/routing";
// import { getLangDir } from "rtl-detect";
// import NotAvailable from "@/MyComponents/notAvalable";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/MyComponents/navbar";
import { Footer } from "@/MyComponents/Footer";
import { notFound } from "next/navigation";
import { getLangDir } from "rtl-detect";
import { routing } from "@/i18n/routing";

// This will show up when you paste the website link as preview
export const metadata = {
  title: "Mario's Hauling",
  description: "Professional Hauling & Junk Removal Services",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Checks if the language is RTL ( right to left ) or not
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 w-full bg-black/10">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
