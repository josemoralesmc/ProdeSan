import React from "react";
import Button from "@mui/material/Button";
import { Open_Sans } from "next/font/google";
import ItemMatch from "@/components/ItemMatch";
import predictService from "@/services/predictService";

const open = Open_Sans({ subsets: ["latin"], weight: "400" });

async function matchResult() {
  const data = await predictService.matchResult();
  return data;
}

async function ListMatch() { 
  const results = await matchResult()
  
  return (
    <>
    <div className={open.className}>
      <div className="bg-blue-100 mb-16">
          <div className="flex justify-center ">
            <div className="w-80 h-10 mb-4 mt-2 bg-white bg-opacity-75 rounded-2xl ">
              <h1 className="text-center mt-2">
                {results[0].tournamentDate[0]
                  ? results[0].tournamentDate[0]
                  : "Sin Datos"}
              </h1>
            </div>
          </div>
          <ul className="flex-col ">
            <ItemMatch matchResults={results} />
          </ul>
      </div>
    </div>
    
                  </>
  );
}

export default ListMatch;
