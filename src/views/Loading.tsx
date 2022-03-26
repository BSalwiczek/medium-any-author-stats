import { Alert, AlertTitle, CircularProgress, Typography } from "@mui/material";

interface LoadingProps {
    postsLoaded: number
}

export function LoadingView({postsLoaded} : LoadingProps) {
    return (
        <div className="center-view">
            <CircularProgress />
            <Typography mt={4} mb={2} fontSize={14}>Processed {postsLoaded} posts already.</Typography>
            <Alert severity="info" >
                <AlertTitle>We don't know how many posts are posted by author in total, until we load them all.</AlertTitle>
            </Alert>
        </div>
    );
}