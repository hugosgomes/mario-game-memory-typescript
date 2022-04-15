import "./Title.scss"

const Title = () => {
  return (
    <h1>
      <span style={redColor}>J</span>
      <span style={greenColor}>O</span>
      <span style={blueColor}>G</span>
      <span style={yellowColor}>O</span>
      <span> </span>
      <span style={blueColor}>D</span>
      <span style={yellowColor}>A</span>
      <span> </span>
      <span style={redColor}>M</span>
      <span style={yellowColor}>E</span>
      <span style={blueColor}>M</span>
      <span style={greenColor}>O</span>
      <span style={blueColor}>R</span>
      <span style={yellowColor}>I</span>
      <span style={redColor}>A</span>
      <span> </span>
      <span style={redColor}>S</span>
      <span style={blueColor}>U</span>
      <span style={yellowColor}>P</span>
      <span style={blueColor}>E</span>
      <span style={greenColor}>R</span>
      <span> </span>
      <span style={greenColor}>M</span>
      <span style={blueColor}>A</span>
      <span style={yellowColor}>R</span>
      <span style={redColor}>I</span>
      <span style={greenColor}>O</span>
    </h1>
  )
}

const textShadow = {
  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
}
const greenColor = {
  ...textShadow,
  color: '#71BF45',  
}
const blueColor = {
  ...textShadow,
  color: '#00A1E5',
}
const yellowColor = {
  ...textShadow,
  color: '#FFDE00',
}
const redColor = {
  ...textShadow,
  color: '#ED145B',
}

export default Title;