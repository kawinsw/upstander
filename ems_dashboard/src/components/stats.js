import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';


export default class Stats extends React.Component{
    render(){
        return (
            <div style={{ background: '#ECECEC', padding: '20px' }}>
            <Row gutter={13}>
              <Col span={12}>
                <Card>
                    {this.props.safe === true ? 
                  <Statistic
                    title="Status"
                    value={"Safe"}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={
                        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
                    }
                  />
                  : 
                  <Statistic
                    title="Status"
                    value={"Emergency!"}
                    precision={2}
                    valueStyle={{ color: '#a33030' }}
                    prefix={
                        <Icon 
                        className="el-item animated infinite flash" type="warning"
                        theme="twoTone" twoToneColor="#eb2f96"
                        style={{fontSize:'20px'}}
                        />
                    }
                  />
                }
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="EMS Fleet on standby"
                    value={5}
                    valueStyle={{ color: 'grey' }}
                    prefix={
                        <Icon type="car" />
                    }
                  />
                </Card>
              </Col>
            </Row>
          </div>
        );
    }
}