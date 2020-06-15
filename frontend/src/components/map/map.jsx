import React from 'react';
import GoogleMapComponentWithMarker from './google_map_with_marker';

const styles = {
    width: '100%',
    height: '536px'
}

class Map extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            infoboxMessage: '',
            isInfoboxVisible: false,
            markerLang: 0,
            markerLat: 0
        }
    }

    handleMarkerClick = (message, lang, lat) => {
        this.setState({
            infoboxMessage: message, 
            isInfoboxVisible: !this.state.isInfoboxVisible, 
            markerLang: lang + 0.006, 
            markerLat: lat - 0.0004
        })
    }

    handleInfoboxClick = () => {
        this.setState({
            isInfoboxVisible: false
        })
    }

    render() {
        return (
            <div style={styles}>
                <GoogleMapComponentWithMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    isInfoboxVisible={this.state.isInfoboxVisible} 
                    infoboxMessage={this.state.infoboxMessage} 
                    handleInfoboxClick={this.handleInfoboxClick} 
                    handleMarkerClick={this.handleMarkerClick} 
                    infoboxPosY={this.state.markerLang} 
                    infoboxPosX={this.state.markerLat} 
                />
            </div>
        )
    }
}

export default Map;