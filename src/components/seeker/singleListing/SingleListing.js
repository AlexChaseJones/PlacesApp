import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import ListerModel from '../../../models/ListerModel';
import * as actions from '../../../actions';

import styles from './SingleListing_styles';

class SingleListing extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      likeInProgress: false,
      lister: {}
    };
  }

  componentWillMount() {
    const Lister = new ListerModel(this.props.lister);

    this.setState({
      lister: Lister
    }) 
  }

  componentDidMount() {
    //Dispatch an action to update the view count on the listing
    // TODO: implement this code. I'm commenting it out for now since it is causing performance issues.
    // also - should this be in a firebase function?
    // -----
    // const userId = firebase.auth().currentUser.uid;
    // const userObj = {
    //   uid: userId,
    //   lastViewed: new Date().toISOString()
    // };
    // const updates = {};
    // updates[`Listers/${this.props[this.props.target].uid}/listing/uniqueViewers/${userId}`] = userObj;
    // firebase.database().ref().update(updates)
    // .then(() => {
    // })
    // .catch(() => {
    // });
  }

  // handleDislike = () => {
  //   this.props.navigation.goBack();
  // }

  handleLike = () => {
    // props.likeListing updates the user model with basic information in firebase database
    // This allows us to fetch the most up to date lister profile when viewing Liked Listings.
    // It also updates the local store with the full listers profile for quick viewing.
    // The callback function is executed whenever it finishes it all.
    this.setState({ likeInProgress: true });

    setTimeout(() => {
      this.props.likeListing(this.state.lister, () => {
        this.props.navigation.goBack();
      });
    }, 500);
  }

  formatPrice(price) {
    if (price < 1000) return price;
    const _price = String(price);
    return `${_price.substring(0, 1)},${_price.substring(1)}`;
  }

  getBadge(profile) {
    if (true) {
      return (
        <View style={{ alignItems: 'center' }}>
          <Image 
            source={require('../../../assets/images/verified_icon.png')}
            style={{ width: 26, height: 26 }}
          />
          <Text
            style={{ fontWeight: '300', fontSize: 16, marginTop: 3 }}
          >Verified</Text>
        </View>
      );
    }
  }

  generateAmenities(i) {
    const images = {
      deposit: require('../../../assets/images/am_deposit_icon.png'),
      heating: require('../../../assets/images/am_heating_icon.png'),
      internet: require('../../../assets/images/am_internet_icon.png'),
      laundry: require('../../../assets/images/am_laundry_icon.png'),
      renovated: require('../../../assets/images/am_renovated_icon.png'),
    };

    return (
      <View key={i.type} style={styles.amenityItem}>
          <Image style={{ width: 30, height: 30 }} source={images[i.type]} />
          <Text style={styles.amenityText}>
            {i.text}
          </Text>
      </View>
    )
  }

  renderLikeButton(status) {
    if (status === 'liked') return;
    return (
      <TouchableOpacity
        style={styles.likeBtn}
        onPress={this.handleLike}
      >
        <Image
          style={{width: 50, height: 50}}
          source={require('../../../assets/images/like_heart_icon.png')}
        />
      </TouchableOpacity>
    )
  }

  render() {
    if (this.state.lister instanceof ListerModel === false) {
      return <View><Text>Loading</Text></View>;
    }

    return (
      <View style={styles.container}>
        <View 
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 999,
            display: this.state.likeInProgress ? 'visible' : 'none',
            backgroundColor: 'rgba(255,255,255,.5)'
          }}
        />
        <View style={styles.headerContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {this.state.lister.listing.images.map(image => (
              <View key={image} style={styles.listingImageContainer}>
                <Image
                  style={styles.listingImage}
                  resizeMode='contain'
                  source={{ uri: image }}
                />
                <Image
                  style={styles.listingImageBackground}
                  resizeMode='cover'
                  blurRadius={20}
                  source={{ uri: image }}
                />
              </View>
            )).reverse()}
          </ScrollView> 
        </View>
        <Text style={styles.priceTag}>${this.formatPrice(this.state.lister.listing.price)}</Text>
        <ScrollView style={{ flex: 1, position: 'relative', top: -35, marginBottom: -35, paddingTop: 10, overflow: 'hidden' }}>
          <View style={styles.sectionOne}>
            <View style={styles.sectionOneBlock}>
              <Text style={styles.sectionOneText}>{this.state.lister.listing.totalRooms} bed {this.state.lister.listing.bathrooms} bath</Text>
              <Text style={{ fontSize: 25, fontWeight: '600' }}>Available Now</Text>
            </View>

            <View style={styles.sectionOneBlock}>
              <Text style={styles.sectionOneText}>{this.state.lister.listing.address.street}</Text>
              <Text style={styles.sectionOneText}>{this.state.lister.listing.address.city}, {this.state.lister.listing.address.state}</Text>
            </View>
          </View>
            <View style={styles.lineBreak} />
            <Text style={styles.header}>POSTED BY</Text>
            <View style={styles.sectionTwo}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{ uri: this.state.lister.profile.thumbnailPhoto }}
                style={{ width: 70, height: 70, borderRadius: 35 }}
              />
              <Text style={styles.sectionTwoText}>{this.state.lister.profile.firstName} {this.state.lister.profile.lastName}, {this.state.lister.profile.age}</Text>
              </View>
              {this.getBadge(this.state.lister.profile)}
            </View>
            <View style={styles.lineBreak} />
            <Text style={styles.header}>AMENITIES</Text>
            <View>
              {this.state.lister.listing.amenities.map(i => this.generateAmenities(i))}
            </View>
            <View style={styles.footerSection}>
              <TouchableOpacity style={styles.footerBtn}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '400' }}>SUPER LIKE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: 115, height: 10, backgroundColor: 'rgba(255,255,255,0)'}}>
              </TouchableOpacity>
            </View>
        </ScrollView>
          {this.renderLikeButton(this.props.status)}
      </View>
    );
  }
}

const mapStateToProps = ({ mapSearch, seekerProfile }) => ({
  ...mapSearch,
  ...seekerProfile
});

export default connect(mapStateToProps, actions)(SingleListing);
