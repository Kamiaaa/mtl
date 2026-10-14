import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeAre() {
  return (
    <section className="bg-[#F9F9F9] py-16 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center font-sans">
      <div className="max-w-6xl mx-auto w-full space-y-16 md:space-y-0">
        
        {/* Top Row: Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative w-full aspect-16/10 overflow-hidden rounded-sm shadow-sm">
            <Image
              src="/img/right.jpg"
              alt="Advanced Lithium Cell Manufacturing"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
              priority
            />
          </div>
          
          <div className="md:col-span-5 md:pl-8 flex flex-col justify-center">
            <span className="text-emerald-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2">
              Next-Gen Energy Density & Safety
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-aclonica font-bold text-[#111111] tracking-tight mb-4">
              Engineered for extreme performance.
            </h2>
            <p className="text-[#666666] text-sm leading-relaxed max-w-md">
              High-nickel NMC and LFP chemistry featuring active thermal management and up to 4,000 deep cycles — delivering long-lasting, reliable power for heavy EV and grid energy applications.
            </p>
          </div>
        </div>

        {/* Bottom Row: Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-12 md:pt-0 md:mt-20">
          <div className="order-2 md:order-1 md:col-span-5 md:pr-8 flex flex-col justify-center md:items-end md:text-right">
            <span className="text-emerald-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2">
              Scalable Solutions for Enterprise
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-aclonica font-bold text-[#111111] tracking-tight mb-4">
              From 48V modules to MWh containers.
            </h2>
            <p className="text-[#666666] text-sm leading-relaxed max-w-md md:ml-auto">
              Custom OEM/ODM manufacturing, cloud-connected Smart BMS integration, UL1973/UN38.3 certified safety design, and turnkey industrial energy storage deployments.
            </p>
          </div>

          <div className="order-1 md:order-2 md:col-span-7 relative w-full aspect-16/10 overflow-hidden rounded-sm shadow-sm">
            <Image
              src="/img/left.jpg"
              alt="Grid Scale Energy Storage System"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Footer CTA Area */}
        <div className="text-center pt-20 flex flex-col items-center gap-4">
          <div className="mt-8">
            <Link href={'/contact'}>
              <button className="relative overflow-hidden bg-linear-to-r from-emerald-400 to-emerald-500 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 group text-base sm:text-lg tracking-wide uppercase">
                <span className="relative z-10">Request Custom Battery Quote</span>
                <span className="absolute inset-0 bg-linear-to-r from-emerald-700 to-emerald-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </button>
            </Link>
          </div>
          <p className="text-[#999999] text-[10px] font-semibold tracking-[0.15em] uppercase mt-2">
            Direct OEM Factory Supply — Global Compliance Certified
          </p>
        </div>

      </div>
    </section>
  );
}