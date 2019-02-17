import React from 'react';
import {Card, Statistic} from 'antd';
import moment from 'moment';
export default class clocky extends React.Component{
  state={
      currentTime: moment().format('hh:mm:ss')
  }

  componentDidMount () {
    setInterval(()=>{
    this.setState({
      currentTime: moment().format('HH:mm:ss')
    })
    }, 1000);

  }
    render(){
        return (
                    <Card>
                    <Statistic
                        title="Current Time"
                        value={this.state.currentTime}
                        valueStyle={{ color: 'grey' }}
                    />
                    </Card>
        );
    }
}