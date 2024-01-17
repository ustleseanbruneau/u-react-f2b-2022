import PropTypes from 'prop-types'

// CSS option one - inline
// <header style={{ backgroundColor: 'blue', color: 'red' }}>

// CSS option two - with variable
// const headerStyles = { backgroundColor: 'blue', color: 'red', }
// <header style={ headerStyles }>

// CSS option three - with props
// function Header({ text, bgColor, textColor }) {
// const headerStyles = { backgroundColor: bgColor, color: bgColor, }

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor, color: textColor,
  }
  return (
    <header style={ headerStyles }>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header

