import React from 'react';
import Grocery from '../Grocery/Grocery.jsx'
import styles from './Aisle.module.css'

const Aisle = ({groceries, addToCart}) => {

  return (
    <div className={styles.container}>
      {groceries.map((grocery , i) => {
        return (
          <Grocery grocery={grocery} addToCart={addToCart} key={i}/>
        )
      })}
    </div>
  )
}

export default Aisle;