import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useAuthMeQuery,
  useLogOutMutation,
} from "@/redux/features/auth/authApi";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TUser } from "@/types/types";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export function ProfileDropdown({ user }: { user: TUser }) {
  const dispatch = useAppDispatch();
  const { data } = useAuthMeQuery(undefined);
  const [logOut] = useLogOutMutation();
  const handleLogOut = async () => {
    dispatch(logout());
    toast.success("logout!");
    await logOut({});
  };

  return (
    <DropdownMenu>
      {/* profile image */}
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={data?.data?.profileImage || "https://github.com/shadcn.png"}
            alt="profile image"
          />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      {/* profile info */}
      <DropdownMenuContent className="w-56 mt-5 mr-20">
        {/* profile name */}
        <DropdownMenuItem className="flex flex-col items-center">
          <h1 className="w-full text-xl font-semibold text-center">
            {user.name.length > 15
              ? `${user?.name.slice(0, 10)}...`
              : user.name}
          </h1>
        </DropdownMenuItem>
        {/* menu */}
        <DropdownMenuItem>
          {}
          {user?.role === "admin" ? (
            <Link to={"/admin/dashboard"} className="w-full">
              <Button
                variant={"outline"}
                className="w-full hover:text-orange-500"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link to={"/user/dashboard"} className="w-full">
              <Button
                variant={"outline"}
                className="w-full hover:text-orange-500"
              >
                Dashboard
              </Button>
            </Link>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={handleLogOut}
            variant={"outline"}
            className="w-full text-white bg-orange-500 hover:bg-[#560e0e] hover:text-white"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
