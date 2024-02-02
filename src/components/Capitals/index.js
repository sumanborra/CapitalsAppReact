import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {paraValue: countryAndCapitalsList[0].id}
  onChangeValue = event => {
    this.setState({paraValue: event.target.value})
    // console.log(event.target.value);
  }
  render() {
    // const optionValue = countryAndCapitalsList.capitalDisplayText
    const {paraValue} = this.state
    const showText = countryAndCapitalsList.filter((each) =>(each.id === paraValue));
    const text = showText[0].country;

    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <select className="select-box" onClick={this.onChangeValue}>
            {countryAndCapitalsList.map(each => (
              <option className="options-style" value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
              
            ))}
          </select>
          <label className="label-style">
            is capital of which country?
          </label>
          <p className="para">{text}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
