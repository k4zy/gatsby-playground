import React from 'react';
import Link from 'gatsby-link';

class Index extends React.Component<any, any> {
  componentDidMount() {
    console.log('Hello World');
  }
  componentWillMount() {
    console.log('{pre}Hello World');
  }
  render() {
    return (
      <div>
        <h1>Home Screen</h1>
        <p>Welcome to PWA Sample site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    );
  }
}

export default Index;
