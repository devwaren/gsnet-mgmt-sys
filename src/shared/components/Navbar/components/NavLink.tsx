import { Link } from "@tanstack/react-router";
import type { Key } from "react";

type Props = {
	id: Key;
	name: string;
	path: string;
	className?: string;
};

export function NavLink({ name, path, className }: Props) {
	return (
		<Link to={path} className={className}>
			{name}
		</Link>
	);
}
