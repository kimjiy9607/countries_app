import React from 'react';
import axios from "axios";
import Country from "./Country"

class App extends React.Component {
  state = {
    isLoading: true,
    countries: []
  };

  // getCountries = async() => {
  //   const countries = await axios.get("https://restcountries.eu/rest/v2/name");
  //   console.log(countries);
  //   this.state.countries.map(country => {
  //     {country.name}
  //   });
  //   //this.setState({ countries, isLoading: false });
  // };

  getCountries = async () => {
    const countries = await axios.get("https://restcountries.eu/rest/v2/all");
    //const countriesData = countries.data;
    this.setState({
      countries: countries.data,
      isLoading: false
    });
  };


  componentDidMount() {
    this.getCountries();
  }

  // getCurrency = async () => {
  //   const {
  //     data: {
  //       currencies: { code }
  //     }
  //   } = await axios.get("https://restcountries.eu/rest/v2/all");
  // }

  render(){
    const{ isLoading, countries } = this.state;
    return (
      <div>
        {isLoading ? "Loading..."
         : countries.map(country => (
           <Country 
              key={country.id}
              id={country.id}
              name={country.name}
              capital={country.capital}
              flag={country.flag}
           />
         ))}
      </div>
    )
    
  }
}

export default App;
