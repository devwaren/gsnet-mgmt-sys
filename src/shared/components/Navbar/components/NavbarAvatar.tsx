type Props = {
	avatarName: string;
};

export function NavbarProfile({ avatarName }: Props) {
	return (
		<div className="h-8 w-8 overflow-hidden rounded-full -mt-3">
			<img
				src={avatarName}
				alt="Profile"
				className="h-full w-full object-cover object-center"
			/>
		</div>
	);
}
