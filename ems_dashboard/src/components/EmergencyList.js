import React from 'react';
import List from 'antd/lib/list';
import Icon from 'antd/lib/icon';
import {distance} from '../utils';
export default class EmergencyList extends React.Component {

    /*
    location (lat lng) & distance
    victim name
    injury
    time
    PROPS:
    list: an array of type:
    {location: {lat: , lng: } , distanceMiles: , name: , injury: , timestamp:  }
    */

    parseDate = (dt)=>{
       const date = new Date(dt); 
        return (date.getHours() + ':' + date.getMinutes() + ':' + (date.getSeconds() >= 10? '':'0') + date.getSeconds());
    }
    renderItem = (item)=>{
        return (
            <List.Item>
                <Icon 
                className="el-item animated infinite flash" type="warning"
                theme="twoTone" twoToneColor="#eb2f96"
                style={{fontSize:'20px'}}
                />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h3 className="el-item-text">{item.injury}</h3>
                    <h3 className="el-item-text">{distance(item.location.lat, item.location.lng, this.props.originPoint.latitude, this.props.originPoint.longitude).toPrecision(2)} miles</h3>
                    <h3 className='el-item-text'>{item.name} </h3>
                    <h3 className='el-item-text'>{this.parseDate(item.timestamp)} </h3>
                </div>

            </List.Item>

        );
    }
    render () {
        return (
            <List
                style={{margin: '5px',  width:'50%'}}
                bordered
                header={
                    <h1 style={{fontWeight:'340'}}>Emergencies</h1>
                }
                dataSource={this.props.emergencies}
                renderItem={this.renderItem}

            />
            

        );

    }
}