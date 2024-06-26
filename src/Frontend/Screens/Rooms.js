import React, { useEffect } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { useState } from "react";
import { Link, NavLink, Path } from "react-router-dom";
import "./Rooms.css";
function Rooms({ room }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  return (
    <div className="row bs roomis">
      <div className="imagedata col-md-4 text-right">
        <img
          src={room.images_urls[0]}
          width="auto"
          height="250"
          className="smallurl"
          alt=""
        />
      </div>
      <div className="data col-md-7 text-left">
        <h1>{room.name}</h1>
        <p>
          <b>Name</b> :- {room.hostel_name}
        </p>
        <p>
          <b>Address</b> :- {room.address}
        </p>
        <p>
          <b>Rentpay</b> :- {room.rent}
        </p>
        <div className="buttons">
          <Link to={`/detail/${room._id}`}>
            <button className="btn btn-primary">Get Info</button>
          </Link>
          <button className="btn btn-primary" onClick={() => handleShow()}>
            Review Details
          </button>
          <button className="btn btn-primary" onClick={() => handleShow2()}>
            Contact Owner
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.hostel_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.images_urls.map((url) => {
              return (
                <Carousel.Item>
                  <img src={url} alt="" className="d-block w-100 bigimg" />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Contact</b> : {room.phoneNumber}
          </p>
          <p>
            <b>Whatsapp</b> : {room.phoneNumber}{""}
          </p>
          <p>
            <b>Email</b> : {room.type}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Rooms