import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import groupsService from "@/services/groupsService";
import { cookies } from "next/headers";

async function getGroups(token: any, groupId: string) {
  const data = await groupsService.getGroupsId(token, groupId);
  console.log(data);
  
  return data;
}

const TablePoints = async (params: any) => {
  const cookieStore = cookies();
  const token = cookieStore.get("Token");
  const data = await getGroups( token?.value, params)
  console.log(data);
  
  return (
    <div className="w-64 mx-auto">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Usuario</TableCell>
            <TableCell>Puntos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Hola
            </TableCell>
            <TableCell>123</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default TablePoints