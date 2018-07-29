import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
import { searchCharacters } from '../../actions/searchActions';
import { getCharacterDetails, clearCharacterDetails } from '../../actions/characterDetailsActions';
import Search from '../../components/Search';
import CharacterDetails from '../../components/CharacterDetails';
import SimpleStorage, { resetParentState, clearStorage} from "react-simple-storage";
import Modal from '../../modal/Modal';
import Login from '../../login/login';



class StarWarsSearch extends Component {

  state = {
    login:true,
     name: "",
      password: ""
  }
  initialState = this.state;

  onSubmit=(event)=>{

    var name = this.state.name.toLowerCase();
    var password=this.state.password.toLowerCase();
    event.preventDefault();
   
    fetch(`https://swapi.co/api/people/?results=10`).then(function (response) {
     return response.json();
   }).then( (result)=>{
     
     var n = result.results.length
     var i =0;
 
   while(i<n)
   {
     if(result.results[i].name.toLowerCase()===name&&result.results[i].birth_year.toLowerCase()===password)
      
      
      {
        this.setState({login:false}, this.handleSubmit);
        localStorage.setItem("login", false);
        break;
      }
      else
        i++;       
   }
  if(i>=n)
  alert("Wrong Credentials!!!")
 
   });
 }

  handleSubmit= function() {
    /* Using for callback */
  }

handleNameChange = (event) => {


  this.setState({name:event.target.value}, this.handleSubmit);
}

handlePasswordChange = (event) => {
 
  this.setState({password:event.target.value}, this.handleSubmit);
 
}



  placeholder = 'Star Wars Character Search'; 

  searchCharacters = ({ target }) => {
    const { searchCharacters } = this.props;
    const { value } = target;

    searchCharacters(value);
  };


  render() {
    const {
      results,
      character,
      getCharacterDetails,
      clearCharacterDetails
    } = this.props;

    if (!character) {
      return (

   <Fragment>
        <SimpleStorage parent={this}  prefix={"StarWarsSearch"}/> 

     <Modal propsToShow={this.state.login}>
            <Login 
            handleSubmit={this.handleSubmit}
            handleNameChange={this.handleNameChange}
            handlePasswordChange={this.handlePasswordChange}
            submit={this.onSubmit}
            
            />
         
    </Modal> 
 
        <Search
          placeholder={this.placeholder}
          searchCharacters={this.searchCharacters}
          onInput={this.searchCharacters}
          results={results}
          onClick={getCharacterDetails}
          logout={() => resetParentState(this, this.initialState)}
          reset={()=>clearStorage("StarWarsSearch")}
        />
   </Fragment>

      );
    }

    return (
    
      <CharacterDetails
        character={character}
        clearCharacterDetails={clearCharacterDetails}
      />
    
    );
  }
}

const mapStateToProps = ({ results, character }) => {
  return {
    results,
    character
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
    searchCharacters: term => dispatch(searchCharacters(term)),
    getCharacterDetails: id => dispatch(getCharacterDetails(id)),
    clearCharacterDetails: () => dispatch(clearCharacterDetails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsSearch);
