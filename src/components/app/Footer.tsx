import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Footer() {
    return (
        <footer className="bg-white w-full py-4 md:px-8 md:py-0 border-t-4 border-black shadow-[4px_-4px_0px_0px_rgba(0,0,0,1)]">
            <div className="container mx-auto flex flex-col items-center justify-between gap-2 md:h-16 md:flex-row">
                <div className="text-black font-bold text-lg">
                    © 2024 Aesticode Inc.
                </div>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <Link href="https://github.com/aesticodes" passHref>
                        <GitHubLogoIcon className="w-6 h-6 text-black" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}