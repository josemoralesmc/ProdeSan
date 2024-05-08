'use client'
import React, {useState} from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import { Button } from "@nextui-org/react";
import groupsService from '@/services/groupsService'

const CreateGroup = () => {
    const [nameGroup, setNameGroup] = useState("")
    const [leagueId, setLeagueId] = useState("")
  return (
    <div className="h-screen flex flex-col items-center ">
     
      <div>
        <div className="flex items-center justify-center bg-white bg-opacity-75 rounded-2xl w-72 h-16 mb-4">
          <TextField
            className="w-60"
            id="standard-basic"
            label="Nombre del grupo"
            variant="standard"
            value={nameGroup}
            onChange={(e) => setNameGroup(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center bg-white bg-opacity-75 rounded-2xl w-72 h-16">
          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Liga
              </InputLabel>
              <NativeSelect
                value={leagueId}
                onChange={(e) => setLeagueId(e.target.value)}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={"LPF"}>LPF</option>
                <option value={"premier"}>Premier League</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div>
          <Button onClick={async () =>{const response = await groupsService.createGroup(nameGroup, leagueId)
      
          }} className="bg-white/75 mt-4" radius="sm">
            Crear Grupo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
