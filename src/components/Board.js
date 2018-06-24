import React from 'react';
import Tile from './Tile';
import styles from './Board.css';

const Board = (props) => {
    return (
        <div className={props.board.length != "" ? "board" : styles.Boardhidden}>
	        <div className={styles.Board}>
	            {
	            props.board.map((tile, index) => {
	               
	                return (
	                    <Tile 
	                        value={tile} 
	                        key={index} 
	                        id={index} 
	                        onChange={props.onChange} 
	                        initialBoard={props.initialBoard.map(mytile => {
	                            if (mytile === ".") {
	                                mytile = "";
	                            } 
	                            return mytile;
	                        })}
	                    />
	                )
	            })}
	        </div>
        </div>
    )
}

export default Board;
