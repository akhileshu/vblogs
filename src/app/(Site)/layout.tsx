import { AppSidebar } from "@/shared/components/app/app-sidebar";
import { Navbar } from "@/shared/components/app/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <SidebarProvider>
          {false && <AppSidebar />}
          <div className="container flex flex-col w-full">
            <Navbar className="p-1 sticky top-0 z-10 bg-white" />
            <div className="mt-1">{children}</div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
