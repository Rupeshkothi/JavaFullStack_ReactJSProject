import React from 'react';
import { Link } from 'react-router-dom';

const axios=require('axios').default;
class GetInvestorStock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            stocks:[]
        }
    }
    getStocks = () =>{
        var investorId = document.forms["getStockForm"]["investorId"].value;
        axios.get(`http://localhost:8081/getInvestorStockDetails/${investorId}`).then((response)=>{
            this.setState({stocks : response.data.stockList})
            
        });
    } 
    
    // componentDidMount(){
    //     var investorId = document.forms["getStockForm"]["investorId"].value;
    //     axios.get(`http://localhost:8081/getInvestorStockDetails/${investorId}`).then((response)=>{
    //         this.setState({stocks : response.data.stockList})
    //     });
    // }
    render(){
        
        return(
            <div>
                <form name="adminHomeForm">
                    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
                        <h2 className="navbar-brand col-sm-3 col-md-2 mr-0" >Investor</h2>
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
                                    <li><Link className="nav-link" to="/investorProfile" id="investor" >PROFILE</Link></li>
                                        {/* <li><Link className="nav-link" to="/updateInvestor" id="investor" >UPDATE PROFILE</Link></li> */}
                                         <li><Link className="nav-link" to="/getAllStocks" id="investor" >VIEW ALL STOCKS</Link></li>
                                         <li><Link className="nav-link" to="/viewCompany" id="investor" >VIEW ALL COMPANIES</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, Investor</h1><hr/>
                        <h3>Please Enter Your ID Here...</h3>
                        <div className="col-md-3 container text-center">
                            <form name="getStockForm" action="" onSubmit={this.getStocks}>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fas fa-id-card"></i>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Investor ID" name="investorId" 
                                      id="investorId"  pattern="^[0-9]*$" title="Investor ID should have only numbers" required/>
                                </div>
                                <div className="form-group input-group">
                                    <input type="submit" className="form-control btn bg-primary text-light" value="GET STOCK DETAILS"/>
                                        {/* onClick={()=>{alert("Company Details Deleted Successfully")}}/> */}
                                </div><br/><br/>
                            </form>
                        </div>
                        <div className="container" id="companyTable">
                            <table className="table table-borderless table-stripped">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Quantity</th>
                                        <th>Avg. Price</th>
                                        <th>Total No. Of Stocks</th>
                                        <th>ProfitLoss</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.stocks.map(stock=>
                                            <tr key = {stock.id}>
                                                <td>{stock.stockName}</td>
                                                <td>{stock.quantity}</td>
                                                <td>{stock.avgPrice}</td>
                                                <td>{stock.totalNoOfStocks}</td>
                                                <td>{stock.profitLoss}</td>
                                                <td>{stock.status}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form> 
            </div>
        );
    }
}
export default GetInvestorStock;













// import React from 'react'
// import { Link } from 'react-router-dom'

// const axios=require('axios').default;
// class GetInvestorStock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             stocks:[]
//         }
//     }
//     getStockDetails=()=>{
//         var investorId=document.forms[""][""].value;
//         axios.get(`http://localhost:8080/getInvestorStockDetails/${investorId}`).then((response)=>{
//             this.setState({stocks : response.data.stockList})
//         });
//     }
//     render(){
//         return (
//             <div>
//                 <form name="investorHomeForm">
//                     <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
//                         <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/investorHome">Dashboard</Link>
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
//                                         <li><Link className="nav-link" to="/investorProfile" id="investor" >PROFILE</Link></li>
//                                         <li><Link className="nav-link" to="/updateInvestor" id="investor" >UPDATE PROFILE</Link></li>
//                                         <li><Link className="nav-link" to="/getAllStocks" id="investor" >VIEW ALL STOCKS</Link></li>
//                                         <li><Link className="nav-link" to="/investorHome" id="investor" >VIEW ALL COMPANIES</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <h1>Hello, Investor</h1><hr/>
//                         <div className="container" id="companyTable">
//                             <table className="table table-sm">
//                                 <thead>
//                                     <tr>
//                                         {/* <th scope="col">Investor Id</th> */}
//                                         {/* <th scope="col">Stock Id</th> */}
//                                         <th scope="col">Stock Name</th>
//                                         <th scope="col">Company Id</th>
//                                         <th scope="col">quatity</th>
//                                         <th scope="col">Avg Price</th>
//                                         <th scope="col">Total No. Of Stocks</th>
//                                         <th scope="col">ProfitLoss</th>
//                                         <th scope="col">Type</th>
//                                         <th scope="col">Status</th>
//                                         <th scope="col"></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         {/* <td>222</td> */}
//                                         <td>DMART</td>
//                                         <td>157</td>
//                                         <td>2</td>
//                                         <td>3600.1</td>
//                                         <td>2</td>
//                                         <td>5.56</td>
//                                         <td>buy</td>
//                                         <td>Completed</td>
//                                     </tr>
//                                     <tr>
//                                         {/* <td>222</td> */}
//                                         <td>DMART</td>
//                                         <td>157</td>
//                                         <td>1</td>
//                                         <td>1500</td>
//                                         <td>1</td>
//                                         <td>-0.92</td>
//                                         <td>sell</td>
//                                         <td>Completed</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </form> 
//             </div>
//         );
//     }
// }
// export default GetInvestorStock;