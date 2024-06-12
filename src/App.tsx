import React from 'react';
import LoginPage, { Username, Password, Submit, Title, Logo, Reset } from '@react-login-page/page1';
import LoginLogo from 'react-login-page/logo';

const styles = { height: "100vh",width:"100vw" };

const Demo = () => (
  <div style={styles}>
    <LoginPage>
      <Username name="userUserName" />
      <Password placeholder="请输入密码" name="userPassword" />
      <Submit>提交</Submit>
      <Reset disabled>重置</Reset>
      <Title />
      <Logo>
        <LoginLogo />
      </Logo>
    </LoginPage>
  </div>
);

export default Demo;