type NavbarWelcomeTextProps = {
	userName: string;
};

export function NavbarWelcomeText({ userName }: NavbarWelcomeTextProps) {
	return (
		<div>
			<h2>Welcome back, {userName}</h2>
			<p>Here's what's happening with your ISP Today</p>
		</div>
	);
}
