import Link from "next/link";
import React from "react";
import Image from "next/image";

const SideBar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="Prysm Logo"
            width={34}
            height={34}
          />
          <h1 className="sidebar-logo">Prysm</h1>
        </Link>
      </nav>
    </section>
  );
};

export default SideBar;
