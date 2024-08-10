import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="p-6 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-2/5 p-4 relative h-96">
          <Image 
            src="/images/profile.jpg" 
            alt="Varel" 
            layout='fill'
            objectFit='cover'
            className="rounded-2xl"
          />
        </div>
        <div className="w-full md:w-3/5 p-4">
          <h2 className="text-3xl font-bold mb-4">About Me</h2> 
          <p className="text-lg mb-4">
            I am Varel Tiara, a second-year student at the Bandung Institute of Technology, majoring in Informatics Engineering. My passion lies in software engineering, cybersecurity, and artificial intelligence. I am constantly seeking new challenges and opportunities to grow.
          </p>
          <p className="text-lg mb-4">
            I believe in continuous learning and am committed to applying my skills to create innovative solutions. In my free time, I enjoy exploring new technologies, reading books, and participating in community activities.
          </p>
          <p className="text-lg  mb-4">
            My goal is to leverage my technical expertise and creativity to contribute positively to the field of technology and society.
          </p>
          <a href="/projects" className='underline text-blue-800'>
            Check out some of my latest projects.
          </a>
        </div>
      </div>
    </section>
  );
}
