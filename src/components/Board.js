import React from 'react';
import Tile from './Tile';
import styles from './Board.css';

const Board = (props) => {
    return (
        <div className={styles.Board}>
            {
            props.board.map((tile, index) => {
                if (tile === ".") {
                    tile = "";
                }
                return (
                    <Tile 
                        value={tile} 
                        key={index} 
                        id={index} 
                        onChange={props.onChange} 
                        initialBoard={props.initialBoard.map(tile => {
                            if (tile === ".") {
                                tile = "";
                            } 
                            return tile;
                        })}
                    />
                )
            })}
        </div>
    )
}

export default Board;