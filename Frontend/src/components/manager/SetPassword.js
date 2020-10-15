import React from 'react'

class SetPassword extends React.Component{
    render(){
        return (
            <div>
                <form autoComplete="off" name="setPasswordForm" action="/home">
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
                            pattern="^(?=.*[0-9]).{8,15}$" title="Password must contain alphabets, numbers, one symbol 
                            and length should be 6-16" required />
                    </div>
                    <div class="form-group">
                        <input type="submit" className="form-control bg-primary text-light" value="SAVE"
                            onClick={()=>{alert("Password Changed Successfully")}}/>
                    </div>
                </form>
            </div>
        );
    }
}
export default SetPassword;