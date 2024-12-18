import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src="/images/bits-please-logo.svg" // Corrected src path (assuming in `public/images`)
          alt="bits-please-Logo"
          width={150}
          height={150}
        />
      </div>
    </main>
  );
}
