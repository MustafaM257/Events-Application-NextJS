import Logo from "@/public/assets/images/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src={Logo} alt="Logo Image" width={128} height={38} />
        </Link>
        <p className=" font-semibold shadow- shadow-2xl shadow-primary-500 hover:text-primary-500 cursor-pointer">
          {" "}
          Developed by Mustafa{" "}
        </p>
        <p>{year}. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
