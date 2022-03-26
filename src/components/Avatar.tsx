interface AvatarProps {
    url?: string,
}

export function Avatar({ url }: AvatarProps) {
    if(url) {
        return <img className="avatar-image" src={url} />;
    }
    return <div className="avatar-image placeholder-image"></div>
}