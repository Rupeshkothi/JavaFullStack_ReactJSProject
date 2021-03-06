import React from 'react'

const axios=require('axios').default;
class ManagerForgotPassword extends React.Component {
    constructor(props){
        super(props);
        this.state={
            res:[],
            managerId:'',
            mobileNo:'',
            password:''
        }
    }
    forgotPassword=()=>{
        var userId = document.forms["managerForgotPasswordForm"]["managerId"].value;
        var pwd = document.forms["managerForgotPasswordForm"]["password1"].value;
        var mobile = document.forms["managerForgotPasswordForm"]["mobileNo"].value;
        axios.put("http://localhost:8081/managerForgotPassword",{
            managerId: userId,
            password: pwd,
            mobileNo: mobile
        }).then((response)=>{
            this.setState({res : response.data.message})
            window.confirm(response.data.message)
        }); 
    }
    render(){
        return (
            <div>
                <form autoComplete="off" name="managerForgotPasswordForm" action="/home" onSubmit={this.forgotPassword}>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-id-card"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" name="username" placeholder="UserID" 
                          id="managerId"  pattern="^[0-9]*$" title="UserID should have only numbers" required />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" name="moileNo" placeholder="Mobile No"
                           id="mobileNo" pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9" required />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>
                        <input type="password" className="form-control" name="password" placeholder="Password" 
                            pattern="^(?=.*[0-9]).{8,15}$" title="Password must contain alphabets, numbers, one symbol 
                            and length should be 6-16" required />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>
                        <input type="password" className="form-control" name="confirmPassword" placeholder="Re-Enter Password"
                            id="password1" pattern="^(?=.*[0-9]).{8,15}$" title="Password must contain alphabets, numbers, one symbol 
                            and length should be 6-16" required />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control bg-primary text-light" value="SAVE"/>
                            {/* onClick={()=>{alert("Password Changed Successfully")}}/> */}
                    </div>
                    {/* <div class="form-group">
                        <Link className="btn form-control bg-primary text-light" data-toggle="modal" data-target="#setPasswordModal"
                            onClick={()=>{document.forms["managerForgotPasswordForm"].style.display="none";
                            document.forms["setPasswordForm"].style.display="block";
                            alert("Please Proceed To Set Your Password...")
                            }} style={{color:"blue"}}>CHECK
                        </Link>
                    </div> */}
                </form>
                {/* <div className="modal fade" id="setPasswordModal" tabindex="-1" aria-labelledby="setPasswordModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="setPasswordModalLabel">Please Change Your Password</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <SetPassword/>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}
export default ManagerForgotPassword;
