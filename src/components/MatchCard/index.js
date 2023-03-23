// Write your code here

import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {eachMatch} = this.props
    const {competingTeam, competingTeamLogo, result, matchStatus} = eachMatch
    const teamStatus = matchStatus === 'Won' ? 'won' : 'lost'
    return (
      <li className="match-card-bg">
        <img src={competingTeamLogo} alt="" className="match-card-team-logo" />
        <p className="match-card-team-name">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className={teamStatus}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
