import { ListGroup, ListGroupItem, Card } from 'react-bootstrap'

const ListItem = ({ recipe }) => {
  return (
    <>
      <div className="card mb-4">
        <img src={recipe.image} alt="recipe" />
        <div className="card-body">
          <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
            <h1 className="ml-3">{recipe.title}</h1>
          </a>

          <ListGroup variant="flush">
            <ListGroupItem className="card-details">
              <a
                className="text-success"
                href={recipe.sourceUrl}
                target="_blank"
                rel="noreferrer">
                {recipe.sourceUrl}
              </a>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default ListItem
