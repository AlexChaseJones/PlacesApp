import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

class DrawerContent extends Component {
	render() {
		const { drawerContainer, drawerHeader, profile, name, profilePhoto } = styles;
		return (
			<View style={drawerContainer}>
        <View style={drawerHeader}>
  				<Text style={name}>{this.props.screenProps.profile.firstName}</Text>
          <Image style={profilePhoto} source={{ uri: this.props.screenProps.profile.thumbnailPhoto }} />
        </View>
        <View style={profile}>
				   <DrawerItems {...this.props} />
			  </View>
			</View>
		);
	}
}

const styles = {
    drawerContainer: {
      flex: 1,
      backgroundColor: '#EAE9E7',
    },
    profile: {
      flex: 2,
      backgroundColor: '#FFFFFF',
      alignItems: 'center'
    },
    name: {
      fontSize: 30,
      fontWeight: '500'
    },
    profilePhoto: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginTop: 15
    },
    drawerHeader: {
      flex: 1,
      marginTop: 50,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: 'rgba(0,0,0,.1)'
    }
};

export default DrawerContent;
