import clsx from "clsx";
import styles from "./Notification.module.css";

const Notification = () => {
  return <div className={clsx(styles.noFeedbackStyle)}>No feedback yet.</div>;
};

export default Notification;
