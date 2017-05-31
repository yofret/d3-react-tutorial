"user strict";
import React from 'react';
import SingleBarGraph from './graphs/SingleBarGraph';


export default class Home extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      data: [
        {
          value: 50,
          label: 'twitter'
        },
        {
          value: 50,
          label: 'facebook'
        }
      ]
    }
  }

  render() {
    return(
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SingleBarGraph data={this.state.data} />
            </div>
          </div>
        </div>
      );
  }
}
