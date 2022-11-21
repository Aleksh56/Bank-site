import React from 'react'
import ResultsCard from './ResultsCard'
import { results } from '../constants'
import styles from '../style'

const Results = () => {
  return (
    <div className={`py-[75px] ${styles.flexColTextCenter}`}>
        <div className='mb-8'>
            <h4 className={`mb-5 ${styles.heading2}`}>Our best results for the year</h4>
            <p className={`max-w-[550px] ${styles.mainText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
        </div>
        <div className={styles.resultsGrid}>
            {results.map((item) => (
              <ResultsCard key={item.id} result={item.result} about={item.about} />
            ))}
        </div>
    </div>
  )
}

export default Results