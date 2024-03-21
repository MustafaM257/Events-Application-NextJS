import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.svg";
const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image src={Logo} alt="Logo Image" width={128} height={38} />
        </Link>
        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  );
};

export default Navbar;
