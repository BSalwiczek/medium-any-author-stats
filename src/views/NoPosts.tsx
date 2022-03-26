import { Alert, AlertTitle } from "@mui/material";
import { ContactLink } from "../components/ContactLink";

export function NoPostsView() {
    return (
        <div className="center-view">
            <div style={{textAlign: "center"}}>
                <Alert severity="warning" variant="filled">
                    <AlertTitle>User is not an author - he has no posts yet.</AlertTitle>
                    Do you want to see partial data for users with no posts? <ContactLink />
                </Alert>
            </div>
        </div>
    );
}