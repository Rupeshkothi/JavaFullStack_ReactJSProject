import React from 'react';
import { Link } from 'react-router-dom';
import './Manager.css';

const axios=require('axios').default;
class ManagerUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[],
            companyId:'',
            companyName:'',
            managerId:'',
            managerName:'',
            email:'',
            mobileNo:''
        }
    }
    updateManager=()=>{
        var cId = document.forms["updateManagerForm"]["companyId"].value;
        var cName = document.forms["updateManagerForm"]["companyName"].value; 
        var mId = document.forms["updateManagerForm"]["managerId"].value; 
        var mName = document.forms["updateManagerForm"]["managerName"].value;
        var email = document.forms["updateManagerForm"]["email"].value; 
        var mobileNo = document.forms["updateManagerForm"]["mobileNo"].value; 
        axios.put("http://localhost:8081/updateManager",{
                managerId : mId,
                managerName : mName,
                companyId: cId,
                companyName : cName,
                email: email,
                mobileNo: mobileNo
        }).then((response)=>{
            this.setState({res : response.data.message})
            window.confirm(response.data.message)
        }); 
    }
    render(){
        return(
            <div>
                <form name="managerHomeForm" action="/">
                    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
                        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/managerHome">Dashboard</Link>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <Link className="nav-link text-light" to="/home">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 bg-light d-none d-md-block sidebar" id="sidebar">
                                <div className="left-sidebar">
                                    <ul className="nav flex-column sidebar-nav">
                                        <li><Link className="nav-link" to="/managerProfile" id="manager" >PROFILE</Link></li>
                                        <li><Link className="nav-link" to="/updateManager" id="manager" >UPDATE PROFILE</Link></li>
                                        <li><Link className="nav-link" to="/updateStockPrice" id="manager" >UPDATE STOCK PRICE</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, Apurva Sutar</h1><hr/>
                        <h3>Please Update Your Profile...</h3><br/>
                        <div className="container">
                            <div className="col-md-5 container" id="managerProfile">
                                <form autoComplete="off" name="updateManagerForm" action="/managerHome" onSubmit={this.updateManager}>
                                    <div className="container">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" value="111" name="managerId" id="managerId"
                                            pattern="^[0-9]*$" title="Manager ID should have only numbers" disabled required/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Apurva Sutar" value="Apurva Sutar"  name="managerName" id="managerName"
                                            pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Manager name should only have only alphabets and firstname and lastname" />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" value="103" name="companyId" id="companyId"
                                            pattern="^[0-9]*$" title="Company ID should have only numbers" disabled required/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-building"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" value="PVR" name="companyName" id="companyName"
                                            pattern="^[a-zA-Z]+$" title="Company name should only have only alphabets" disabled required />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                            </div>
                                            <input type="email" className="form-control" placeholder="apurva@gmail.com" value="apurva@gmail.com" name="email" id="email"
                                            title="(Ex:abc@gmail.com)" />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-mobile-alt"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" placeholder="9823973982" value="9823973982" name="mobileNo" id="mobileNo"
                                            pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9" />
                                        </div>
                                        <div className="form-group input-group">
                                            <input type="submit" className="form-control btn bg-primary text-light" value="UPDATE DETAILS"/>
                                            {/* onClick={()=>{alert("Manager Details Updated Successfully")}}/> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </form> 
            </div>
        );
    }
}
export default ManagerUpdate;