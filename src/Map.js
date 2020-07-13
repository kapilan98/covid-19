import React,{useEffect,useState} from 'react';

const Map = function ({location,latitude,longitide,confirmed,dead}){
	return (<div>
			<h1>{location}</h1>
			<h1>{latitude}</h1>
			<h1>{longitide}</h1>
			</div>)

}
export default Map;
