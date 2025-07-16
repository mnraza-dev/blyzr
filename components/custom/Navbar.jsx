"use client";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggle";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="px-8 py-4 w-full flex justify-between">
      {mounted && (
        <Image
          src={resolvedTheme === "dark" ? "/logo.svg" : "/light-logo.svg"}
          alt="Logo"
          width={100}
          height={100}
        />
      )}
      <div className="flex gap-4">
        <Button variant={"ghost"}>Login</Button>
        <Button variant={"secondary"}>Getting Started</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
