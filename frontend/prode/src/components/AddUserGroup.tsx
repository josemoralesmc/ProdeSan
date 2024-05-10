'use client'
import React, { useState } from "react"
import { Button } from "@nextui-org/react";
import TextField from "@mui/material/TextField";
import groupsService from '@/services/groupsService'


const AddUserGroupComponent = () => {
    const [idGroup, setIdGroup] = useState('')
    const [idUser, setIdUser] = useState('')
    return (
        <>
            <div className="flex items-center justify-center bg-white bg-opacity-75 rounded-2xl w-72 h-16">
                <TextField
                    className="w-60"
                    id="standard-basic"
                    label="Id del grupo"
                    variant="standard"
                    value={idGroup}
                    onChange={(e)=> setIdGroup(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-75 rounded-2xl w-72 h-16 mt-4">
                <TextField
                    className="w-60"
                    id="standard-basic"
                    label="Id del usuario"
                    variant="standard"
                    value={idUser}
                    onChange={(e)=> setIdUser(e.target.value)}
                />
            </div>

            <div>
                <Button onClick={() => groupsService.addUserGroup(idUser, idGroup)} className="bg-white/75 mt-4" radius="sm">Agregar</Button>
            </div>
        </>
    )
}

export default AddUserGroupComponent