import { getAllInterests } from "@/lib/interests";
import Link from "next/link";

export default function InterestsList() {
  const interests = getAllInterests();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Interests
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond coding, here are the things that inspire and drive my
            creativity.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest) => (
            <div
              key={interest.slug}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                <Link
                  href={`/interests/${interest.slug}`}
                  className="hover:underline"
                >
                  {interest.title}
                </Link>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {interest.description}
              </p>
              <Link
                href={`/interests/${interest.slug}`}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                Learn more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
