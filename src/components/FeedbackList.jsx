import { motion, AnimatePresence } from 'framer-motion'
import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
//import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

// Moved parameters to Context API
//function FeedbackList({feedback, handleDelete}) {
function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)
  //console.log(feedback)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback Yet</p>
  }

  return isLoading ? <Spinner /> : (
    <div className='feeback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            {/*<FeedbackItem key={item.id} item={item} handleDelete={handleDelete } /> */}
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return version without animation
  // return (
  //   <div className='feeback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} 
  //       handleDelete={handleDelete } />
  //     ))}
  //   </div>
  // )
}

/*  Removed with Context API
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}
*/

export default FeedbackList
