import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center -mt-8">
          {/* Profile Image */}
          <div className="flex justify-center items-center mb-8">
            <div className="relative w-32 h-32 mx-auto">
              <Image
                src="/Rohan1.jpg"
                alt="Rohan's Profile"
                fill
                className="rounded-full object-cover object-center shadow-lg border-4 border-white dark:border-gray-600"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Rohan Khalate
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light">
            Full Stack Developer & Designer
          </p>

          {/* About Me */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a second-year Computer Science Engineering student at
              MIT-WPU College, passionate about creating beautiful, functional
              web experiences. With expertise in modern technologies, I bring
              ideas to life through clean code and thoughtful design.
            </p>
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <SocialLinks />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
