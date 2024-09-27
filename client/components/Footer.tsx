import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="flex flex-col text-black bg-gray-100  mt-10 border-t border-gray-200">
    <div className="flex flex-wrap justify-between max-md:flex-col gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image
          src="/logo1.png"
          alt="logo"
          width={118}
          height={18}
          className="object-contain rounded-md"
        />
        <p className="text-base text-black">
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="flex flex-wrap gap-5">
        <p> Contact us</p>
        <p>Europcar on mobile
        </p>
        <p>Find a rental location
        </p>  
        <p>Green policy </p>
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-600 sm:px-16 px-6 py-10">
      <p className="text-black">@2023 CarHub. All rights reserved</p>

      <div className="flex space-x-4">
        <Link href="/" className="text-black hover:text-gray-300">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-black hover:text-gray-300">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
