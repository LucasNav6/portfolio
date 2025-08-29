import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export function SpringAvatar() {
    return (
        <Avatar className="absolute w-screen left-0 pt-10 flex items-center justify-center z-10">
            <AvatarImage
                draggable={false}
                className="h-24 w-24 rounded-full overflow-hidden"
                src="https://avatars.githubusercontent.com/u/135039358?v=4"
                alt="Avatar"
            />
        </Avatar>
    )
}