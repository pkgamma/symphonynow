import React from "react";
import Sidebar from "@/components/sidebar";
import Center from "@/components/center";
import Player from "@/components/player";

export default function HomePage() {
  return (
    <div className="">
      <main className="grid lg:grid-cols-6">
        <Sidebar className="col-span-1" />
        <Center className="col-span-4" />
        <Player />
      </main>
    </div>
  );
}
