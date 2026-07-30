import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFF8E8] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <Image
          src="/images/logo.png"
          alt="The Honey Guy"
          width={120}
          height={120}
          className="mx-auto"
        />

        <p className="mt-10 uppercase tracking-[0.35em] text-[#A96A08] text-sm">
          404
        </p>

        <h1 className="mt-5 text-5xl font-bold text-[#2B2117]">
          Hive Not Found
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-8">
          Looks like this page flew away.
          <br />
          Let's get you back to the hive.
        </p>

        <Link
          href="/"
          className="inline-block mt-12 rounded-full bg-[#D89B1D] px-8 py-4 text-white font-semibold hover:bg-[#A96A08] transition"
        >
          Return Home
        </Link>

      </div>
    </main>
  );
}