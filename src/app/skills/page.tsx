"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Skills() {
  return (
    <section id="skills" className="p-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/html-5.png"
              alt="html"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">HTML</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/css-3.png"
              alt="css"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">CSS</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/js.png"
              alt="javascript"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">Javascript</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/python.png"
              alt="python"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">Python</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/typescript.png"
              alt="typescript"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">Typescript</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/next.png"
              alt="next"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">Next</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/github.png"
              alt="github"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">Github</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/haskell.png"
              alt="haskell"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">Haskell</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/openCV.png"
              alt="haskell"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">OpenCV</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/tailwind.jpeg"
              alt="haskell"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">Tailwind CSS</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center mb-4 w-full max-w-xs hover:scale-110 transition-transform duration-300 ease-in-out">
            <Image  
              src="/images/figma.png"
              alt="haskell"
              width={64}
              height={64}
            />
            <h3 className="ml-5 text-2xl font-bold">Figma</h3>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button onClick={() => window.open("https://docs.google.com/document/d/1UmsBbJSF6-k_dq1BR2QOaCVJ1283RVi6/edit?usp=sharing&ouid=106186770542532066311&rtpof=true&sd=true", "_blank")}>Resume</Button>
        </div>
      </div>
    </section>
  );
}