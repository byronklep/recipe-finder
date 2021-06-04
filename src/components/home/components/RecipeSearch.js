import React, { useState } from 'react'
import axios from 'axios'
import { Spinner, Container } from 'react-bootstrap'
import ListItem from './ListItem'

const RecipeSearch = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [q] = useState('')
  const [inputValue, setValue] = useState('')
  const [inputValue1, setValue1] = useState('')
  const [inputValue2, setValue2] = useState('')
  const [inputValue3, setValue3] = useState('')
  const [recipe, setRecipe] = useState(inputValue)
  const [diet, setDiet] = useState(inputValue1)
  const [excludeIngredients, setExcludeIngredients] = useState(inputValue2)
  const [intolerances, setIntolerances] = useState(inputValue3)

  const searchRecipe = () => {
    const options = {
      method: 'GET',
      url:
        'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
      params: {
        query: recipe,
        diet: diet,
        excludeIngredients: excludeIngredients,
        intolerances: intolerances,
        number: '10',
        offset: '0',
        type: 'main course',
      },
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results)
        setLoading(false)
        // console.log(response.data.results)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRecipe(inputValue)
    setDiet(inputValue1)
    setExcludeIngredients(inputValue2)
    setIntolerances(inputValue3)
    searchRecipe()
  }
  if (loading) {
    return <Spinner animation="grow" variant="info" />
  }

  return (
    <Container>
      <div className="row m-5">
        <div className="col-md-12">
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-12 col-sm pr-sm-0">
              <input
                type="text"
                name="search"
                placeholder="Enter key terms"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                className="form-control"
              />

              <input
                type="text"
                name="diet"
                placeholder="Enter diet details"
                value={inputValue1}
                onChange={(e) => setValue1(e.target.value)}
                className="form-control"
              />

              <input
                type="text"
                name="search"
                placeholder="Exclude ingredients"
                value={inputValue2}
                onChange={(e) => setValue2(e.target.value)}
                className="form-control"
              />

              <input
                type="text"
                name="search"
                placeholder="Intolerances"
                value={inputValue3}
                onChange={(e) => setValue3(e.target.value)}
                className="form-control"
              />

              <div className="col-12 col-sm-auto pl-sm-0">
                <input
                  type="submit"
                  name="commit"
                  value="Search"
                  className="btn btn-primary btn-block"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <br />

      <div className="cards">
        {data.map((recipe, id) => (
          <ListItem key={id} recipe={recipe} q={q} />
        ))}
      </div>
    </Container>
  )
}

export default RecipeSearch
