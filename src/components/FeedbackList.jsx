import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
  console.log(feedback)

  if (!feedback || feedback.length === 0) {
    return <p>No feedback Yet</p>
  }

  return (
    <div className='feeback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} 
        handleDelete={handleDelete } />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList
