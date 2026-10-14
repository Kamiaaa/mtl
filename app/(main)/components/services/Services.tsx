import {
  Globe,
  Layers,
  Network,
  ShieldCheck,
  Activity,
  Server,
  type LucideIcon,
} from "lucide-react";
import styles from "./Services.module.css";

interface Service {
  icon: LucideIcon;
  stat: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Globe,
    stat: "01",
    title: "International IP Transit",
    description:
      "High-performance global connectivity with direct Tier-1 peering routes, ensuring ultra-low latency and reliable international routing for enterprise traffic.",
  },
  {
    icon: Layers,
    stat: "02",
    title: "International Bandwidth Solutions",
    description:
      "Scalable and dedicated global bandwidth capacity tailored to meet heavy data demands with consistent throughput and zero contention ratios.",
  },
  {
    icon: Network,
    stat: "03",
    title: "Data Connectivity",
    description:
      "Secure, high-speed point-to-point and multipoint private circuit connections linking your corporate branches seamlessly across regions.",
  },
  {
    icon: Server,
    stat: "04",
    title: "IPLC",
    description:
      "Private, high-capacity dedicated digital circuits providing secure, uninterrupted, and low-latency transmission of critical voice, data, and video.",
  },
  {
    icon: ShieldCheck,
    stat: "05",
    title: "DDoS Protection & Network Security",
    description:
      "Multi-layered automated threat mitigation systems that instantly scrub malicious traffic and safeguard your network infrastructure from large-scale attacks.",
  },
  {
    icon: Activity,
    stat: "06",
    title: "Network Monitoring & Management",
    description:
      "24/7 proactive surveillance of your network infrastructure by certified engineers to detect anomalies, optimize performance, and ensure maximum uptime.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 dark:bg-[#05070C] py-16 sm:py-20 transition-colors duration-300">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-sky-500/10 dark:bg-sky-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.badge} />
            Mango
            <span aria-hidden="true" className={styles.badge} />
          </p>

          <h2 className="mt-5 text-4xl font-bricolage font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-5xl transition-colors duration-300">
            Exclusive{" "}
            <span className={styles.accent}>
              Services
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

        {/* services grid */}
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 0.4} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: Service;
  delay: number;
}) {
  const Icon = service.icon;

  return (
    <div className="group relative rounded-2xl p-px">
      {/* faint always-on ring */}
      <div className="absolute inset-0 rounded-2xl border border-slate-200 dark:border-white/[0.08] transition-colors duration-300" />

      {/* rotating comet border-beam */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <span
          className={`${styles.beamRotate} absolute -inset-[100%]`}
          style={{
            animationDelay: `${delay}s`,
            background:
              "conic-gradient(from 0deg, transparent 0%, transparent 82%, rgba(254, 202, 38, 1) 90%, rgba(0, 0, 0, 1) 95%, rgba(254, 202, 38, 1) 97%, transparent 100%)",
          }}
        />
      </div>

      {/* card body */}
      <div className="relative flex h-full flex-col gap-4 rounded-2xl bg-white dark:bg-[#0B0F17] p-6 shadow-sm dark:shadow-none transition-colors duration-300">
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 dark:border-sky-400/20 dark:bg-sky-400/10">
            <Icon className="h-5 w-5 text-sky-600 dark:text-sky-300" strokeWidth={1.75} />
          </span>

          <span className="font-mono text-xs tracking-wide text-slate-500 dark:text-slate-400">
            {service.stat}
          </span>
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white transition-colors duration-300">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400 transition-colors duration-300">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}