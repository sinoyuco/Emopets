import * as React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    InfoWindow,
    Marker
} from 'react-google-maps'

const styles = require('./google_map_styles.json')

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
// const mapMarker = require('./GoogleMapMarker.svg')

const GoogleMapComponentWithMarker = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{
                lat: 40.7484445, 
                lng: -73.9878584 
            }}
            defaultOptions={{
                disableDefaultUI: true, 
                draggable: true, 
                keyboardShortcuts: false, 
                scaleControl: true, 
                scrollwheel: true, 
                styles: styles 
            }}
        >
            <Marker
                position={{
                    lat: 40.7484445,
                    lng: -73.9878584 
                }}
                onClick={(message, lang, lat) =>
                    props.handleMarkerClick(
                        'Custom Google Map marker with infobox!',
                        40.7484445,
                        -73.9878584
                    )
                }
            />
            {props.isInfoboxVisible && (
                <InfoWindow
                    position={{
                        lat: props.infoboxPosY,
                        lng: props.infoboxPosX
                    }}
                    onCloseClick={() => props.handleInfoboxClick()}
                >
                    <div>
                        <h4>{props.infoboxMessage}</h4>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    ))
)


export default GoogleMapComponentWithMarker