import React from 'react';
import styles from './Tile.css'

const Tile = (props) => {
    return (
        <input 
            className={styles.Tile}
            type="number"  
            min={"1"} 
	        max={"9"}
            value={props.value} 
            id={props.id} 
            onChange={(e) => props.onChange(e.target.value, e.target.id)}
            disabled={props.initialBoard[props.id]} 
        />
    )
}

export default Tile;
