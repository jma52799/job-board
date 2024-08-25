import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Background from "@/components/background";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchContextProvider from "@/contexts/search-context-provider";
import JobsContextProvider from "@/contexts/jobs-context-provider";
import BookmarkContextProvider from "@/contexts/bookmark-context-provider";
import { Toaster } from "@/components/ui/sonner";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Board - Real Jobs",
  description: "Find real jobs",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} text-sm text-zinc-900 bg-stone-400 min-h-screen overscroll-none`}>
        <Background />
        <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
          <Header />
              <Providers>
                <SearchContextProvider>
                  <JobsContextProvider>
                    <BookmarkContextProvider>{children}</BookmarkContextProvider>
                  </JobsContextProvider>   
                </SearchContextProvider>
              </Providers>
          <Footer />
        </div>

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
