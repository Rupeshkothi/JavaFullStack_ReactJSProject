import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const axios = require('axios').default;
export default function UpdateInvestor(props) {
    var [updateInvestor, setUpdateInvestor] = useState(props.investor);
    var [message, setMessage] = useState("");

    const handleInput = (e) => {

        var { name, value } = e.target;
        setUpdateInvestor({
            ...updateInvestor,
            [name]: value
        })
    }
    const history = useHistory();

    useEffect(() => {
        // axios.get('http://localhost:8081/getManager', {
        //     params: {
        //         managerId: managerId
        //     }
        // }
        // ).then((response) => {
        //     setManager(response.data.manager)
        // });

        axios.put('http://localhost:8081/updateInvestor', updateInvestor


        ).then((response) => {
            setMessage(response.data.message);
        });
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (message === "Investor Details Updated Successfully") {

            alert("Updated Successfully");
            history.push("/investorHome",{investor : props.investor})

        } else {
            alert("Not Updated");
        }
    }

    return (
        <div>
                <form name="investorHomeForm">
                    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
                        <h2 className="navbar-brand col-sm-3 col-md-2 mr-0" >Investor</h2>
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
                                        <li><Link className="nav-link" to={`/investorProfile/${props.investor.investorId}`} id="investor" >PROFILE</Link></li>
                                        {/* <li><Link className="nav-link" to="/updateInvestor" id="investor" >UPDATE PROFILE</Link></li> */}
                                        <li><Link className="nav-link" to="/getAllStocks" id="investor" >VIEW ALL STOCKS</Link></li>  
                                        <li><Link className="nav-link" to="/viewCompany" id="investor" >VIEW ALL COMPANIES</Link></li>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, {props.investor.investorName}</h1><hr/>
                        <h3>Please Update Your Profile...</h3><br/>
                        <div className="container">
                            <div className="col-md-7 container" id="investorProfile">
                                <form autoComplete="off" name="updateInvestorForm" onSubmit={handleSubmit}>
                                    <div className="container">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.investorId} name="investorId" id="investorId"
                                                pattern="^[0-9]*$" title="Investor ID should have only numbers" disabled required/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" value={updateInvestor.investorName} name="investorName" id="investorName"
                                                pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Fullname should only alphabets and firstname and lastname"
                                                onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                            </div>
                                            <input type="email" className="form-control" value={updateInvestor.email} name="email" id="email"
                                                title="(Ex:abc@gmail.com)" onChange={handleInput}/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-mobile-alt"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.mobileNo} name="mobileNo" id="mobileNo"
                                                pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9"
                                                onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-university"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.bankName} name="bankName" id="bankName"
                                                 title="Bank name should only have only alphabets" onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-university"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.branchName} name="branchName" id="branchName"
                                                 title="Bank branch name should only have only alphabets" onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group ">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-address-card"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.accountNo} name="accountNo" id="accountNo"
                                                pattern="[0-9]{12}" title="Account number should have only numbers" onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-rupee-sign"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.balance} name="balance" id="balance" 
                                                title="Minimum balance should be 10,000 to create your account" onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <input type="submit" className="form-control btn bg-primary text-light" value="UPDATE DETAILS"/>
                                                {/* onClick={()=>{alert("Details Updated Successfully")}}/> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </form> 
            </div>
    )
}




















// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Investor.css';

// const axios=require('axios').default;
// class UpdateInvestor extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             res:[],
//             investorId:'',
//             investorName:'',
//             email:'',
//             mobileNo:'',
//             bankName:'',
//             branchName:'',
//             accountNo:'',
//             balance:''
//         }
//     }
//     updateInvestor=()=>{
//         var iId=document.forms["updateInvestorForm"]["investorId"].value;
//         var iName = document.forms["updateInvestorForm"]["investorName"].value; 
//         var email = document.forms["updateInvestorForm"]["email"].value;
//         var mobileNo = document.forms["updateInvestorForm"]["mobileNo"].value;
//         var bankName = document.forms["updateInvestorForm"]["bankName"].value; 
//         var branchName = document.forms["updateInvestorForm"]["branchName"].value;
//         var accountNo = document.forms["updateInvestorForm"]["accountNo"].value; 
//         var balance = document.forms["updateInvestorForm"]["balance"].value;

//         axios.put("http://localhost:8080/updateInvestor",{
//             investorId:iId, investorName:iName,
//             email:email, mobileNo:mobileNo,
//             bankName: bankName, branchName:branchName,
//             accountNo:accountNo, balance:balance
//         }).then((response)=>{
//             this.setState({res : response.data.message})
//             window.confirm(response.data.message)
//         }); 
//     }
//     render(){
//         return(
            // <div>
            //     <form name="investorHomeForm">
            //         <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
            //             <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/investorHome">Dashboard</Link>
            //             <ul className="navbar-nav px-3">
            //                 <li className="nav-item text-nowrap">
            //                     <Link className="nav-link text-light" to="/home">Logout</Link>
            //                 </li>
            //             </ul>
            //         </nav>
            //         <div className="container-fluid">
            //             <div className="row">
            //                 <div className="col-md-2 bg-light d-none d-md-block sidebar" id="sidebar">
            //                     <div className="left-sidebar">
            //                         <ul className="nav flex-column sidebar-nav">
            //                             <li><Link className="nav-link" to="/investorProfile" id="investor" >PROFILE</Link></li>
            //                             <li><Link className="nav-link" to="/updateInvestor" id="investor" >UPDATE PROFILE</Link></li>
            //                             <li><Link className="nav-link" to="/getAllStocks" id="investor" >VIEW ALL STOCKS</Link></li>  
            //                             <li><Link className="nav-link" to="/investorHome" id="investor" >VIEW ALL COMPANIES</Link></li>  
            //                         </ul>
            //                     </div>
            //                 </div>
            //             </div>
            //             <h1>Hello, Akshay Sutar</h1><hr/>
            //             <h3>Please Update Your Profile...</h3><br/>
            //             <div className="container">
            //                 <div className="col-md-7 container" id="investorProfile">
            //                     <form autoComplete="off" name="updateInvestorForm" action="/investorHome" onSubmit={this.updateInvestor}>
            //                         <div className="container">
            //                             <div className="form-group input-group">
            //                                 <div className="input-group-prepend">
            //                                     <div className="input-group-text">
            //                                         <i className="fas fa-id-card"></i>
            //                                     </div>
            //                                 </div>
            //                                 <input className="form-control" value="1" name="investorId" id="investorId"
            //                                     pattern="^[0-9]*$" title="Investor ID should have only numbers" required/>
            //                             </div>
            //                             <div className="form-group input-group">
            //                                 <div className="input-group-prepend">
            //                                     <div className="input-group-text">
            //                                         <i className="fas fa-user"></i>
            //                                     </div>
            //                                 </div>
            //                                 <input type="text" className="form-control" value="Akshay Sutar" name="investorName" id="investorName"
            //                                     pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Fullname should only alphabets and firstname and lastname" />
            //                             </div>
            //                             <div className="form-group input-group">
            //                                 <div className="input-group-prepend">
            //                                     <div className="input-group-text">
            //                                         <i className="fas fa-envelope"></i>
            //                                     </div>
            //                                 </div>
            //                                 <input type="email" className="form-control" value="akshay@gmail.com" name="email" id="email"
            //                                     title="(Ex:abc@gmail.com)"/>
            //                             </div>
            //                             <div className="form-group input-group">
            //                                 <div className="input-group-prepend">
            //                                     <div className="input-group-text">
            //                                         <i className="fas fa-mobile-alt"></i>
            //                                     </div>
            //                                 </div>
            //                                 <input className="form-control" value="9823973982" name="mobileNo" id="mobileNo"
            //                                     pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9" />
            //                             </div>
            //                             <div className="form-group input-group">
            //                                 <div className="input-group-prepend">
            //                                     <div className="input-group-text">
            //                                         <i className="fas fa-university"></i>
            //                                     </div>
            //                                 </div>
            //                                 <input className="form-control" value="State Bank Of India" name="bankName" id="bankName"
            //                                      title="Bank name should only have only alphabets"  />
            //                             </div>
            //                             <div className="form-group input-group">
            //                                 <div className="input-group-prepend">
            //                                     <div className="input-group-text">
            //                                         <i className="fas fa-university"></i>
            //                                     </div>
            //                                 </div>
            //                                 <input className="form-control" value="Ichalkaranji SBI" name="branchName" id="branchName"
            //                                      title="Bank branch name should only have only alphabets"  />
            //                             </div>
            //                             <div className="form-group input-group ">
            //                                 <div className="input-group-prepend">
            //                                     <div className="input-group-text">
            //                                         <i className="fas fa-address-card"></i>
            //                                     </div>
            //                                 </div>
            //                                 <input className="form-control" value="201500575012" name="accountNo" id="accountNo"
            //                                     pattern="[0-9]{12}" title="Account number should have only numbers" />
            //                             </div>
            //                             <div className="form-group input-group">
            //                                 <div className="input-group-prepend">
            //                                     <div className="input-group-text">
            //                                         <i className="fas fa-rupee-sign"></i>
            //                                     </div>
            //                                 </div>
            //                                 <input className="form-control" value="60000" name="balance" id="balance" 
            //                                     title="Minimum balance should be 10,000 to create your account" />
            //                             </div>
            //                             <div className="form-group input-group">
            //                                 <input type="submit" className="form-control btn bg-primary text-light" value="UPDATE DETAILS"/>
            //                                     {/* onClick={()=>{alert("Details Updated Successfully")}}/> */}
            //                             </div>
            //                         </div>
            //                     </form>
            //                 </div>
            //             </div>
            //         </div>
            //     </form> 
            // </div>
//         );
//     }
// }
// export default UpdateInvestor;