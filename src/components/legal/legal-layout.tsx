import { ReactNode } from "react";

export function LegalHero({
  title,
  lastUpdated,
}: {
  title: string;
  lastUpdated: string;
}) {
  return (
    <section className="bg-navy py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/dotted-world-map.svg')] bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none" />
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
          {title}
        </h1>
        <p className="text-sm text-gray-300">Last updated: {lastUpdated}</p>
      </div>
    </section>
  );
}

export function LegalTableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav
      aria-label="Table of contents"
      className="bg-[#F5F9FF] border border-slate-100 rounded-2xl p-6 sm:p-7 mb-12"
    >
      <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
        On this page
      </h2>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-royal-blue hover:text-navy hover:underline transition-colors"
            >
              {index + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-navy mb-4 font-serif">
        {title}
      </h2>
      <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-royal-blue [&_a]:hover:underline [&_strong]:text-slate-800">
        {children}
      </div>
    </section>
  );
}

export function LegalPageBody({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
