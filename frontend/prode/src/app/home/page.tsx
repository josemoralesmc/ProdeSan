import Link from "next/link";
import NavBar from '@/app/NavBar'
export default function Home() {
  return (
    <div className="bg-blue-100 h-screen ">
      <div className="flex justify-center ml-3 mr-3 ">
        <div className="w-80 h-10 mb-4 mt-2 bg-white bg-opacity-75 rounded-2xl ">
          <h1 className="text-center mt-2">Ligas</h1>
        </div>
      </div>
      <Link href={'/results'}>
        <div className="flex justify-center">

        <div className=" h-36 w-28  shadow-lg mb-4 ml-3 mr-3 bg-white/75 rounded-2xl mt-5 justify-center content-center">
          <img
            src="data:image/png;base64,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"
            alt=""
            />
        </div>
            </div>
      </Link>
      <NavBar/>
    </div>
  );
}