import React from 'react';
import { Link } from 'react-router-dom';
import './Stock.css';

class GetStockDetails extends React.Component{
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
                            <div className="col-md-2 bg-light d-none d-md-block sidebar" id="sidebar">
                                <div className="left-sidebar">
                                    <ul className="nav flex-column sidebar-nav">
                                        <li ><Link className="nav-link btn" to="/addCompany">ADD COMPANY</Link></li>
                                        <li><Link className="nav-link btn" to="/updateCompany">UPDATE COMPANY</Link></li>
                                        <li><Link className="nav-link btn" to="/deleteCompany">DELETE COMPANY</Link></li>
                                        <li><Link className="nav-link btn" to="/getCompanyDetails">VIEW ALL COMPANY</Link></li>
                                        <li ><Link className="nav-link btn" to="/getAllManagers">VIEW ALL MANAGERS</Link></li>
                                        <li><Link className="nav-link btn" to="/getInvestorDetails">VIEW ALL INVESTORS</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, Welcome To Stock Management System</h1><hr/>
                        <h4>Stock Details</h4>
                        <div className="container col-md-9" id="stockTable">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Investor Id</th>
                                        <th scope="col">Stock Id</th>
                                        <th scope="col">Stock Name</th>
                                        <th scope="col">Company Id</th>
                                        <th scope="col">quatity</th>
                                        <th scope="col">Avg Price</th>
                                        <th scope="col">Total No. Of Stocks</th>
                                        <th scope="col">ProfitLoss</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>78</td>
                                        <td>1</td>
                                        <td>DMART</td>
                                        <td>157</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>2114.08</td>
                                        <td>1.47</td>
                                        <td>Buy</td>
                                        <td>Completed</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>Airtel</td>
                                        <td>101</td>
                                        <td>2</td>
                                        <td>1570.1</td>
                                        <td>5</td>
                                        <td>0.07</td>
                                        <td>Buy</td>
                                        <td>Completed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form> 
            </div>
        );
    }
}
export default GetStockDetails;