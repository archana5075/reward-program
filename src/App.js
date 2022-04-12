import React from "react";
import axios from "axios";
import url from "./customerDataService";

import "./App.css";

class App extends React.Component {
  state = {
    customers: [],
  };
  async componentDidMount() {
    try {
      const customersResponse = await axios.get(`${url}/data`);
      this.setState({
        customers: customersResponse.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        <h1>Customer Rewards Program</h1>

        {this.state.customers.map((customer) => (
          <div className="app-container">
            <table>
              <thead>
                <th>Customer Name</th>
              </thead>
              <tbody>
                <tr>{customer.name}</tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
