import type { Metadata } from "next";
import "./globals.css";

import ApolloClientProvider from "@/shared/utils/apollo/ApolloProvider";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Navbar } from "./_components/navbar";
import { AppSidebar } from "./_components/app-sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <ApolloClientProvider>
          <SidebarProvider>
            {false && <AppSidebar />}
            <div className="container flex flex-col w-full">
              <Navbar className="p-1 sticky top-0 z-10 bg-white" />
              <div className="mt-1">{children}</div>
            </div>
          </SidebarProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}