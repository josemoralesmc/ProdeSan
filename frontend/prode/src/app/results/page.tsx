import React from "react";
import { Open_Sans } from "next/font/google";
import ListMatch from "@/components/ListMatch";
import NavBar from '@/app/NavBar'

const open = Open_Sans({ subsets: ["latin"], weight: "400" });

function Results() {
  return (
    <div className={open.className}>

        <ListMatch />
        <NavBar/>
      </div>
  );
}

export default Results;
