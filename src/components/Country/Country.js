import React from 'react';
import{useState,useEffect} from 'react'
import "./Country.css";
export const Country = () => {
    const [countries, setCountries] = useState([]);
  useEffect(() => {
   fetch('https://restcountries.com/v2/all')
   .then(res=>res.json())
   //.then(data=>console.log(data))
   .then(data=>setCountries(data))
   .catch(error=>console.log(error))
  }, []);

    return(
    <div className="grid">
     {countries.map(country=>
        {
          const {numericCode,flag,name,population,region,capital}=country;
          return <article key={numericCode}>
          <div>
          <img src={flag} alt={name}/>
          <div className="details">
          <h3>{name}</h3>
          <h4>Capital: <span>{capital}</span></h4>
          <h4>Region: <span>{region}</span></h4>
          <h4>Population: <span>{population}</span></h4>
          </div>
          </div>

          </article>
      })}
   
    </div>
    );
};
