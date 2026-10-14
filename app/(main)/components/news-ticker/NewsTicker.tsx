import styles from "./NewsTicker.module.css";

const TICKER_ITEMS = [
  "Final Exam Schedule Released for Fall Semester",
  "Urgent: School Closure Due to Weather Forecast",
  "Annual Sports Day Registration Open",
  "Parent-Teacher Association Meeting",
  "Library Book Return Deadline",
];

export default function NewsTicker() {
  // Duplicating the items creates the infinite seamless looping illusion
  const doubleItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerTrack}>
        {doubleItems.map((item, index) => (
          <div key={index} className={styles.tickerItem}>
            <span className={styles.tickerText}>{item}</span>
            <span className={styles.tickerDivider}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}