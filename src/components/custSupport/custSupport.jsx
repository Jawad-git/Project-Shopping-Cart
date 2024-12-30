import styles from "./custSupport.module.css";
import { useState } from "react";

const CustSupport = () => {
  const [showAssistanceMessage, setShowAssistanceMessage] = useState(true);
  return (
    <div className={styles.supportDiv}>
      {showAssistanceMessage ? (
        <div className={styles.assistancePopup}>
          <img className={styles.assistantPhoto} src="assistant.jpg"></img>
          <div className={styles.assistantMessage}>
            <h2 className={styles.h2}>Need assistance?</h2>
            <p className={styles.p}>Our team is ready to help.</p>
          </div>
          <div
            className={styles.closeButton}
            onClick={() => setShowAssistanceMessage(false)}
          >
            &times;
          </div>
        </div>
      ) : (
        ""
      )}

      <img
        src="messagingIcon.jpg"
        alt="Icon for live chat"
        className={styles.messagingIcon}
      />
    </div>
  );
};

export default CustSupport;
