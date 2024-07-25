import Link from "next/link";
import Button from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-blue-100">
            <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-square-pattern p-10 md:p-24">
                <div className="w-full max-w-2xl grid place-items-center gap-5">
                    <div className="relative">
                        <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tighter">
                            Starter Neo-Brutalism
                        </h1>
                    </div>
                    <p className="font-medium text-sm md:text-lg text-center tracking-tighter">
                        with Next.js, Tailwind CSS, Shadcn UI, TypeScript, ESLint, and Prettier.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2.5 md:gap-5">
                        <Link href="https://github.com/aesticodes">
                            <Button variant="blue" rounded="none">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
