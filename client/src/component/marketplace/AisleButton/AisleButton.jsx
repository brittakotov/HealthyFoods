import React from 'react';
import styles from './AisleButton.module.css'

const AisleButton = ({selectAisle, aisle}) => {
  var aisleStyle = 'short';
  if (aisle.length > 12) {
    aisleStyle = 'long';
  }

  return (
    <div onClick={(e) => {selectAisle(aisle)}} className={styles[aisleStyle]}>
      {aisle}
    </div>
  )
}

export default AisleButton;