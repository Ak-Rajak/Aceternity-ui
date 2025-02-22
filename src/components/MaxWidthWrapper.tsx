import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export function MaxWidthWrapper({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) {
	return (
		<div
			className={cn(
				"mx-auto w-full max-w-screen-xl px-2.5 md:px-20 min-h-screen",
				className
			)}
		>
			{children}
		</div>
	);
}
