import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import APIURL from './helpers/enviornment'

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      userEmail: "",
      phone_number: "",
      age: "",
      child: "",
      counseling: "",
      subCounseling: ""
    };
  }

  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      fetch(`${APIURL}/profile/update/:id`, {
        method: "PUT",
        body: JSON.stringify({ log: this.state }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token
        })
      })
        .then(res => res.json())
        .then(logData => {
          this.props.updateProfileArray();
          this.setState({
            firstName: "",
            lastName: "",
            userEmail: "",
            phone_number: "",
            age: "",
            child: "",
            counseling: "",
            subCounseling: ""
          });
        });
    };
  

  render(){
      return(
          <div>
              Updated Shelter Component
          </div>
      )
  }

}

export default ProfileEdit;
