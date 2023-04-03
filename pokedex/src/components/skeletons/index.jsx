import { Skeleton } from "@mui/material";
import React from "react";

export const Skeletons = () => {
    return (
        <>
            <Skeleton animation="wave" variant="rounded" width={345} height={60} />
            <Skeleton animation="wave" variant="rounded" width={210} height={60} />
            <Skeleton animation="wave" variant="rounded" width={210} height={60} />
        </>
    )
}