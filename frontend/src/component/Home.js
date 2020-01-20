import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
    }
  }
 
 componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:5000/read/cars',
        })

            .then((response) => {
                 console.log(response)
                this.setState({
                    arr: response.data,
                });
            })
            .catch((err) => alert(err))
    }
  render() {
    
    return (
      <div>
        <h3 className="text-center mb-5"> ProHire</h3>
        <form class="form-inline my-2 my-lg-0">
           <label for="validationTextarea">Start Date</label>
          <input class="form-control mr-sm-2" type="seach" placeholder="From" aria-label="Search" />
          <label for="validationTextarea">End Date</label>
          <input class="form-control mr-sm-2" type="search" placeholder="To" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <table class="table table-dark mt-5">
       <thead>
            <tr>
            <th scope="col">Car Model</th>
              <th scope="col">Car Type</th>
              <th scope="col">Seats</th>
              <th scope="col">color</th>
              <th scope="col">Book</th>
              
            </tr>
          </thead>
          <tbody>
              {this.state.arr.map((e) => {
        
              return (
                // <table class="table">
                <tr className="">
                  <td>{e.car_model}</td>
                  <td> {e.car_type}</td>   
                  <td>{e.seats}</td> 
                  <td>{e.color}</td>
                  <td>
                  <Link to={`/Book/${e.car_id}`}><button type="submit" className="btn btn-primary ">Book</button></Link>
                  </td>
                </tr>
                
              );
            })}
          </tbody>
        </table>
      
        <Link to="/Createcar"><button type="submit" className="btn btn-primary "> Add Car</button></Link>
      </div>
    )
  }
}


