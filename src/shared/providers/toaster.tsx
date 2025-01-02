"use client"
import { Toaster } from "sonner";


export const ToasterProvider = () => {
    return (
      <Toaster
        toastOptions={{
          duration: 5000, // Adjust duration (5 seconds by default)
        }}
        richColors
      />
    );
}