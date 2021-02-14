import React from 'react';
import { Route, Link } from 'react-router-dom'
import VoteAppData from './components/VoteAppData'
import DogPictures from './components/DogPictures'
import WorkReview from './components/WorkReview'

function App() {
  return (
    <React.Fragment>
      <h1>Links to the different renders</h1>
      <Link to='/start'> '/start' </Link>
      <Link to='/other'> '/other' </Link>

      <Route path='/start'>
        <VoteAppData 
          apiURL='https://dog.ceo/api/breeds/image/random'
          render={(data, upVote, downVote, fetchData) => (
            <DogPictures 
              data={data} 
              upVote={upVote} 
              downVote={downVote}
              fetchData={fetchData}
              />
          )}
        />
      </Route>

      <Route path='/other'>
      <VoteAppData 
        apiURL='https://randomuser.me/api/'
        render={(data, upVote, downVote, fetchData, fetchMoreData) => (
        <WorkReview 
          data={data}
          upVote={upVote}
          downVote={downVote}
          fetchData={fetchData}
          fetchMoreData={fetchMoreData}
        />
      )}/>
      </Route>

    </React.Fragment>
  );
}

export default App;
