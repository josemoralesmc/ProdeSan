import React from "react";
import MatchResult from '@/types/types';


const ItemMatch = ({ matchResults }: { matchResults: MatchResult[] }) => {

  return (
    <ul>
      {matchResults.map((result: any, index: number) => (
        <li
          key={index}
          className=" h-20 shadow-lg mb-4 ml-3 mr-3 bg-white/75 rounded-2xl flex justify-around"
        >
          <div className=" justify-center mt-3 ">
          {/*   <img
              className="size-7 ml-1 mb-1"
              src={result.teamsPhoto[0]}
              alt={result.teamsName[0]}
            />
            <img
              className=" ml-1 size-7 "
              src={result.teamsPhoto[1]}
              alt={result.teamsName[1]}
            /> */}
          </div>
          <div className="justify-center ml-4 mt-4 min-w-48 max-[424px]:min-w-24 max-[424px]:ml-1">
            <p className="mb-2 max-[424px]:text-xs">{result.teamsName[0]}</p>
            <p className="max-[424px]:text-xs ">{result.teamsName[1]}</p>
          </div>
          {result.resultMatch[0] === "-" ? (
            <div className="flex flex-col  mt-3">
              <input
                className="mb-2 border-2 rounded-md border-slate-600 w-5"
                type="number"
              />
              <input
                className="mb-2 border-2 rounded-md border-slate-600 w-5"
                type="number"
              />
            </div>
          ) : (
            <div className="justify-center mt-4 max-[424px]:min-w-28">
              <p className="max-[424px]:text-xs mb-2">{result.resultMatch[0]}</p>
              <p className="max-[424px]:text-xs ">{result.resultMatch[1]}</p>
            </div>
          )}

          <div className="min-w-36  mt-5  max-[424px]:min-w-28">
            <p className="text-center text-sm max-[424px]:text-xs">{result.matchDate[0]}</p>
            <p className="text-center text-sm max-[424px]:text-xs ">{result.matchDate[1]}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemMatch