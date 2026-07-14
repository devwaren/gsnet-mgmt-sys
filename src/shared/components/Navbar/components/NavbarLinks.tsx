import { Mapper } from "#/shared/components";
import { adminLinks } from "../constants";
import { NavLink } from "./NavLink";

const navbarLinkProps = {
	listFor: "Navbar Links",
	items: adminLinks,
	className: "space-x-8 hidden md:flex",
};

export function NavbarLinks() {
	return (
		<Mapper {...navbarLinkProps}>{(item) => <NavLink {...item} />}</Mapper>
	);
}
