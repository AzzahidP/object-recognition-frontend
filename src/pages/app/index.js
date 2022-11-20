import React, {Component} from 'react';
import Webcam from 'react-webcam';
import WebcamCapture from '../../components/webcam';
import styles from './index.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.section_1}>
          <h1 className={styles.title}>Object Recognition App</h1>
        </div>
          <WebcamCapture/>
      </div>
    );
  };
};
