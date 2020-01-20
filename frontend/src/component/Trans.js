import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Trans extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr:[],
           amount : "",
            
        }
    }
    HandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var Trans_Details = {
            amount:this.state.amount,
            
        }
        // console.log(City_Details)
        axios.post('http://127.0.0.1:5000/book' , Trans_Details)
            .then(res  => {
                console.log(res.date)
                this.props.history.push('/')
                alert("Transaction sucessful")
            })
            // window.location.reload(false)
            
            .catch((err) => alert(err))
        }
    render() {
        return (
            <>
                <h2 class="text-center mt-t">Complete Transaction Here </h2>
                <form className="offset-4 mt-3" onSubmit = {this.handleSubmit}>
                    <div class="mb-3">
                        <label for="validationTextarea">Amount</label>
                        <input class="form-control w-50"  name = "email" onChange = {this.HandleChange}></input>
                    </div>
                    <Link to="/Createcar"><button type="submit" className="btn btn-primary ">Confirm</button></Link>
                </form>
                <Link to="/Home"><button type="submit" className="btn btn-primary "> Back</button></Link>
            </>
        )
    }
}
export default Trans