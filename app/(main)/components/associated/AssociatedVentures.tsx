import React from 'react';
import Image from 'next/image';
import styles from './AssociatedVentures.module.css';

interface Venture {
  name: string;
  logoUrl: string;
}

interface AssociatedVenturesProps {
  title?: string;
  ventures?: Venture[];
}

// Default dummy data
const defaultVentures: Venture[] = [
  { name: 'Venture One', logoUrl: '/img/btcl.jpg' },
  { name: 'Venture Two', logoUrl: '/img/bharti.jpg' },
  { name: 'Venture Three', logoUrl: '/img/google.png' },
  { name: 'Venture Four', logoUrl: '/img/meta.webp' },
  { name: 'Venture Five', logoUrl: '/img/tata.jpg' },
  { name: 'Venture Six', logoUrl: '/img/btrc.jpg' },
];

export const AssociatedVentures: React.FC<AssociatedVenturesProps> = ({
  title = "Associated Ventures",
  ventures = defaultVentures,
}) => {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedVentures = [...ventures, ...ventures];

  return (
    <section className="w-full bg-slate-50 dark:bg-[#05070C] py-16 sm:py-20 overflow-hidden border-y border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <div className="mx-auto max-w-2xl text-center">
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.badge} />
            Our Partners
            <span aria-hidden="true" className={styles.badge} />
          </p>

          <h2 className="mt-5 text-4xl font-bricolage font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-5xl transition-colors duration-300">
            {title}{" "}
            <span className={styles.accent}>
              Network
              <svg
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden="true"
                className={styles.underline}
              >
                <path
                  fill="currentColor"
                  d="M0 4.6C0 3 6 2.2 12 1.8 45 .4 90 0 125 0c25 0 55 .6 75 2.2 0 .4-1 .7-2 .8-33 .4-63 1-90 1.7C70 6 40 7.4 12 8 5 8 0 6.8 0 4.6Z"
                />
              </svg>
            </span>
          </h2>
        </div>
      </div>

      {/* Slider Viewport Container */}
      <div className="relative flex w-full items-center">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 dark:from-[#05070C] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track (Right to Left) */}
        <div className={styles.track}>
          {duplicatedVentures.map((venture, index) => (
            <div
              key={`${venture.name}-${index}`}
              className="relative flex items-center justify-center w-40 h-16 shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={venture.logoUrl}
                alt={`${venture.name} logo`}
                fill
                sizes="160px"
                className="object-contain"
                priority={index < 4}
              />
            </div>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 dark:from-[#05070C] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default AssociatedVentures;