import {createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext() 

export const FeedbackProvider = ({children}) => {


  /*
  const [feedback, setFeedback] = useState([
    {
      id: 1, 
      text: 'This is feedback item 1', 
      rating: 10,
    },
    {
      id: 2, 
      text: 'This is feedback item 2', 
      rating: 9,
    },
    {
      id: 3, 
      text: 'This is feedback item 3', 
      rating: 7,
    }
  ])
  */

  const [isLoading, setIsLoading] = useState(true)

  const [feedback, setFeedback] = useState([])
  const [ feedbackEdit, setFeedbackEdit ] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      //`http://localhost:5000/feedback?_sort=id&order=desc` 
      // change to use proxy in package.json
      `/feedback?_sort=id&order=desc`
    )
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  // Add feedback - with in memory data
  /*
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    //console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  */

  // Add feedback - with json-server
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })

    const data = await response.json()
    
    setFeedback([data, ...feedback])
  }

  // Delete Feedback- with in memory data
  /*
  const deleteFeedback = (id) => {
    //console.log('App', id)
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  */

  // Delete Feedback- with in backend data
  const deleteFeedback = async (id) => {
    await fetch(`/feedback/${id}`, {method: 'DELETE'})

    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback item - With in memory data
  /*
  const updateFeedback = (id, updItem) => {
    //console.log(id, updItem)
    setFeedback(feedback.map((item) => 
      (item.id === id ? {...item, ...updItem} : item))
    )
  }
  */

  // Update feedback item - with backend data
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem)
    })

    const data = await response.json()

    setFeedback(feedback.map((item) => 
      (item.id === id ? {...item, ...data} : item))
    )
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider value={{
      feedback, 
      feedbackEdit, 
      isLoading,
      deleteFeedback, 
      addFeedback, 
      editFeedback, 
      updateFeedback,
    }}>
      {children}
    </FeedbackContext.Provider>
  )
  
}

export default FeedbackContext