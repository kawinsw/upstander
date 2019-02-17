import React from 'react';
import List from 'antd/lib/list';
const example_victims = [
    {location: {lat: 37.4298937,  lng:-122.17284070000001}, distanceMiles: 0.01, name: 'Willywonka', injury: 'bicycle crash', timestamp: Date.now()}
]
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
        return (date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    }
    renderItem = (item)=>{
        return (
            <List.Item>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h3 className="el-item-text">{item.injury}</h3>
                    <h3 className='el-item-text'>{item.distanceMiles} miles</h3>
                    <h3 className='el-item-text'>{item.name} </h3>
                    <h3 className='el-item-text'>{this.parseDate(item.timestamp)} </h3>
                </div>

            </List.Item>

        );
    }
    render () {
        return (
            <List
                bordered
                header={
                    <h1 style={{fontWeight:'340'}}>Emergencies</h1>
                }
                dataSource={example_victims}
                renderItem={this.renderItem}

            />
            

        );

    }
}