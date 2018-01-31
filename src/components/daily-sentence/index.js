import React, { Component } from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';

import { getDailySentence } from '../../redux/dailysentence';
import './daily-sentence.scss'

@connect(
  state => state.dailysentence,
  { getDailySentence }
)
class DailySentence extends Component {
  state = {}
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              thumb="http://cdn.iciba.com/news/word/20180131.jpg"
              thumbStyle={{margin: 'auto'}}
            />
            <Card.Body>
            <div>Hold fast to your dreams and you can soar even without wings. </div>
            </Card.Body>
            <Card.Footer content="每日一句" extra={<div>From 爱词霸</div>} />
          </Card>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default DailySentence;
