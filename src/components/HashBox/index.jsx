import { useState } from 'react'
import styles from './styles.module.scss'

import md5 from 'md5';
import { ToggleButton } from '../ToggleButton';

// * passwordText + viewbutton
// * hashText
// * hashButton + copyButton + clearButton

const EMPTY_STRING = "";

export function HashBox() {
    const [ text, setText ] = useState(EMPTY_STRING);
    const [ hash, setHash ] = useState(EMPTY_STRING);
    const [ showPassword, setShowPassword ] = useState(false);

    function hashButtonClicked() {
        if (text === EMPTY_STRING) {
            alert("Campo de senha não pode estar vazio");
            return;
        }

        setHash(md5(text));
    }

    function copyButtonClicked() {
        if (hash === EMPTY_STRING) {
            alert("Não há nada para copiar para o clipboard");
            return;
        }

        navigator.clipboard.writeText(hash);
        setHash(EMPTY_STRING);
    }

    function clearButtonClicked() {
        resetStates();
    }

    function resetStates() {
        setText(EMPTY_STRING);
        setHash(EMPTY_STRING);
    }

    function viewButtonClicked(viewEnabled) {
        setShowPassword(viewEnabled);
    }
    
    return (
        <div className={styles.hashBoxWrapper}>
            <h1 className={styles.title}>MD5</h1>
            <div className={styles.topDiv}>
                <input type={showPassword ? "text" : "password"}
                        value={text}
                        id="textInput"
                        onChange={event => setText(event.target.value)}
                        className={styles.textField}
                        autoComplete="off"
                />
                <ToggleButton className={styles.toggleSwitch} onButtonClicked={viewButtonClicked}/>
            </div>
            <div className={styles.hashTextDiv}>
                <p className={styles.hashText}>
                    {hash}
                </p>
            </div>
            <div className={styles.buttonsDiv}>
                <button className={`${styles.button} ${styles.hashButton}`}
                        onClick={hashButtonClicked}>
                    Hash
                </button>
                <button className={`${styles.button} ${styles.copyButton}`}
                        onClick={copyButtonClicked}>
                    Copy
                </button>
                <button className={`${styles.button} ${styles.clearButton}`}
                        onClick={clearButtonClicked}>
                    Clear
                </button>
            </div>
        </div>
    )
}