import React from 'react'
import axios from 'axios'

export default class VoteAppData extends React.Component {

    state = {
        isLoading: true,
        apiURL: this.props.apiURL,
        apiData: '',
        moreApiData: '',
        voteCount: 0
    }
    componentDidMount(){
        this.fetchData(this.state.apiURL)
        this.fetchMoreData()
    }

    fetchData = (URL) => {
        axios.get(URL)
        .then(res => {
            const apiData = res.data
            this.setState({ 
                apiData: apiData
                // isLoading: false
            })
        })
    }
    fetchMoreData = () => {
        axios.get('https://baconipsum.com/api/?type=all-meat&sentences=4')
        .then(res => {
            const moreApiData = res.data
            this.setState({
                moreApiData: moreApiData,
                isLoading: false
            })
        })
    }


    upVote = () => {
        this.setState(
            ({ voteCount }) => ({
                voteCount: voteCount += 1
            })
        )
    }

    downVote = () => {
        this.setState(
            ({voteCount}) => ({
                voteCount: voteCount -= 1
            })
        )
    }

    render() {
        return (
            <div> 
                {this.props.render(
                    this.state,
                    this.upVote,
                    this.downVote,
                    this.fetchData,
                    this.fetchMoreData
                )}
            </div>
        );
    }
}