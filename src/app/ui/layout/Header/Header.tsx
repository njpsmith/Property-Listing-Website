"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="site-header-container">
      <div className="site-header-container__inner">
        <Link href="/">
          <Image
            className="site-logo"
            src={"images/Frontdoor-House-Logo.svg"}
            width={2161}
            height={728}
            alt="Frontdoor Logo"
          />
        </Link>

        <nav className="flex-1 text-right">
          <ul className="flex justify-end gap-8">
            <li
              className={`hidden sm:block ${pathname === "/" ? "active" : ""}`}
            >
              <Link href="/">Homepage</Link>
            </li>
            <li className={pathname === "/properties" ? "active" : ""}>
              <Link href="/properties">Find Properties</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
