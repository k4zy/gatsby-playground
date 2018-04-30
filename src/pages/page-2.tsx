import React from 'react';
import Link from 'gatsby-link';

class Second extends React.Component<any, any> {
  render(): JSX.Element {
    return (
      <div>
        <h1>Second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }
}

export default Second;
