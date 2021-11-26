import { useState } from 'react'
import styles from './styles.module.scss'

export function ToggleButton(props) {
    const [ value, setValue ] = useState(false);

    function buttonClicked() {
      props.onButtonClicked(!value);
      setValue(!value);
    }
    
    return (
      <div className={styles.toggleButtonWrapper}>
        <input type="checkbox"
                id="checkbox"
                name="checkbox"
                value={value}
                onClick={buttonClicked} 
                className={`${styles.toggleButton} ${value ? styles.toggleButtonOn : styles.toggleButtonOff}`}
        />
      </div>
    )
}