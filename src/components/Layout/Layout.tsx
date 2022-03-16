import { FunctionComponent, ReactNode } from 'react';
import NavigationContainer from 'components/NavigationContainer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavigationContainer />
      <div className={styles.screen}>{children}</div>
    </div>
  );
};

export default Layout;
