// Write your code here

import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, teamImageUrl, id} = eachTeam
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="item-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
