import { Button } from "@nextui-org/react";
import TablePoints from "@/components/TablePoints";
import ComponentPrediction from "@/components/ComponentPrediction";

export default function Group({params}: any) {
  return (
    <>
     <div className="flex flex-col items-center">
        <div className="w-80 h-10 ml-4 mb-4 mt-2 bg-white bg-opacity-75 rounded-2xl">
          <h1 className="text-center mt-2">Grupo</h1>
        </div>
        <TablePoints params={params.groupId} />
        <ComponentPrediction params={params.groupId}/>
      </div>
    </>
  );
}
