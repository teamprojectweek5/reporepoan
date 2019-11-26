// import React, { Component } from "react";
// import axios from 'axios'

class AddNewData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      id: 0,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      password: "",
      status: false
      //   isEdit: false
    };
  }
  componentDidMount() {
    axios
      .get(`https://cobacoba-hayepe.herokuapp.com/`)
      .then(result => {
        this.setState({
          allData: result.data
        });
      })
      .catch(error => console.log(error));
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  submitData = event => {
    event.preventDefault();
    const { allData, ...ambilSisanya } = this.state;
    console.log(ambilSisanya);
    axios
      .post(`https://cobacoba-hayepe.herokuapp.com/`, ambilSisanya)
      .then(result => {
        console.log(result);
        this.setState({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          email: "",
          password: "",
          allData: result.data.allData
        });
      })
      .catch(error => console.log(error));
    // console.log(this.state);
  };
}

// class AddNewUser extends Component {
//   render() {
//     axios.post(`https://cobacoba-hayepe.herokuapp.com/user/register`, {
//         {
//         mobileNumber: "0",
//         firstName: "",
//         lastName:"",
//         dateOfBirth: "",
//         gender: "",
//         email: "",
//         password: ""
//     }
//     })
//           .then(result => console.log(result))
//           .catch(error => console.log(error));
//       };

//     return <div>

//     </div>;
//   }
// }

// export default AddNewUser;
