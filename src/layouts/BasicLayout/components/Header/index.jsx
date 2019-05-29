import React, { PureComponent } from 'react';
import { Balloon, Icon, Nav } from '@alifd/next';
import IceImg from '@icedesign/img';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Link } from 'react-router-dom';
import { headerMenuConfig } from '../../../../menuConfig';
import styles from './index.module.scss';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };


  render() {
    return (
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>数据采集管理系统</h1>
        <div className={styles.rightContainer}>
          {/* Header 菜单项 begin */}
          {headerMenuConfig && headerMenuConfig.length > 0 ? (
            <Nav direction="hoz" selectedKeys={[]} type="secondary">
              {headerMenuConfig.map((nav, idx) => {
                const linkProps = {};
                if (nav.newWindow) {
                  linkProps.href = nav.path;
                  linkProps.target = '_blank';
                } else if (nav.external) {
                  linkProps.href = nav.path;
                } else {
                  linkProps.to = nav.path;
                }
                return (
                  <Nav.Item key={idx}>
                    {linkProps.to ? (
                      <Link {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                        ) : null}
                        <span className={styles.navItemText}>{nav.name}</span>
                      </Link>
                    ) : (
                      <a {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                        ) : null}
                        <span className={styles.navItemText}>{nav.name}</span>
                      </a>
                    )}
                  </Nav.Item>
                );
              })}
            </Nav>
          ) : null}
          {/* Header 菜单项 end */}

          {/* Header 右侧内容块 */}
          <Balloon
            trigger={
              <div className={styles.userPanel}>
                <IceImg
                  height={40}
                  width={40}
                  src={require('./images/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png')}
                  className={styles.userAvatar}
                />
                <div className={styles.userProfile}>
                  <span className={styles.userName}>共性技术研究中心</span>
                  <br/>
                  <span>{ this.props.username }zxcx</span>

                </div>
                <Icon
                  type="arrow-down-filling"
                  size="xxs"
                  className={styles.iconDown}
                />
              </div>
            }
            closable={false}
            className={styles.userProfileMenu}
          >
            <ul>
              <li className={styles.userProfileMenuItem}>
                <Link to="/user/login" className={styles.menuItemLink}>
                  <FoundationSymbol type="compass" size="small" className={styles.menuItemIcon} />
                  退出
                </Link>
              </li>
            </ul>
          </Balloon>
        </div>
      </div>
    );
  }
}

export default Header;