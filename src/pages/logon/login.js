import React from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
  }
  render() {
    return (
      <div>
        <WingBlank>
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
