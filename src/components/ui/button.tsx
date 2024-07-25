"use client";
import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-1 font-medium transition-all border-2 border-black active:translate-x-[3px] active:translate-y-[3px] active:shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    {
        variants: {
            variant: {
                default: "bg-gray-400",
                red: "bg-red-500",
                blue: "bg-blue-500",
                green: "bg-green-500",
                yellow: "bg-yellow-500",
                pink: "bg-pink-500",
                dark: "bg-zinc-900 text-white",
                light: "bg-zinc-50",
            },
            size: {
                default: "h-10 py-2 px-4 text-sm md:text-lg",
                sm: "h-9 px-2 text-sm md:text-lg",
                lg: "h-10 md:h-12 px-5 md:px-8 text-sm md:text-lg",
            },
            rounded: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                full: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "lg",
            rounded: "sm",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, href, variant, size, rounded, ...props }, ref) => {
        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(
                        buttonVariants({ variant, rounded, size, className })
                    )}
                >
                    {children}
                </Link>
            );
        }
        return (
            <button
                className={cn(
                    buttonVariants({ variant, rounded, size, className })
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;