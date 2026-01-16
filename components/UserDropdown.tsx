"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowBigDown, ChevronDown, LogOut, LogOutIcon } from "lucide-react";

const UserDropdown = () => {
  const router = useRouter();
  const user = {
    name: "Aimable.R",
    email: "aimable.r@example.com",
    avatarUrl: "https://github.com/shadcn.png",
  };
  const handleSignOut = async () => {
    router.push("/sign-in");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatarUrl} alt="User Avatar" />
            <AvatarFallback className="bg-yellow-500 text-sm font-bold text-yellow-900">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="hidden flex-col items-start md:flex">
            {/* <span className="text-base font-medium text-gray-400">
              {user.name.charAt(0)}
            </span> */}
            <ChevronDown className="h-4 w-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>
          <div className="relative flex items-center gap-2 py-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatarUrl} alt="User Avatar" />
              <AvatarFallback className="bg-yellow-500 text-sm font-bold text-yellow-900">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-col items-start md:flex">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-md cursor-pointer font-medium text-gray-100 transition-colors focus:bg-transparent focus:text-yellow-500"
        >
          <LogOut className="mr-2 hidden h-4 w-4 sm:block" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
