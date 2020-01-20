import React, { Component } from 'react';
import axios from 'axios'


export class Createcar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            car_model:"",
            car_type:"",
            seats:"",
            color:"",
        }
    }
    componentDidMount = () => {
        axios.get('http://127.0.0.1:5000/read/cars')
            .then(res => {
                this.setState({
                    arr: res.data,
                })
                console.log(res.data)
            })
            .catch((err) => alert(err))
    }
    HandleChange = (e) => {


        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var Car_Details = {
            car_model: this.state.car_model,
            car_type : this.state.car_type,
            seats: this.state.seats,
            color: this.state.color,
        }
        // console.log(City_Details)
        axios.post('http://127.0.0.1:5000/addcar', Car_Details)
            .then(res => {
                console.log(res.date)
                alert("created")
                this.props.history.push('/')
            })

            .catch((err) => alert(err))
    }

    render() {
     console.log(this.state)
        return (
            <form className="offset-4 mt-3" onSubmit={this.handleSubmit}>
                <h3> create Car_Details</h3>
                <div class="input-group w-25">
                    <div class="mb-3 mt-5">
                        <label for="validationTextarea">Car Model</label>
                        <input class="form-control w-100" name="car_model" onChange={this.HandleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea">Car Type</label>
                        <input class="form-control w-100" name="car_type" onChange={this.HandleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea">Seats</label>
                        <input class="form-control w-100" name="seats" onChange={this.HandleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea">Color</label>
                        <input class="form-control w-100" name="color" onChange={this.HandleChange}></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>

        )
    }
}

export default Createcar
