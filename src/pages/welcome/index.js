import styles from './index.module.css';
import React, { Component } from 'react'

export default class WelcomePage extends Component {
  render() {
    return (
        <div className={styles.main}>
            <div className={styles.section_1}>
                <div className={styles.title}>
                    <h1>Object Detection Web Application</h1>
                </div>
                <div className={styles.button}>
                    <a href='/facerecog'>Try It</a>
                </div>
            </div>
        </div>
    )
  }
}

