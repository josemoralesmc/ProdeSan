import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import { Button } from "@nextui-org/react";

const CreateGroup = () => {
  return (
    <div className="h-screen flex flex-col items-center ">
      <div className="flex justify-center ml-3 mr-3">
        <div className="w-72 h-10 mb-4 mt-2 bg-white bg-opacity-75 rounded-2xl ">
          <h1 className="text-center mt-2">Unirme a un grupo</h1>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white bg-opacity-75 rounded-2xl w-72 h-16">
        <TextField
          className="w-60"
          id="standard-basic"
          label="Id del grupo"
          variant="standard"
        />
      </div>
      <div className="flex items-center justify-center bg-white bg-opacity-75 rounded-2xl w-72 h-16">
        <TextField
          className="w-60"
          id="standard-basic"
          label="Id del grupo"
          variant="standard"
        />
      </div>
      
      <div>
      <Button className="bg-white/75 mt-4" radius="sm">Unirme</Button>
      </div>
    </div>
  );
};

export default CreateGroup;
