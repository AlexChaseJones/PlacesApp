import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import * as actions from '../../../actions';

import styles from './CustomCallout_styles';

class CustomCallout extends Component {
  handlePress = () => {
    this.props.navigation.navigate('viewPosting', this.props.lister);
    this.props.setCurrentLister('map', this.props.lister);
  }

  render() {
    return (
      <MapView.Callout
        styles={styles.customView}
        tooltip
        onPress={this.handlePress}
      >
        <View style={styles.calloutContainer}>
          <Image
            source={{ uri: this.props.lister.listing.images[3] }}
            style={styles.calloutImage}
            resizeMode='contain'
          />
          <Image
            source={{ uri: this.props.lister.listing.images[3] }}
            style={styles.calloutImageBackground}
            resizeMode='cover'
            blurRadius={20}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.profileImageContainer}>
              <Image 
                source={{ uri: this.props.lister.profile.thumbnailPhoto }}
                style={styles.profileImage}
                resizeMode='contain'
              />
            </View>
            <Text style={styles.postedTime}>3 days ago</Text>
          </View>
        </View>
      </MapView.Callout>
    );
  }
}

const mapStateToProps = ({ mapSearch }) => (
  mapSearch
);

export default connect(mapStateToProps, actions)(CustomCallout);
