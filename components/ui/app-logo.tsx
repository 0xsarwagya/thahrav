import Image from "next/image";
import Link from "next/link";

export const AppLogo = () => {
    return (
        <Link href={'/'} className="flex items-center">
            <Image
                width={32} height={32}
                priority
                loading="eager"
                src={'/logos/white-bg.png'}
                alt="Thahrav Shop" className="w-10 h-10 dark:hidden"
            />
            <Image
                width={32} height={32}
                priority
                loading="eager"
                src={'/logos/dark-bg.png'}
                alt="Thahrav Shop" className="w-10 h-10 hidden dark:block"
            />
            <span className="font-bold text-xl ml-2">Thahrav</span>
        </Link>
    );
}