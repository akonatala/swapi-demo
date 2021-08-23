import React,{useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Option } from '@bootstrap-styled/v4';
import Form from "@bootstrap-styled/v4/lib/Form";
import FormGroup from "@bootstrap-styled/v4/lib/Form/FormGroup";
import Label from "@bootstrap-styled/v4/lib/Label";
import Input from "@bootstrap-styled/v4/lib/Input";
import {Spinner} from "react-bootstrap"

import {Character} from '../redux/actions/character'
import {MovieList} from '../redux/actions/movieList'
import {ClearMovieList} from '../redux/actions/clearMovieList'

const FormComponent = (props) => {
  const {movieTitle, clearMovieList, getMovie, getCharacter, releaseDateArray} = props
  const [characterNameList, setCharacterNameList] = useState([]);
  const [characterList, setCharacterList] = useState([]);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const releaseDate = releaseDateArray && releaseDateArray.length >= 1 && releaseDateArray.pop().toString()

  useEffect(() => {
    getCharacter().then((list) => {
      const namesList = list.map(({ name }) => name)
      setCharacterNameList(namesList)
      setCharacterList(list)
    })
  },[]);

  useEffect(() => {
    if(movieTitle.length > 1) {
      setIsSpinnerVisible(false)
    } else {
      setIsSpinnerVisible(true)
    }
  },[movieTitle]);

  const onSelectChangeHandler = (e) => {
    clearMovieList()
    const currentCharacterFilms = characterList.reduce(function(ids, obj){
      if(obj.name === e.target.value){
          ids.push(obj.films);
      }
      return ids;
  }, []);
      getMovie(currentCharacterFilms.flat())
  }

  return (
    <Form>
    <FormGroup>
      <Label htmlFor="example-select">Charecter</Label>
      <Input type="select" name="select" onChange={onSelectChangeHandler}>
        {characterNameList && characterNameList.map(x => {
          return <Option key={x}>{x}</Option>
        })}
      </Input>
    </FormGroup>
    {isSpinnerVisible && 
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }
    {!isSpinnerVisible && 
    <>
    <FormGroup>
      <Label htmlFor="example-fjgv">Film List</Label>
      <div>
      {movieTitle && movieTitle.map(x=>{
        return <li key={x}>{x}</li>
      })}
      </div>
    </FormGroup>
    <FormGroup>
      <Label htmlFor="example-fjgv">Last seen in year</Label>
      <div>
        {releaseDate}
      </div>
    </FormGroup>
    </>
   }
  </Form>
  );
};

const mapStateToProps = state => {
  const { MovieList } = state
  const sortedReleaseDate = MovieList.movieList.map(({ release_date }) => new Date(release_date))
  .sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
  })
  return { 
    movieTitle: MovieList.movieList.map(({ title }) => title),
    releaseDateArray: sortedReleaseDate && sortedReleaseDate
   }
}

const mapDispatchToProps = dispatch => {
  return({
    getCharacter:() => dispatch(Character()),
    getMovie:(urlArray) => dispatch(MovieList(urlArray)),
    clearMovieList: () => dispatch(ClearMovieList())
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(FormComponent)