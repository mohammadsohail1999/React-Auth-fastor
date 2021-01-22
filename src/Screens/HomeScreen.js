import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import { fetchRestaurants } from "../actions/RestaurantActions";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const history = useHistory();

  const { userInfo } = useSelector((state) => state.userLogin);


  const dispatch = useDispatch();

  const { places } = useSelector((state) => state);

  console.log(places.places);
   

  useEffect(() => {

    if (!userInfo) {
      history.push("/login");
    }
    else{
     dispatch(fetchRestaurants());     
   }
    


  }, [dispatch, history, userInfo]);

  return (
    <div>
      <Container>
        <h1>HOME Screen</h1>

        <Row>
          {places.places &&
            places.places.map((place, i) => (
              <Col className='p-3' key={i} xs={12} md={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img style={{width:'100%',height:300}} variant="top" src={place.cover_image} />
                  <Card.Body>
                    <Card.Title>{place.restaurant_name}</Card.Title>
                    <Card.Text>
                      {place.address_complete}
                    </Card.Text>
                   <Link><Button variant="primary">Details</Button></Link> 
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
