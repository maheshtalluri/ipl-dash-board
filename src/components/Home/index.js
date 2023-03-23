// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount = () => {
    this.getIplTeamsLogo()
  }

  getIplTeamsLogo = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedIplTeam = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeamsList: updatedIplTeam, isLoading: false})
  }

  render() {
    const {iplTeamsList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="home-bg-container">
            <div className="ipl-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-head-name">IPL Dashboard</h1>
            </div>
            <ul className="list-container">
              {iplTeamsList.map(eachTeam => (
                <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
