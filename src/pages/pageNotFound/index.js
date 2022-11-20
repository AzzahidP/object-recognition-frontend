import styles from './index.module.css';
import React, { Component } from 'react'

export default class PageNotFound extends Component {
  render() {
    return (
        <div className={styles.main}>
            <div className={styles.section_1}>
                <div className={styles.title}>
                    <h1>404 Page Not Found</h1>
                </div>
            </div>
        </div>
    )
  }
}