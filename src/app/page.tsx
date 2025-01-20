export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start"></main>
      <footer className="bottom-0 row-start-3 flex flex-wrap items-center justify-center gap-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Farzad Barzin. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
