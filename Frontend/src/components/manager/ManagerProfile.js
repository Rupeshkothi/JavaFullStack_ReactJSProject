import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import UpdateManager from './UpdateManager'

const axios = require('axios').default;
export default function ManagerProfile({match}) {
    var [update, setUpdate] = useState(false);
    var [manager, setManager] = useState({});

    const history = useHistory();
    const managerId = match.params.managerId;
    useEffect(() => {
        axios.get('http://localhost:8081/getManager', {
            params: {
                managerId: managerId
            }
        }
        ).then((response) => {
            setManager(response.data.manager)
            
        });
    }, [managerId])

    if (update) {
        return <UpdateManager manager={manager} />;
        
    }
    
    // history.push("/updateStockPrice",{manager:manager})
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
                                        <li><Link className="nav-link" to={`/managerProfile/${managerId}`} id="manager" >PROFILE</Link></li>
                                        {/* <li><Link className="nav-link" to={`/updateManager/${managerId}`} >UPDATE PROFILE</Link></li> */}
                                        <li><Link className="nav-link" to="/updateStockPrice" id="manager">UPDATE STOCK PRICE</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            <h1>Hello {manager.managerName}</h1><hr/>
                        <div className="container">
                            <h2 id="managerprofile">Profile
                                <Link className="btn text-primary" onClick={() => { setUpdate(true) }}>
                                    <i className="fas fa-pencil-alt"></i>
                                </Link>
                            </h2>
                            <div className="col-md-7 container" id="managerProfile">
                                <form autoComplete="off" name="managerProfileForm">
                                    <div className="container">
                                        <label for="managerId">Manager Id</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" value={manager.managerId} id="managerId"
                                                pattern="^[0-9]*$" title="Manager ID should have only numbers" disabled required/>
                                        </div>
                                        <label for="managerName">Manager Name</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" value={manager.managerName} id="managerName"
                                                pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Manager name should only have only alphabets and firstname and lastname"
                                                disabled required />
                                        </div>
                                        <label for="companyId">Company Id</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" value={manager.companyId} id="companyId"
                                                pattern="^[0-9]*$" title="Company ID should have only numbers" disabled required/>
                                        </div>
                                        <label for="companyId">Company Name</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-building"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" value={manager.companyName} id="companyName"
                                                pattern="^[a-zA-Z]+$" title="Company name should only have only alphabets" disabled required />
                                        </div>
                                        <label for="email">Email</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                            </div>
                                            <input type="email" className="form-control" value={manager.email} id="email"
                                                title="(Ex:abc@gmail.com)" disabled required/>
                                        </div>
                                        <label for="mobileNo">Mobile No</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-mobile-alt"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={manager.mobileNo} id="mobileNo"
                                                pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9" disabled required />
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
// import './Manager.css';

// const axios=require('axios').default;
// class ManagerProfile extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             manager:{}
//             // companyId:'',
//             // companyName:'',
//             // managerId:'',
//             // managerName:'',
//             // email:'',
//             // mobileNo:'',
//             // password:''
//         }
//     }
//     getManager=()=>{
//         var mId = document.forms["managerSignUpForm"]["managerId"].value; 
//         axios.post(`http://localhost:8080/getManager/${mId}`).then((response)=>{
//             this.setState({manager : response.data.info})
//             // window.confirm(response.data.message)
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
//                         <div className="container">
//                             <h2 id="managerprofile">Profile
//                                 <Link className="btn text-primary" to="/updateManager">
//                                     <i className="fas fa-pencil-alt"></i>
//                                 </Link>
//                             </h2>
//                             <div className="col-md-7 container" id="managerProfile">
//                                 <form autoComplete="off" name="managerProfileForm">
//                                     <div className="container">
//                                         <label for="managerId">Manager Id</label>
//                                         <div className="form-group input-group">
//                                             <div className="input-group-prepend">
//                                                 <div className="input-group-text">
//                                                     <i className="fas fa-id-card"></i>
//                                                 </div>
//                                             </div>
//                                             <input type="text" className="form-control" placeholder="111" name="managerId" id="managerId"
//                                                 pattern="^[0-9]*$" title="Manager ID should have only numbers" disabled required/>
//                                         </div>
//                                         <label for="managerName">Manager Name</label>
//                                         <div className="form-group input-group">
//                                             <div className="input-group-prepend">
//                                                 <div className="input-group-text">
//                                                     <i className="fas fa-user"></i>
//                                                 </div>
//                                             </div>
//                                             <input type="text" className="form-control" placeholder="Apurva Sutar" name="managerName" id="managerName"
//                                                 pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Manager name should only have only alphabets and firstname and lastname" 
//                                                 disabled required />
//                                         </div>
//                                         <label for="companyId">Company Id</label>
//                                         <div className="form-group input-group">
//                                             <div className="input-group-prepend">
//                                                 <div className="input-group-text">
//                                                     <i className="fas fa-id-card"></i>
//                                                 </div>
//                                             </div>
//                                             <input type="text" className="form-control" placeholder="103" name="companyId" id="companyId"
//                                                 pattern="^[0-9]*$" title="Company ID should have only numbers" disabled required/>
//                                         </div>
//                                         <label for="companyId">Company Name</label>
//                                         <div className="form-group input-group">
//                                             <div className="input-group-prepend">
//                                                 <div className="input-group-text">
//                                                     <i className="fas fa-building"></i>
//                                                 </div>
//                                             </div>
//                                             <input type="text" className="form-control" placeholder="PVR" name="companyName" id="companyName"
//                                                 pattern="^[a-zA-Z]+$" title="Company name should only have only alphabets" disabled required />
//                                         </div>
//                                         <label for="email">Email</label>
//                                         <div className="form-group input-group">
//                                             <div className="input-group-prepend">
//                                                 <div className="input-group-text">
//                                                     <i className="fas fa-envelope"></i>
//                                                 </div>
//                                             </div>
//                                             <input type="email" className="form-control" placeholder="apurva@gmail.com" name="email" id="email"
//                                                 title="(Ex:abc@gmail.com)" disabled required/>
//                                         </div>
//                                         <label for="mobileNo">Mobile No</label>
//                                         <div className="form-group input-group">
//                                             <div className="input-group-prepend">
//                                                 <div className="input-group-text">
//                                                     <i className="fas fa-mobile-alt"></i>
//                                                 </div>
//                                             </div>
//                                             <input className="form-control" placeholder="9823973982" name="mobileNo" id="mobileNo"
//                                                 pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9" disabled required />
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </form> 
//             </div>
//         );
//     }
// }
// export default ManagerProfile;