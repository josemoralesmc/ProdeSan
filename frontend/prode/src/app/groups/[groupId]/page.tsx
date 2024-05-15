
import TablePoints from "@/components/TablePoints";

export default function Group({params}: any) {
  return (
    <TablePoints params={params.groupId}/>
  );
}
