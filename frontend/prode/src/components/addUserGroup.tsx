'use client'
import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import groupsService from "@/services/groupsService";
import { Button } from "@nextui-org/react";

 const addUserGroupComponent = () => {

    const [groupId, setGroupId] = useState("")

  return (
    <div>
      <div className="flex items-center justify-center bg-white bg-opacity-75 rounded-2xl w-72 h-16">
        <TextField
          className="w-60"
          id="standard-basic"
          label="Id del grupo"
          variant="standard"
          value={groupId}
          onChange={(e) => {setGroupId(e.target.value)}}
        />
      </div>
       <div>
        <Button
          onClick={() => {
            groupsService.addUserGroup(groupId);
          }}
          className="bg-white/75 mt-4"
          radius="sm"
        >
          Agregar Usuario
        </Button>
      </div>
    </div>
  );
};

export default addUserGroupComponent