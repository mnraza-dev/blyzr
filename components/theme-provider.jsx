"use client";

import React , {useState}from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MessagesContext } from "@/context/MessagesContext";
import { UserDetailContext } from "@/context/UserDetailContext";

export function ThemeProvider({ children }) {
  const [messages, setMessages] = useState();
  const [userDetail, setUserDetail] = useState();

  return (
    <UserDetailContext.Provider value={{}}>
      <MessagesContext.Provider value={{ messages, setMessages }}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </MessagesContext.Provider>
    </UserDetailContext.Provider>
  );
}
