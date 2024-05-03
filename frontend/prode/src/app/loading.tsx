import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function loading() {
  return (
    <div className="flex items-center justify-center bg-blue-100 h-screen">
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

        <Skeleton className="" variant="rounded" width={400} height={60} />
        <Skeleton variant="rounded" width={400} height={60} />
        <Skeleton variant="rounded" width={400} height={60} />
        <Skeleton variant="rounded" width={400} height={60} />
        <Skeleton variant="rounded" width={400} height={60} />
        <Skeleton variant="rounded" width={400} height={60} />
        <Skeleton variant="rounded" width={400} height={60} />
      </Stack>
    </div>
  );
}
