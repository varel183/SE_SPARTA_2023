import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-grow items-center justify-center p-10 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl bg-white shadow-lg p-8 rounded-lg">
          <div className="flex flex-col items-start md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">Hi, I&apos;m Varel</h1>
            <h2 className="text-2xl text-gray-600">Second Year Student at Informatics Engineering at Bandung Institute of Technology</h2>
            <p className="text-lg text-gray-500">I am passionate about software engineering and cybersecurity, and I am eager to learn about AI.</p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="mailto:vareltiara@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/email_dark.png"
                  alt="mail"
                  width={40}
                  height={40}
                  className="hover:scale-125 transition-transform duration-400 ease-in-out"
                />
              </a>
              <a href="https://www.linkedin.com/in/varel-tiara" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/linkedin_dark.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="hover:scale-125 transition-transform duration-400 ease-in-out"
                />
              </a>
              <a href="https://github.com/varel183" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/github_dark.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="hover:scale-125 transition-transform duration-300 ease-in-out"
                />
              </a>
              <a href="/skills" className="group bg-gray-700 text-white py-2 px-4 rounded-md h-10 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-gray-800">
                RESUME 
                <span className="ml-2 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-0 ">
                  &gt;
                </span>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <Image
              src="/images/photo.jpg"
              alt="Varel"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </main>
      
    </div>
  );
}
