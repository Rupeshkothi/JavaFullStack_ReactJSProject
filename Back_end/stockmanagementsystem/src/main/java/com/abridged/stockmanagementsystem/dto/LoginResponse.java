package com.abridged.stockmanagementsystem.dto;


import java.io.Serializable;

import lombok.Data;

@Data
public class LoginResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private int statusCode;
	private String message;
	private String usernameMessage;
	private String passwordMessage;
	private String idMessage;
	private String mobileNoMessage;
	private Manager manager;
	private Investor investor;
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getUsernameMessage() {
		return usernameMessage;
	}
	public void setUsernameMessage(String usernameMessage) {
		this.usernameMessage = usernameMessage;
	}
	public String getPasswordMessage() {
		return passwordMessage;
	}
	public void setPasswordMessage(String passwordMessage) {
		this.passwordMessage = passwordMessage;
	}
	public String getIdMessage() {
		return idMessage;
	}
	public void setIdMessage(String idMessage) {
		this.idMessage = idMessage;
	}
	public String getMobileNoMessage() {
		return mobileNoMessage;
	}
	public void setMobileNoMessage(String mobileNoMessage) {
		this.mobileNoMessage = mobileNoMessage;
	}
	public Manager getManager() {
		return manager;
	}
	public void setManager(Manager manager) {
		this.manager = manager;
	}
	public Investor getInvestor() {
		return investor;
	}
	public void setInvestor(Investor investor) {
		this.investor = investor;
	}
	
	
}
