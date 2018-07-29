
   const searchValue=(props) => {
    return fetch(`https://swapi.co/api/people/?results=10`)
      .then(results=>{return results.json()})
      .then(data=>{
        if(data.results.name===props.passkey.name&&data.results.birth_year===props.passkey.password)
        props.setState({login:false})
      
      })}
  
  export default searchValue;

  
    