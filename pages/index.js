import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

import IndexNavbar from "@app/src/components/Navbars/IndexNavbar";
import indexFooter from "@app/src/components/Footer/IndexFooter";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen ">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Bank MEGA - Training NEXT JS
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non augue sapien. Quisque hendrerit mauris arcu, ac dapibus velit rutrum ac. Nunc malesuada arcu in ex vestibulum rhoncus. Nam vulputate a nunc nec mattis. Integer ultricies metus nec dictum euismod. In hac habitasse platea dictumst. Fusce eleifend imperdiet augue, vitae porta ex tempor ac. Curabitur eu consequat justo. Cras in metus at eros pulvinar euismod non ut risus. Curabitur at ex purus. Curabitur venenatis mattis erat non aliquam. Etiam nec lorem sit amet lorem suscipit fringilla et quis orci.
               
              </p>
              <div className="mt-12"></div>
            </div>
          </div>
        </div>
        {/* <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="assets/img/pattern_nextjs.png"
          alt="..."
        /> */}
      </section>

      

      
     <indexFooter />
    </>
  );
}
