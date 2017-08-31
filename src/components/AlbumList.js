import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//Class
class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }
    //Render function
    render() {
        const { viewStyle, textStyle } = styles;

        return (
            <View style={viewStyle}>
                <Text>Album List</Text>
            </View>
        );
    };
}

const styles = {
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: 15
    },
    textStyle: {
        fontSize: 20

    }
};

export default AlbumList;