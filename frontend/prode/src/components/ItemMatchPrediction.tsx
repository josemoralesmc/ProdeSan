"use client";
import React, { useEffect, useState } from "react";
import MatchResult from "@/types/types";
import Button from "@mui/material/Button";
import predictService from "@/services/predictService";
import groupsService from "@/services/groupsService";

async function getGroup(token: any, groupId: string) {
  const data = await groupsService.getGroupsId(token, groupId);
  const leagueId = data.data[0].LeagueId;
  return leagueId;
}

const ItemMatchPrediction = ({ matchResults, params, token }: { matchResults: MatchResult[], params: any, token: any }) => {
  const [leagueId, setLeagueId] = useState<string | null>(null);
  const [inputValuesPredict, setInputValuesPredict] = useState(matchResults.map(() => ["", ""]));

  useEffect(() => {
    const fetchLeagueId = async () => {
      const leagueId = await getGroup(token?.value, params.params);
      setLeagueId(leagueId);
    };

    fetchLeagueId();
  }, []);

  

  const dateNumber = matchResults[0].tournamentDate[0].split(' ')[1];
  const groupId = params.params;

  const handleInputChange = (index: any, teamIndex: any, value: any) => {
    const newValues = [...inputValuesPredict];
    newValues[index][teamIndex] = value;
    setInputValuesPredict(newValues);
  };

  return (
    <ul>
      {matchResults.map((result: any, index: number) => (
        <li
          key={index}
          className="h-20 min-w-80 shadow-lg mb-4 ml-6 mr-3 bg-white/75 rounded-2xl flex justify-around"
        >
          <div className="justify-center mt-3">
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
            <p className="max-[424px]:text-xs">{result.teamsName[1]}</p>
          </div>
          {result.resultMatch[0].trim() === "" ? (
            <div className="flex flex-col mt-3">
              <input
                className="mb-2 border-2 rounded-md border-slate-600 w-5"
                type="number"
                value={inputValuesPredict[index][0]}
                onChange={(e) => handleInputChange(index, 0, e.target.value)}
              />
              <input
                className="mb-2 border-2 rounded-md border-slate-600 w-5"
                type="number"
                value={inputValuesPredict[index][1]}
                onChange={(e) => handleInputChange(index, 1, e.target.value)}
              />
            </div>
          ) : (
            <p>{result.resultMatch[0]}</p>
          )}

          <div className="min-w-36 mt-5 max-[424px]:min-w-28">
            <p className="text-center text-sm max-[424px]:text-xs">
              {result.matchDate[0]}
            </p>
            <p className="text-center text-sm max-[424px]:text-xs">
              {result.matchDate[1]}
            </p>
          </div>
        </li>
      ))}
      <div className="flex justify-center items-center">
        <Button
          onClick={ () => {
            if (leagueId) {
               predictService.SavePredict(leagueId, groupId, dateNumber, inputValuesPredict, token.value);
            }
          }}
          className="mb-3 rounded-full"
          variant="contained"
        >
          Guardar
        </Button>
      </div>
    </ul>
  );
};

export default ItemMatchPrediction;
