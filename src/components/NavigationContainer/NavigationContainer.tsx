import { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import styles from './NavigationContainer.module.css';

const NavigationContainer: FunctionComponent = () => {
  const buttonClasses = {
    root: styles.button,
  };

  return (
    <div className={styles.container}>
      <Button href="/tool/users" classes={buttonClasses} >
        Users Form
      </Button>
      <Button href="/tool/tools" classes={buttonClasses}>
        Tools Form
      </Button>
    </div>
  );
}

export default NavigationContainer;
