import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-4 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/me.png"
          width={50}
          height={50}
          alt="meet-me logo"
          className="max-sm:size-10"
        />
        <p className="text-[30px] font-extrabold text-transparent italic bg-clip-text bg-gradient-to-r from-sky-400 to-orange-500 max-sm:hidden">
    MeetMe
</p>

      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
