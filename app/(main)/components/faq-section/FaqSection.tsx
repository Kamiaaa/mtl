"use client";

import { useId, useState, type ReactNode } from "react";
import styles from "./FaqSection.module.css";

type Faq = { question: string; answer: string };
type Feature = { title: string; description: string; icon: ReactNode };

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  width: 40,
  height: 40,
};

const GlobeIcon = (
  <svg {...iconProps}>
    <circle cx="24" cy="24" r="13" />
    <ellipse cx="24" cy="24" rx="6" ry="13" />
    <path d="M11 24h26M13 17h22M13 31h22" />
    <path d="M6 24a18 18 0 0 1 4-11M42 24a18 18 0 0 1-4 11" />
  </svg>
);

const RouterIcon = (
  <svg {...iconProps}>
    <rect x="6" y="30" width="36" height="10" rx="2" />
    <path d="M13 35h.01M19 35h.01M33 35h6M24 30v-5" />
    <path d="M17 21a10 10 0 0 1 14 0M12 16a17 17 0 0 1 24 0M22 26h4" />
  </svg>
);

const FEATURES: Feature[] = [
  {
    title: "High-Capacity Global Transit",
    description:
      "Empower your network with A1 Communication’s high-throughput IIG services. Enjoy ultra-low latency, multi-homed upstream routing, and carrier-grade reliability backed by our resilient submarine and terrestrial cable architecture.",
    icon: GlobeIcon,
  },
  {
    title: "Seamless Network Onboarding",
    description:
      "Accelerate your network integration with end-to-end technical setup, flexible BGP peering, and zero-cost initial cross-connect configuration to get your service online rapidly.",
    icon: RouterIcon,
  },
];

const FAQS: Faq[] = [
  {
    question: "What types of international connectivity services do you offer?",
    answer:
      "We provide carrier-grade International IP Transit, IPLC (International Private Leased Circuit), EVPL, and direct BGP Peering services. Our network connects via redundant submarine cable systems (SEA-ME-WE) and terrestrial ITC links with customizable CIR bandwidth options.",
  },
  {
    question: "What is your typical provisioning lead time for new bandwidth capacity?",
    answer:
      "Standard cross-connect and port activation at our primary PoPs takes 24 to 72 hours following contract execution. Custom backhaul routes or new physical fiber drops are provisioned according to agreed Project Feasibility timelines.",
  },
  {
    question: "How are billing, bandwidth usage, and invoicing managed?",
    answer:
      "We offer flexible billing models, including fixed monthly recurring charges (MRC) and 95th Percentile burstable billing. Detailed bandwidth utilization graphs, netflow analytics, and invoices are accessible via our enterprise NOC portal.",
  },
  {
    question: "What SLA guarantees and uptime protection do you provide?",
    answer:
      "We guarantee up to 99.99% service availability backed by strict Service Level Agreements (SLAs). Our infrastructure features auto-failover, multi-homed routing paths, active DDoS mitigation, and sub-50ms failover switching across redundant upstream gateways.",
  },
  {
    question: "What interface types and handoffs do you support at your PoP?",
    answer:
      "We support standard optical interface handoffs from 1GbE up to 100GbE (LR4/ER4) and 400GbE ports. Connections are established directly at our main Data Center PoPs or via designated IXP/ITC interconnection facilities.",
  },
];

function AccordionItem({
  faq,
  open,
  onToggle,
}: {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
}) {
  const uid = useId();
  const buttonId = `${uid}-button`;
  const panelId = `${uid}-panel`;

  return (
    <div className={styles.item} data-open={open}>
      <h3 className={styles.itemHeading}>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className={styles.trigger}
        >
          <span aria-hidden className={styles.toggle}>
            <span className={styles.barH} />
            <span className={styles.barV} />
          </span>
          <span className={styles.question}>{faq.question}</span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        className={styles.panel}
      >
        <div className={styles.panelInner}>
          <p className={styles.answer}>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection({
  features = FEATURES,
  faqs = FAQS,
}: {
  features?: Feature[];
  faqs?: Faq[];
}) {
  // Only one item open at a time; all closed on first render.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left: heading + features */}
        <div>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.badge} />
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-4xl font-bricolage font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-5xl transition-colors duration-300">
            Why {" "}
            <span className={styles.accent}>
              Choose
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
            </span>{" "}
            Us
          </h2>

          <ul className={styles.features}>
            {features.map((f) => (
              <li key={f.title} className={styles.feature}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: accordion */}
        <div className={styles.accordion}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              faq={faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}