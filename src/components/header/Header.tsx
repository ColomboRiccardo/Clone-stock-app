import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/navItems/NavItems";
import UserDropdown from "@/components/userdropdown/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className={"container header-wrapper"}>
                <Link href={"/"}>
                    <Image src="/assets/icons/logo.svg" alt={"clone stock app logo"} width={100} height={100}/>
                </Link>
                <nav className={"hidden sm:block"}>
                    <NavItems/>
                </nav>
                <UserDropdown/>
            </div>
        </header>
    )
}
export default Header
