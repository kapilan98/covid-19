import React,{useEffect,useState} from 'react';
import axios from 'axios'
import World from './World'
import styles from './country.module.css'
import Country from './Country'
import Pagination from './Pagination'
import Map from './Map'
import Footer1 from './Footer1.js'
import GoogleMapReact from 'google-map-react';
const App= function (){
  
// const Map = ReactMapboxGl({
//   accessToken:
//    'pk.eyJ1Ijoia2FwaWxhbiIsImEiOiJja2NoY3pnZDExMGtsMnJtMnFoaHd0cWlwIn0.z4g91BZ7QgqRQV-2Oy_6qQ'
// });
 const [latest, setLatest]=useState([]);

  const [results,setResults]=useState([]); 

  const [loading,setLoading]=useState(false);

  const [world, setWorld]=useState([]);
  const [display, setDisplay]=useState(false);
  const [currentPage, setCurrentPage]=useState(1)

  const [postsPerPage,setPostsPerPage]=useState("12"); 

  const [searchCountry,setSearchCountry]=useState("") 


  useEffect(()=>{
   
          setLoading(true);
    axios
        .all([
    axios.get("https://corona.lmao.ninja/v2/all"),
    axios.get("https://corona.lmao.ninja/v2/countries"),
    axios.get("https://www.trackcorona.live/api/countries")
    ])
    .then(res=>{

        setLatest(res[0].data);
      //console.log(res[0].data);      
      console.log(res[2].data.data);
      setResults(res[1].data);
      setWorld(res[2].data.data);
      setLoading(false);
    })
    .catch(err=>{
      console.log(err)
    })
  },[display])

    //const {location} = world
    //console.log(location)
  
const indexOfLastPost= currentPage * postsPerPage;

const indexOfFirstPoat= indexOfLastPost - postsPerPage; 

const currentPosts=results.slice(indexOfFirstPoat,indexOfLastPost)

const paginate = pageNumber => setCurrentPage(pageNumber);


const filterCountry= results.filter(item =>{
  return  searchCountry!=="" ? item.country.includes(searchCountry):item;
})

 const countrieslocation=results.map((data,i)=>{
      return(
            <div 
                key={i}
              lat={data.countryInfo.lat}
              lng={data.countryInfo.long}
              style={{
                fontFamily:"Times New Roman",
                color:"red",
                backgroundColor:'rgba(182, 152, 152, 0.5)',
                height:"73px",
                width:"103px",
                textAlign:"center",
                overflow: 'hidden',
                borderRadius:80/5,
              }}
                > <h6 style={{color:"rgba(242, 152,0)"}}>C - {data.cases}</h6>
                <h6 style={{color:"black"}}>{data.country} <img src={data.countryInfo.flag} height="13px" width="18px"/></h6> 
                <span style={{color:"rgba(142, 252,0)"}}>R - {data.recovered}</span>
                </div>
        )

    })

const clickHandler=(e)=>{
  setSearchCountry(e.target.value)
  setDisplay(true);
}

const date= new Date(parseInt(latest.updated))
const lastUpdated=date.toString()
  return(
    <div>
    
    <h1 className="fheading"> Covid-19 Live Statistics </h1>
    <div className={styles.space}/>

 
    <h1 className="wheading">World wide Statistics</h1>
        <div className={styles.space}/>

        <World active={latest.active}
         cases={latest.cases}
         deaths={latest.deaths}
         recovered={latest.recovered}
         tcases={latest.todayCases}
         tdeaths={latest.todayDeaths}
         trecovered={latest.todayRecovered}
         loading={loading}
         updated={lastUpdated}
         />
         <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDzc7NqvRGBVU8zZkpqSIUtHkDp_NLldCM" }}
          defaultCenter={ {
                    lat: 28.7041,
                    lng: 77.1025

                }}
          defaultZoom={4} >
            {countrieslocation}
        </GoogleMapReact>
        <br/>
        <div style={{textAlign:"center"}}>
          <h4 style={{color:"rgba(242, 152,0)"}}>C: Cases</h4>
          <h4 style={{color:"rgba(142, 252,0)"}}>R: Recovered</h4>
      <div className={styles.space}/>
        </div>
      </div>
      <div className={styles.space}/>
            <div className={styles.space}/>
        <form>
        <section className="searchbox-wrap">
          <input type="text" list="data" placeholder="Search for a country...." 
            className="searchbox"
          onChange={clickHandler} />


             <datalist id="data">
                {results.map((item, key) =>
              <option key={key} value={item.country} />
    )}
  </datalist>
      </section>
          </form>

            <Country posts={currentPosts} filterCountry={filterCountry} display={display} loading={loading}/>
         <Pagination display={display}
        postsPerPage={postsPerPage}
        totalPosts={results.length}
        paginate={paginate}/>
         <Footer1/> 
    </div>

    )
}
export default App;
