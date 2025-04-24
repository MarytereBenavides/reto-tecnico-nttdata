import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function CardComponent({data}) {
    const dataMock=[
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Laura",
                "last": "Woods"
            },
            "location": {
                "street": {
                    "number": 2479,
                    "name": "Henry Street"
                },
                "city": "Blessington",
                "state": "Wexford",
                "country": "Ireland",
                "postcode": 78276,
                "coordinates": {
                    "latitude": "2.0565",
                    "longitude": "95.2422"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email": "laura.woods@example.com",
            "dob": {
                "date": "1967-07-23T09:18:33.666Z",
                "age": 57
            }
        }
    ]
    console.log("datacomo", data)

    let {email, name, picture , gender, location, dob } = data
    const date = new Date(dob.date)
    const formattedDate = format(date, 'dd MMMM yyyy', { locale: es })
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture.large} />
      <Card.Body>
        <Card.Title>{name.title} {name.first} {name.last}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{location.country}</ListGroup.Item>
        <ListGroup.Item>{gender === "female" ? "Mujer" : "Hombre"}</ListGroup.Item>
        <ListGroup.Item>{formattedDate}</ListGroup.Item>
        <ListGroup.Item>{location.city}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardComponent;