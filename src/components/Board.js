import React from 'react';
import Tile from './Tile';
import styles from './Board.css';

const Board = (props) => {
    return (
    	<div className={props.board != "" ? "board" : null}>
	        <div className={styles.Board}>
	            {
	            props.board.map((tile, index) => {
	               
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
        </div>
    )
}

export default Board;