// Write your code here

import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchesDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      venue,
      result,
      date,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatchesDetails

    return (
      <li className="latest-match-bg">
        <div>
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="venue">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
        <div>
          <div>
            <p className="first-innings">First Innings</p>
            <p className="first-innings-ans">{firstInnings}</p>
          </div>
          <div>
            <p className="first-innings">Second Innings</p>
            <p className="first-innings-ans">{secondInnings}</p>
          </div>
          <div>
            <p className="first-innings">Man Of The Match</p>
            <p className="first-innings-ans">{manOfTheMatch}</p>
          </div>
          <div>
            <p className="first-innings">Umpires</p>
            <p className="first-innings-ans">{umpires}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default LatestMatch
