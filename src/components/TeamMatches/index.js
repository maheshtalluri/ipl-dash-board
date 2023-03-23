// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {iplMatchesList: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedIplMatches = {
      teamBannerUrl: data.team_banner_url,
      latestMatchesDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatchDetails: data.recent_matches.map(eachMatch => ({
        id: eachMatch.id,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        data: eachMatch.date,
        firstInnings: eachMatch.first_innings,
        secondInnings: eachMatch.second_innings,
        manOfTheMatch: eachMatch.man_of_the_match,
        matchStatus: eachMatch.match_status,
        result: eachMatch.result,
        umpires: eachMatch.umpires,
        venue: eachMatch.venue,
      })),
    }

    this.setState({iplMatchesList: updatedIplMatches, isLoading: false})
  }

  render() {
    const {iplMatchesList, isLoading} = this.state
    const {latestMatchesDetails} = iplMatchesList
    const {teamBannerUrl, recentMatchDetails} = iplMatchesList
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-bg ${id}`}>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div>
            <LatestMatch latestMatchesDetails={latestMatchesDetails} />
            <ul className="match-card-list">
              {recentMatchDetails.map(eachMatch => (
                <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
