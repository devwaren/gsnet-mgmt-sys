import { useNavigate } from "@tanstack/react-router";

import { authClient } from "#/lib/client/sdk/better-auth/index.ts";
import {
  NavbarLinks,
  NavbarLogo,
  NavbarNotify,
  NavbarProfile,
  NavbarSearch,
  NavbarSettings,
} from "./components";

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    return authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/login" });
        },
      },
    });
  };

  return (
    <header className="px-4 py-2 flex items-center justify-between text-gray-700 max-w-440 mx-auto">
      <NavbarLogo />
      <NavbarLinks />
      <div className="flex items-center space-y-4 justify-center mt-5">
        <NavbarSearch />
        <NavbarSettings />
        <NavbarNotify />
        <NavbarProfile avatarName="/profile.webp" onLogout={handleLogout} />
      </div>
    </header>
  );
}
