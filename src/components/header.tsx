import React from 'react';
import clsx from 'clsx';
import { CKLogo } from './icons/logos';
import { Link } from 'react-router';

export function Header({
	className,
	children,
}: React.ComponentProps<'header'>) {
	return (
		<header
			className={clsx(
				'h-13 shrink-0 w-full px-4 border-b flex items-center',
				className,
			)}
		>
			<h1 className="flex items-center gap-2 mx-4">
				<Link to="/">
					<CKLogo
						className="h-8 w-8"
						aria-label="Kliq AI"
					/>
				</Link>
			</h1>
			<div className="flex-1"></div>
			<div className="flex items-center gap-4">
				{children}
			</div>
		</header>
	);
}
