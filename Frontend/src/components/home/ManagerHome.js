import React from 'react'
import { Link, useHistory } from 'react-router-dom';

export default function ManagerHome(props) {
    const object = props.history.location.state.manager;
    const manager = {
        managerId: object.managerId,
        managerName: object.managerName,
        companyId: object.companyId,
        companyName: object.companyName,
        email: object.email,
        mobileNo: object.mobileNo,
        password: object.password
    }
   
    console.log(manager);
    const history = useHistory();
    // history.push("/managerProfile",{manager : manager})
      history.push("/updateStockPrice",{manager : manager})
   
    return (
        <div>
                <form name="managerHomeForm">
                    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
                        <h2 className="navbar-brand col-sm-3 col-md-2 mr-0" >Manager</h2>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <Link className="nav-link text-light" to="/home"
                                onClick={() => {
                                    history.push('/')

                                }}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 bg-light d-none d-md-block sidebar" id="sidebar">
                                <div className="left-sidebar">
                                    <ul className="nav flex-column sidebar-nav">
                                        <li><Link className="nav-link" to={`/managerProfile/${manager.managerId}`} id="manager" >PROFILE</Link></li>
                                        {/* <li><Link className="nav-link" to="/getInvestorDetails" id="manager" >VIEW ALL INVESTORS</Link></li> */}
                                        <li><Link className="nav-link" to="/updateStockPrice" id="manager" >UPDATE STOCK PRICE</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello {manager.managerName}</h1><hr/>
                        {/* <h4>Investor Details</h4>
                        <div className="container col-md-9" id="investorTable">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Investor Id</th>
                                        <th scope="col">Investor Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Mobile No</th>
                                        <th scope="col">Bank Name</th>
                                        <th scope="col">Bank Branch Name</th>
                                        <th scope="col">Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.investors.map(investor=>
                                            <tr key = {investor.id}>
                                                <td>{investor.investorId}</td>
                                                <td>{investor.investorName}</td>
                                                <td>{investor.email}</td>
                                                <td>{investor.mobileNo}</td>
                                                <td>{investor.bankName}</td>
                                                <td>{investor.branchName}</td>
                                                <td>{investor.balance}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div> */}
                    </div>
                </form> 
            </div>
    )
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './AdminHome.css';

// const axios=require('axios').default;
// class ManagerHome extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             investors:[]
//         }

//     }
//     componentDidMount(){
//         axios.get('http://localhost:8080/getAllInvestor').then((response)=>{
//             this.setState({investors :response.data.investorList})
//         });
//     }
//     render(){
//         return(
//             <div>
//                 <form name="managerHomeForm">
//                     <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
//                         <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/managerHome">Dashboard</Link>
//                         <ul className="navbar-nav px-3">
//                             <li className="nav-item text-nowrap">
//                                 <Link className="nav-link text-light" to="/home">Logout</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                     <div className="container-fluid">
//                         <div className="row">
//                             <div className="col-md-2 bg-light d-none d-md-block sidebar" id="sidebar">
//                                 <div className="left-sidebar">
//                                     <ul className="nav flex-column sidebar-nav">
//                                         <li><Link className="nav-link" to="/managerProfile" id="manager" >PROFILE</Link></li>
//                                         <li><Link className="nav-link" to="/updateManager" id="manager" >UPDATE PROFILE</Link></li>
//                                         <li><Link className="nav-link" to="/updateStockPrice" id="manager" >UPDATE STOCK PRICE</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <h1>Hello, Apurva Sutar</h1><hr/>
//                         <h4>Investor Details</h4>
//                         <div className="container col-md-9" id="investorTable">
//                             <table className="table table-sm">
//                                 <thead>
//                                     <tr>
//                                         {/* <th scope="col">Investor Id</th> */}
//                                         <th scope="col">Investor Name</th>
//                                         <th scope="col">Email</th>
//                                         <th scope="col">Mobile No</th>
//                                         <th scope="col">Bank Name</th>
//                                         <th scope="col">Bank Branch Name</th>
//                                         <th scope="col">Balance</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         this.state.investors.map(investor=>
//                                             <tr key = {investor.id}>
//                                                 {/* <td>{investor.investorId}</td> */}
//                                                 <td>{investor.investorName}</td>
//                                                 <td>{investor.email}</td>
//                                                 <td>{investor.mobileNo}</td>
//                                                 <td>{investor.bankName}</td>
//                                                 <td>{investor.branchName}</td>
//                                                 <td>{investor.balance}</td>
//                                             </tr>
//                                         )
//                                     }
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </form> 
//             </div>
//         );
//     }
// }
// export default ManagerHome;