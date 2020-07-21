
// src/components/App/index.js
import React, { Component } from 'react';
import { Button } from 'antd';
import './style.less';
import 'antd/dist/antd.less';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Page qweqwe</h1>
        <Button type="ghost">Button</Button>
      </div>
    )
  }
}

export default About;