"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Open_Sans } from "next/font/google";
import ItemMatch from "@/components/ItemMatch";
import MatchResult from "@/types/types";
import LoadingPage from "@/app/loading";

const open = Open_Sans({ subsets: ["latin"], weight: "400" });

function ListMatch() {
    const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
          setLoading(false)
        try {
          const result = await fetch(
            "http://localhost:8080/Leagues/LigaProfesional"
          );
          const data = await result.json();
  
          setMatchResults(data);
          setLoading(true)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
 

  return (
    <>
    {loading ? <div className={open.className}>
      <div className="bg-blue-100 mb-16">
          <div className="flex justify-center ">
            <div className="w-80 h-10 mb-4 mt-2 bg-white bg-opacity-75 rounded-2xl ">
              <h1 className="text-center mt-2">
                {/* {matchResults.length > 0
                  ? matchResults[0].tournamentDate[0]
                  : ""} */} Fecha 8
              </h1>
            </div>
          </div>
          <ul className="flex-col ">
            <ItemMatch matchResults={matchResults} />
          </ul>
          <div className="flex justify-center items-center">
            <Button className="mb-3 rounded-full" variant="contained">
              Guardar
            </Button>
          </div>
      </div>
    </div> : <LoadingPage/>}
    
                  </>
  );
}

export default ListMatch;
