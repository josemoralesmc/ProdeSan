'use client'
import React, {useState} from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import { Button } from "@nextui-org/react";

const CreateGroup = () => {
    
  return (
    <div className="h-screen flex flex-col items-center ">
     
      <div>
        <div className="flex items-center justify-center bg-white bg-opacity-75 rounded-2xl w-72 h-16 mb-4">
          <TextField
            className="w-60"
            id="standard-basic"
            label="Nombre del grupo"
            variant="standard"
          />
        </div>
        <div className="flex items-center justify-center bg-white bg-opacity-75 rounded-2xl w-72 h-16">
          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Liga
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>LPF</option>
                <option value={20}>Premier League</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div>
          <Button className="bg-white/75 mt-4" radius="sm">
            Crear Grupo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
