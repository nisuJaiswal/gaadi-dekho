import Link from "next/link";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between mx-auto px-6 sm:px-16 py-6 items-center max-w-[1440px]">
        <Link href={"/"}>
          {" "}
          <Image src="/logo.svg" alt="logo" width={120} height={60} />
        </Link>
        {/* <CustomButton
          title="Sign In"
          customStyles="text-black bg-gray-100 rounded-full"
        /> */}
      </nav>
    </header>
  );
};

export default Navbar;
