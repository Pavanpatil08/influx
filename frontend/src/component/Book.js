import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr:[],
            name: "",
            start:'',
            destination:"",
            mobile:"",
            email:""
            
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
    HandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var Book_Details = {
            start:this.state.start,
            destination:this.state.destination,
            name:this.state.name,
            email:this.state.email
        }
        // console.log(City_Details)
        axios.post('http://127.0.0.1:5000/book' , Book_Details)
            .then(res  => {
                console.log(res.date)
                this.props.history.push('/')
                alert("updated")
            })
            // window.location.reload(false)
            
            .catch((err) => alert(err))
        }
    render() {
        return (
            <>
                <h2 class="text-center mt-t"> Book here </h2>

 
                <form className="offset-4 mt-3" onSubmit = {this.handleSubmit}>
                    
                    <div class="mb-3">
                        <label for="validationTextarea">Start Point</label>
                        <input class="form-control w-50"  name = "start" onChange = {this.HandleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea">Destination</label>
                        <input class="form-control w-50"  name = "destination" onChange = {this.HandleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea">Name</label>
                        <input class="form-control w-50"  name = "name" onChange = {this.HandleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea">Mobile</label>
                        <input class="form-control w-50"  name = "mobile" onChange = {this.HandleChange}></input>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea">Email</label>
                        <input class="form-control w-50"  name = "email" onChange = {this.HandleChange}></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Confirm</button>
                </form>
                <Link to="/Home"><button type="submit" className="btn btn-primary "> Back</button></Link>
            </>
        )
    }
}
export default Book
