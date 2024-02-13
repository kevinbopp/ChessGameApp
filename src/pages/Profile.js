// Dynamic React page for 3 screen sizes; merges 3 separate pages.

import React from 'react';
import ProfileComputer from './ProfileComputer';
import ProfileTablet from './ProfileTablet';
import ProfileMobile from './ProfileMobile';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenSize: '',
    };
  }

  componentDidMount() {
    // Perform initial screen size check
    this.updateScreenSize();
    // Every time a resize event occurs, call updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  updateScreenSize = () => {
    // Get the width of the page.
    const width = window.innerWidth;

    // Check the width based on the breakpoint values (310-743, 744-1439, 1440 or higher)
    if (width >= 1440) {
      this.setState({ screenSize: 'computer' });
    } else if (width >= 744) {
      this.setState({ screenSize: 'tablet' });
    } else {
      this.setState({ screenSize: 'mobile' });
    }
  };

  render() {
    const { screenSize } = this.state;

    let currentPage;
    if (screenSize === 'computer') {
      currentPage = <ProfileComputer />;
    } else if (screenSize === 'tablet') {
      currentPage = <ProfileTablet />;
    } else if (screenSize === 'mobile') {
      currentPage = <ProfileMobile />;
    }

    return currentPage;
  }
}

export default Profile;
