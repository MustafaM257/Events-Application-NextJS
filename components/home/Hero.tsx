import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroImage from "@/public/assets/images/hero.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Your NetWorth is your NetWork!</h1>
          <p className="p-regular-20 md:p-regular-24">
            Book and learn helpful tips from our experts to help you grow your
            in a world class environment. Let's help you grow your network and
            networth.
          </p>
          <Button size={"lg"} asChild className="button w-full sm:w-fit">
            <Link href="#events">Get Started</Link>
          </Button>
        </div>
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={1024}
          height={1024}
          className="max-h-[70vh] objectd-contain object-center 2xl:max-h-[50vh]"
        />
      </div>
    </section>
  );
};

export default Hero;
