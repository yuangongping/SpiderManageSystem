import React, { PureComponent } from 'react';
import styles from './index.module.scss';

export default class Footer extends PureComponent {
  render() {
    return (
      <div className={styles.footerContainer}>
        <div className={styles.copyright}>
          爬虫管理系统 © 所有权归{' '}
          <a
            href="http://172.16.110.6/"
            target="_blank"
            className="copyright-link"
            rel="noopener noreferrer"
          >
           共性技术部
          </a>
        </div>
      </div>
    );
  }
}
