import React from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { connect } from 'react-redux';

import { getDailySentence } from '../../redux/dailysentence';
import DailySentence from '../../components/daily-sentence';
import Logo from '../../components/logo';

@connect(
  state => state.dailysentence,
  { getDailySentence }
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
  }
  componentDidMount() {
    // this.props.getDailySentence()
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <DailySentence></DailySentence>
          <List>
            <InputItem
            >账号</InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}



export default Login;
