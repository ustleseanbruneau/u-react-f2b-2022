import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}) {
  //const [rating, setRating] = useState(7)
  //const [text, setText] = useState('This is an example of a feedback item')

  /*
  const handleClick = () => {
    setRating((prev) => {
      //return 10
      console.log(prev)
      return prev + 1
    })
  }
      <button onClick={handleClick}>Click</button>
  */

      // <Card reverse={true}>
  const handleClick = (id) => {
    console.log(id)
  }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem
