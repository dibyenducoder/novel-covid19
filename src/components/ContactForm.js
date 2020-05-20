import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import StarRating from './StarRating';
import Button from 'react-bootstrap/Button';

class ContactForm extends Component {

  state = {
    name: '',
    email: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault();
    const { name , email, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'dibyendu230@gmail.com',
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_jHJLieQS',
       templateParams,
      'user_h0HaQKQ1mWKIwska36EIJ'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
      <Form.Row>
      <Form.Group as={Col} controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" 
          name="name"
          value={this.state.name}
          placeholder="Your Name"
          onChange={this.handleChange.bind(this, 'name')}/>
      </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"
          name= "email" 
            value={this.state.email}
            placeholder="Enter email" 
            onChange={this.handleChange.bind(this, 'email')}/>
        </Form.Group>
        </Form.Row>
        <p>Rate ME!</p>
        <StarRating /> 
          
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Howdy !</Form.Label>
        <Form.Control type="textarea" as="textarea" 
        name = "message"
            value={this.state.message}
            rows="3" 
            onChange={this.handleChange.bind(this, 'message')}/>
      </Form.Group>
      
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary" type="submit">
           Send
          </Button>
       
     </Form>
    )
  }
}
export default ContactForm