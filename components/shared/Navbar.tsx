import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.svg";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image src={Logo} alt="Logo Image" width={128} height={38} />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild className="rouded-full" size={"lg"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
