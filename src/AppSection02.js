function AppSection02() {

  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'},
  ]

  const loading = false
  const showComments = true
  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  )

  if(loading) return <h1>Loading...</h1>

  //{Math.random() * 5 + 5}
  return (
    <div className='container'>
      <h1>{title}</h1>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p> 

      {showComments ? (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        'no'
      )}

      {showComments && (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}

      {showComments && commentBlock}
    </div>
  )

}

export default AppSection02