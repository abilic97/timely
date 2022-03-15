import React, { useContext } from 'react'
import styles from './style.module.css'
import { useState, useEffect } from 'react';
import ProjectTable from '../ProjectTable';
import { AppContext } from '../../context/AppContext';

const StartButton = () => {
  const { addNewStartDate, startDateContext, } = useContext(AppContext);
  const [data, setData] = useState({ result: [] });
  const [displayText, setText] = useState("Start");
  const [projectName, setProjectName] = useState("");
  const [userText, setUserText] = useState("You are currently not measuring time for any project");
  const [modal, setModal] = useState(false);
  const [displayCurrent, setDisplayCurrent] = useState(false);

  useEffect(() => {
    fetchMyAPI()
  }, [data])

  async function fetchMyAPI() {
    let result = await fetch('https://localhost:5001/api/timely/grid/', { mode: 'cors' });
    result = await result.json();
    setData({ result });
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const stopTimer = () => {
    setModal(!modal);
    let date = new Date();
    setText("Start");
    setUserText("You are currently not measuring time for any project");
    let duration =  (date - startDateContext) / 1000;
    
    const postData = {
      projectName : projectName,
      projectStartDate : startDateContext,
      projectEndDate : date,
      projectDurationSeconds: duration
    };
    
    fetch('https://localhost:5001/api/timely/grid', {
      method: 'post',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    });
}

  const submitDate = () => {
    if (displayText === "Start") {
      let date = new Date();
      setText("Stop");
      setUserText("You are currently measuring time");
      setDisplayCurrent(true);
      addNewStartDate(date, date.toLocaleString());
    }
    else {
      setDisplayCurrent(false);
      toggleModal();
    }
  }

  return (
    <div className={styles.startButtonContainer}>
      <div className={styles.container}>
        <div className={styles.userText}>{userText}</div>
        <button className={styles.startButton} onClick={() => submitDate()}>{displayText}
        </button>
      </div>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <div> Stop Timer</div>
              <button className={styles.exitModal} onClick={toggleModal}>
                X
              </button>
            </div>
            <div className={styles.inputBox}>
              <div>Project Name</div>
              <input className={styles.inputStyle} name="projectName"
                placeholder="Enter project name" onChange={e => setProjectName(e.target.value)} />
            </div>
            <div className={styles.stopButtonContainer}>
              <button className={styles.startButton} onClick={stopTimer}>
                Stop timer
              </button>
            </div>
          </div>
        </div>
      )}
      {displayCurrent && (
        <div>
          <ProjectTable displayFirstRow={displayCurrent}></ProjectTable>
        </div>
      )}
    </div>
  );
};
export default StartButton