import React from 'react';
import icon from '../assets/icons/delivery-man.png';
//@ts-ignore
import GoogleMap from 'google-map-react';

const AnyReactComponent: React.FC = (props: any) => (
	<div style={{
		width: 32,
		height: 32
	}}>
		<img src={icon} alt="logo" width="100%" height="100%"/>
	</div>
);

// eslint-disable-next-line @typescript-eslint/no-redeclare
const GoogleMapReact: React.FC<any> = (props: any) => {
	return (
		<div style={{height: '100vh', width:'100vw'}}>  
			<GoogleMap
				bootstrapURLKeys={{key: 'AIzaSyBHz2tC_hTPV9DFTrvXRA3yYo72NQIzQ3w'}}
				defaultZoom={16}
				defaultCenter={{
					lat: props.latitude || -12.0194509,
					lng: props.longitude || -77.0548013
				}}
				
			>
				<AnyReactComponent
					// @ts-ignore 
					lat={props.latitude}
					lng={props.longitude}
					text="My Marker"
				/>
			</GoogleMap>
		</div>
	)
}


export default GoogleMapReact;