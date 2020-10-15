import React from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

const axios=require('axios').default;
class UpdateCompany extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[],
            companyId:'',
            companyName:'',
            managerId:'',
            managerName:'',
            noOfStocks:'',
            stockPrice:'',
            percentageChange:'',
            company:{}
        }
    }
    updateCompany=()=>{
        var cId = document.forms["updateCompanyForm"]["companyId"].value;
        var cName = document.forms["updateCompanyForm"]["companyName"].value; 
        var mId = document.forms["updateCompanyForm"]["managerId"].value; 
        var mName = document.forms["updateCompanyForm"]["managerName"].value;
        var no = document.forms["updateCompanyForm"]["noOfStocks"].value; 
        var stockPrice = document.forms["updateCompanyForm"]["stockPrice"].value; 
        var percentageChange = document.forms["updateCompanyForm"]["percentageChange"].value; 
        axios.put(`http://localhost:8081/updateCompany/${cId}`,{
                companyId: cId,
                companyName : cName,
                managerId : mId,
                managerName : mName,
                noOfStocks : no,
                stockPrice:stockPrice,
                percentageChange:percentageChange
        }).then((response)=>{
            this.setState({res : response.data.message})
            window.confirm(response.data.message)
        }); 
    }

    render(){
        return(
            <div>
                <form name="adminHomeForm">
                    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
                        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/adminHome">Dashboard</Link>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <Link className="nav-link text-light" to="/home">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 bg-light d-none d-md-block sidebar">
                                <div className="left-sidebar">
                                    <ul className="nav flex-column sidebar-nav">
                                        <li ><Link className="nav-link btn" to="/addCompany">ADD COMPANY</Link></li>
                                        {/* <li><Link className="nav-link btn" to="/updateCompany">UPDATE COMPANY</Link></li> */}
                                        <li><Link className="nav-link btn" to="/deleteCompany">DELETE COMPANY</Link></li>
                                        <li><Link className="nav-link btn" to="/getCompanyDetails">VIEW ALL COMPANY</Link></li>
                                        <li ><Link className="nav-link btn" to="/getAllManagers">VIEW ALL MANAGERS</Link></li>
                                        <li><Link className="nav-link btn" to="/getInvestorDetails">VIEW ALL INVESTORS</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, Welcome To Stock Management System</h1><hr/>
                        <h3>Please Update Company Details Here...</h3><br/>
                        <div className="col-md-3 container text-center" id="updateCompanyForm">
                            <form autoComplete="off" name="updateCompanyForm" action="/adminHome" onSubmit={this.updateCompany}>
                                <div className="container">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-id-card"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Company ID" name="companyId" 
                                            pattern="^[0-9]*$" title="Company ID should have only numbers"
                                            id="companyId" required/>
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-building"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Company Name" name="companyName" 
                                            pattern="^[a-zA-Z]+$" title="Company name should only have only alphabets"
                                            id="companyName" required />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-id-card"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Manager ID" name="managerId" 
                                            pattern="^[0-9]*$" title="Manager ID should have only numbers"
                                            id="managerId" required/>
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-user"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Manager Name" name="managerName" 
                                            pattern="^[a-zA-Z]+$" title="Manager name should only have only alphabets"
                                            id="managerName" required />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i class="fas fa-cubes"></i>
                                            </div>
                                        </div>
                                        <input type="number" className="form-control" placeholder="Number Of Stocks" name="noOfStocks"
                                        id="noOfStocks" />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i class="fas fa-rupee-sign"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" placeholder="Stock Price" name="stockPrice"
                                        id="stockPrice"/>
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-percent"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" placeholder="Percentage Change" name="percentageChange"
                                        id="percentageChange"/>
                                    </div>
                                    <div className="form-group input-group">
                                        <input type="submit" className="form-control btn bg-primary text-light" value="UPDATE COMPANY"/>
                                        {/* onClick={()=>{alert("Company Details Updated Successfully")}}/> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default UpdateCompany;