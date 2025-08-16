import Container from "./core/Container";
import Link from "next/link";
import Image from "next/image";

export default function FooterLinks() {
  return (
    <div className="bg-black text-white py-12">
      <Container>
        <div className="flex justify-between mb-8">
          <div className="relative w-48 h-28 bg-gray-100 rounded">
            <Image src="/images/logo.png" alt="Prabhu Ji Logo" fill className="mb-6" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent border border-gray-700 rounded-md py-3 pl-10 pr-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500 min-w-72"
              />
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-black font-medium py-3 px-8 rounded-md">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Company Column */}
          <div className="flex flex-col gap-4">
            <p className="text-sm opacity-80">
              We work with passion of taking challenges and creating new ones in advertising any
              ready more sector.
            </p>
            <a href="mailto:infor@parbhujistudyabroad.com" className="text-sm font-semibold mt-4">
              infor@parbhujistudyabroad.com
            </a>
          </div>

          {/* Our Services Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium mb-4">Our Services</h3>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Just-In-Time delivery
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Time based service levels
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Ware housing
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              stock transparency
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Transport consolidation
            </Link>
          </div>

          {/* Industry Sectors Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium mb-4">Industry Sectors</h3>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Electronics Industry
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Industrial & Manufacturing
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Semicon & Solar
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Oil & Gas Cargo
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Energy & Chemicals
            </Link>
          </div>

          {/* Useful Links Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium mb-4">Usefull links</h3>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              How it Works
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Help Link
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Contact Us
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
