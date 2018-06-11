import React from 'react';
import styles from './Navigation.css';


const Navigation = (props) => {
    return (
        <div className={styles.Navigation}>
            <div className="nav">
                <button onClick={() => props.newGameHandler()}>New Game</button>
                <button onClick={() => props.restartNewGame()}>Restart</button>
                <button onClick={() => props.solveSudoku()}>Solve</button>
                <button onClick={() => props.checkSudoku()}>Check</button>
                
                {
                    props.error ? <div><p className="error-msg">{props.error}</p></div> : null
                }
                
                {
                    props.newGameClicked ? 
                    <div>
                        <h1>Select level:</h1>
                        <button onClick={(e) => props.startNewGame(e.target.textContent)}>Easy</button>
                        <button onClick={(e) => props.startNewGame(e.target.textContent)}>Medium</button>
                        <button onClick={(e) => props.startNewGame(e.target.textContent)}>Hard</button>
                        <button onClick={(e) => props.startNewGame(e.target.textContent)}>Very-hard</button>
                        <button onClick={(e) => props.startNewGame(e.target.textContent)}>Insane</button>
                        <button onClick={(e) => props.startNewGame(e.target.textContent)}>Inhuman</button>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Navigation;