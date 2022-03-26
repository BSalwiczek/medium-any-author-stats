import { Typography } from "@mui/material";
import { Author } from "../types/Author";
import { Avatar } from "./Avatar";

interface BasicInfoProps {
    author: Author
}

export function BasicInfo({author}: BasicInfoProps) {
    const getMemberDate = (memberSince: number): string => {
        const date = new Date(memberSince);
        var datestring = date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
        return datestring;
    }
    
    return (
        <>
            <div className="user-display">
                <Avatar url={author.imageUrl} />
                <Typography fontSize={18} fontWeight={"bold"} mt={1}>{author.name}</Typography>
                <Typography fontSize={12}>@{author.username}</Typography>
            </div>
            <div className="basic-statistics">
                <Typography fontSize={14}><b>Followers:</b> {author.followers}</Typography>
                <Typography fontSize={14}><b>Total posts:</b> {author.posts.length} ({author.totalMemberOnlyPosts} locked)</Typography>
                <Typography fontSize={14}><b>Newsletter subscribers:</b> {author.newsletterSubscribers}</Typography>
                <Typography fontSize={14}><b>Member since:</b> {author.memberSince === 0 ? "Not a member" : getMemberDate(author.memberSince)}</Typography>
            </div>
        </>
    );
}