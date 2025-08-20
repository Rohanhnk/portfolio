import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/profile.jpg" // Add your profile image to public folder
              alt="Profile"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-white"
              priority
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Rohan Khalate
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
            Full Stack Developer & Designer
          </p>

          {/* About Me */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
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
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
