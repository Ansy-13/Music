import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"


function Footer() {
  return (
    <div className="bg-black ">
        <div className="grid grid-cols-2  md:flex md:justify-around">
            <div>
                <h1 className="text-3xl font-bold text-teal-500 ">About Us</h1>
                <h1 className="mt-3 text-left p-1 md:max-w-[300px] text-white">Music school Is a premier institution dedicated to teaching  the art and science of music. We nurture Talent From the ground up , fostering a vibrant community of musicians  </h1>

            </div>
            <div className="ml-14">
               <h1 className="text-teal-500 text-3xl  font-bold">Quick Link</h1>

                    <div className="grid grid-cols-1 space-y-7 ml-6 mt-5">
                <Link href={"/"} className="text-white"> Home</Link>
                <Link href={"/"} className="text-white"> Courses</Link>
                <Link href={"/"} className="text-white"> Contact</Link>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-teal-500 ">Follow Us</h1>
                <div className="flex flex-row gap-5">
                <Instagram color="#fff" strokeWidth={2.25} absoluteStrokeWidth className="h-10 mt-2" />
                <Facebook color="#fff" strokeWidth={2.25} absoluteStrokeWidth className="h-10 mt-2" />
                </div>

            </div>
            <div className="ml-16">
                <h1 className="text-teal-500 text-3xl  font-bold ">Contact-Us</h1>
                <ul className="md:mt-3 mt-3 text-white">
                    <li>Karachi,Pakistan</li>
                    <li>Karachi,Governor-House</li>
                    <li>Gmail:demo@gmail.com </li>
                    <li>Phone:+92 3324189</li>
                </ul>
                </div>
        </div>
    </div>
  )
}

export default Footer