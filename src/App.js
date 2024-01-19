//import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {


  /* Moved to Context API
  const [feedback, setFeedback] = useState(FeedbackData)
  */

  /* Moved to Context API
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    //console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  */

  /* Moved to Context API
  const deleteFeedback = (id) => {
    //console.log('App', id)
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  */

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                {/* Removed feedback parameter for Context API */}
                {/*<FeedbackForm handleAdd={addFeedback} /> */}
                {/*<FeedbackStats feedback={feedback} /> */}
                {/*<FeedbackList feedback={feedback} handleDelete={deleteFeedback} /> */}
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }></Route>
            <Route path='/about' Component={AboutPage} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )

}

export default App