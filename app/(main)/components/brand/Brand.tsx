'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Brand.module.css';

interface BrandItem {
    id: string;
    name: string;
    badgeLogo: string;
    productImage: string;
}

const BRANDS: BrandItem[] = [
    { id: '1', name: 'TIP', badgeLogo: '/img/product.jpg', productImage: '/img/about.jpg' },
    { id: '2', name: 'Hello', badgeLogo: '/img/product.jpg', productImage: '/img/about.jpg' },
    { id: '3', name: 'First Choice', badgeLogo: '/img/product.jpg', productImage: '/img/about.jpg' },
    { id: '4', name: 'PULSE', badgeLogo: '/img/product.jpg', productImage: '/img/about.jpg' },
    { id: '5', name: 'TOAST', badgeLogo: '/img/product.jpg', productImage: '/img/about.jpg' },
    { id: '6', name: 'KNOCK', badgeLogo: '/img/product.jpg', productImage: '/img/about.jpg' },
];

export default function Brand() {
    // Duplicate array for endless seamless looping
    const duplicatedBrands = [...BRANDS, ...BRANDS];

    return (
        <section className={styles.section}>
            <div className={styles.bgPattern} />

            <div className={styles.container}>
                <h2 className={styles.title}>Our Brands</h2>

                <div className={styles.carousel}>
                    <div className={styles.track}>
                        {duplicatedBrands.map((brand, index) => (
                            <div key={`${brand.id}-${index}`} className={styles.card}>
                                <svg
                                    className={styles.ringSvg}
                                    viewBox="0 0 200 200"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="94"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeDasharray="140 30 180 30"
                                        strokeLinecap="round"
                                        opacity="0.9"
                                    />
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="94"
                                        stroke="#ffffff"
                                        strokeWidth="3"
                                        strokeDasharray="3 35"
                                        strokeLinecap="round"
                                        opacity="0.75"
                                    />
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="87"
                                        stroke="#ffffff"
                                        strokeWidth="1"
                                        strokeDasharray="80 120"
                                        opacity="0.45"
                                    />
                                </svg>

                                <div className={styles.badgeInner}>
                                    <Image
                                        src={brand.badgeLogo}
                                        alt={`${brand.name} logo`}
                                        fill
                                        className={styles.badgeLogo}
                                    />

                                    <div className={styles.productWrapper}>
                                        <Image
                                            src={brand.productImage}
                                            alt={`${brand.name} product`}
                                            width={180}
                                            height={120}
                                            className={styles.productImg}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.ctaWrapper}>
  <button type="button" className={styles.ctaBtn}>
    <span className={styles.ctaText}>See all our brands</span>
  </button>
</div>
            </div>
        </section>
    );
}