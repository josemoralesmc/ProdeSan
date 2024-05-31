import React from "react";
import predictService from "@/services/predictService";
import ItemMatchPrediction from "./ItemMatchPrediction";
import { cookies } from "next/headers";

async function matchResult() {
  const data = await predictService.matchResultNextDate();
  return data;
}
const PredictionUser = async (params: any) => {
  const cookieStore = cookies();
  const token = cookieStore.get("Token");
  const result = await matchResult();
  return (
    <>
      <ItemMatchPrediction matchResults={result} params={params} token={token} />
      
    </>
  );
};

export default PredictionUser;
