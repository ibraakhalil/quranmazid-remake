"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/home/logo.png";
import supportImg from "@/public/images/home/support-us.png";
import SunSvg from "../icon/SunSvg";
import UserSvg from "../icon/UserSvg";
import IconContainer from "../common/icon-container";

interface HeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function Header({ ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className="sticky top-0 z-30 flex h-[--header-height] items-center justify-between bg-white px-4 py-4 shadow"
    >
      <div className="flex items-center">
        <Image src={logo} alt="logo" />
      </div>
      <nav className="flex space-x-8 text-sm">
        <Link className="text-gray-700 hover:text-gray-900" href="/">
          Home
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="/1">
          Read Quran
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          Jump Ayah
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          Watch Video
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          Blogs
        </Link>
      </nav>
      <div className="flex items-center gap-x-6">
        <IconContainer>
          <SunSvg />
        </IconContainer>
        <IconContainer>
          <UserSvg className="size-4" />
        </IconContainer>
        <button className="max-xl:hidden">
          <Image src={supportImg} alt="support us" />
        </button>
      </div>
    </header>
  );
}
