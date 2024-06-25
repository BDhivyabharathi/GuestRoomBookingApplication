// Import necessary modules
import React from 'react';
// import RoomList from '../components/RoomList';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import '../styles/HomePage.css'; // Import CSS for styling
import { Card, Row, Col } from 'react-bootstrap';

// Define the HomePage component
const HomePage = () => {
    return (
        <div>
            <div className="background">
                <h1 className='homeHead'>Welcome to Guest Room Booking</h1>
                <p className='para1'><b><i>Your perfect destination for finding and booking guest rooms</i></b></p>
                <p className='para2'>Looking for a guest house?
                    Warm and welcoming guest houses are ideal for travellers who prefer unfussy accommodation with a personal touch. They are usually family-run, and your host will provide local recommendations and optional meals. Often cheaper than regular hotels,
                    guest houses can also feature a cosy living room and a garden.</p>
                <div>
                    <h1>Book guest rooms with ease and convenience.</h1>
                    <p>Efficiency is key, and with our new guest room booking application, we provide the tools you need to succeed.<br />
                        Experience the power of our booking application and take control of your business.</p>
                    <button className='btn btn-success text-light'>Find Out More</button>
                </div>
                {/* Carousel component */}
                <div className="carousel-container">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://lh3.googleusercontent.com/p/AF1QipOujyxX6W85AA1rpNACkKGBT_G7m1AxiaEl1-xM=w287-h192-n-k-rw-no-v1"
                                alt="Room1"
                            />
                            <div className="room-details">
                                <div className="room-info">
                                    <h3>Room1</h3>
                                    <p>Rent: $100/night</p>
                                    <p>Amenities: Wi-Fi, Breakfast, Parking</p>
                                    <p>About: Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://lh5.googleusercontent.com/p/AF1QipOhmgX5EtrANbijRovOJVzQknr2KN3kP5xlazdL=w252-h189-k-no"
                                alt="Room2"
                            />
                            <div className="room-details">
                                <div className="room-info">
                                    <h3>Room2</h3>
                                    <p>Rent: $120/night</p>
                                    <p>Amenities: Wi-Fi, Breakfast, Swimming Pool</p>
                                    <p>About: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://lh3.googleusercontent.com/p/AF1QipOx6s6FCavnDc1IYwndk76P9SO2zvgavkjpsI9A=w287-h192-n-k-rw-no-v1"
                                alt="Room3"
                            />
                            <div className="room-details">
                                <div className="room-info">
                                    <h3>Room3</h3>
                                    <p>Rent: $90/night</p>
                                    <p>Amenities: Wi-Fi, Parking</p>
                                    <p>About: Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://lh3.googleusercontent.com/proxy/C9tTEj9-HwkTDvGz3rJH0I5f1cnSxOP42b27MS0HqXuQU-AXkKEZofw1njZ8g4tCBfU4hI1ZZGvefGnxQhG5nROTt7wRiSINvJMrBbSSUcOOZrVgqxBPjTxSpV3oRikoc8ji6zC6YBefs4CcbZ7KBBr4huto7A=w287-h192-n-k-rw-no-v1"
                                alt="Room4"
                            />
                            <div className="room-details">
                                <div className="room-info">
                                    <h3>Room4</h3>
                                    <p>Rent: $110/night</p>
                                    <p>Amenities: Wi-Fi, Breakfast, Gym</p>
                                    <p>About: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/401276725.jpg?k=97e5e43082bdac02a33c8005671f282f13c44a7642a78a8d661ad50fc9366ef8&o=&hp=1"
                                alt="Room5"
                            />
                            <div className="room-details">
                                <div className="room-info">
                                    <h3>Room5</h3>
                                    <p>Rent: $400/night</p>
                                    <p>Amenities: Wi-Fi, Breakfast, Swimming Pool</p>
                                    <p>About: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
            <div>
                <h1>Common Amenities</h1>
                <Row>
                    <Col md={4}>
                        <Card className="card-hover-magnify">
                            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/00/49/54/10/360_F_49541041_1Sn3nPlee1PKJJW4D9HVTzR7gBp2eQhW.jpg" alt="Amenity1" />
                            <Card.Body>
                                <Card.Title>Wi-Fi</Card.Title>
                                <Card.Text>
                                    Stay connected with high-speed Wi-Fi.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-hover-magnify">
                            <Card.Img variant="top" src="data:image/jpeg;base64,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" alt="Amenity2" />
                            <Card.Body>
                                <Card.Title>Breakfast</Card.Title>
                                <Card.Text>
                                    Start your day with a delicious breakfast.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-hover-magnify">
                            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/80/11/26/360_F_280112608_32mLVErazmuz6OLyrz2dK4MgBULBUCSO.jpg" alt="Amenity3" />
                            <Card.Body>
                                <Card.Title>Swimming Pool</Card.Title>
                                <Card.Text>
                                    Relax and have fun at our swimming pool.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-hover-magnify">
                            <Card.Img variant="top" src="https://cdn1.npcdn.net/images/1515488503098fafd4b560cc95301bd6b9f276cc04.png?md5id=e4c8c477d15f72bef65651ddb22c5891&new_width=1000&new_height=1000&w=-62170009200" alt="Amenity3" />
                            <Card.Body>
                                <Card.Title>Guest Room Coffee Station</Card.Title>
                                <Card.Text>
                                    Make coffee by your own.Have a cup of coffee.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-hover-magnify">
                            <Card.Img variant="top" src="data:image/jpeg;base64,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" alt="Amenity5" />
                            <Card.Body>
                                <Card.Title>Fire camp</Card.Title>
                                <Card.Text>
                                    An optional fire camp to have fun.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-hover-magnify">
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1QLZy8LcnwKWJUnjQy5pBAjSFXWfUopANQqoNmi3e2MFdA16_r1b5XjcPD4QweWwULg&usqp=CAU" alt="Amenity5" />
                            <Card.Body>
                                <Card.Title>Bathing kits</Card.Title>
                                <Card.Text>
                                    Organic oils and shampoos
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* RoomList component */}
            {/* <RoomList /> */}
        </div>
    );
}

export default HomePage;