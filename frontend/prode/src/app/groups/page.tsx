import ListGroup from "@/components/ListGroup";
import { Button } from "@nextui-org/react";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="bg-blue-100 h-screen ">
      <div className="flex justify-center ml-3 mr-3 ">
        <div className="w-80 h-10 mb-4 mt-2 bg-white bg-opacity-75 rounded-2xl ">
          <h1 className="text-center mt-2">Mis grupos</h1>
        </div>
      </div>
      <div>
        <ListGroup /> 
      </div>
      <div className="flex justify-center">
        <div>
          <Link href={"/groups/create"}>
          <Button className="bg-white/75" radius="sm">Crear grupo </Button>
          </Link>
        </div>
        <div>
          <Link href={"/groups/join"}>
          <Button className="bg-white/75 ml-8" radius="sm">Unirse a un grupo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
