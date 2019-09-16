import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { styles } from './style'

const heartIcon = require('./images/heart.png')

class App extends Component {
  state = {
    liked: false,
    count: 0
  }

  handlebuttonPress = () => {
      this.setState({
        liked: !this.state.liked,
        count: this.state.count + 1        
      })
  }


render(){
  const likedStyles = this.state.liked ? styles.liked : undefined

  return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.handlebuttonPress}
          style={styles.button}
          underlayColor="#fefefe"
        >
          <Image 
            source={heartIcon}
            style={[styles.icon, likedStyles]}
             />
        </TouchableHighlight>
        <Text style={styles.text}>Do you like this app?</Text>
        <Text style={styles.text}>{this.state.count}</Text>
      </View>
    )
  }
}

export default App;
