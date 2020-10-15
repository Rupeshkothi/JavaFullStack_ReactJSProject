package com.abridged.stockmanagementsystem.service;

import com.abridged.stockmanagementsystem.dto.LoginResponse;

public interface AdminService {

	/**
	 * This method is used to call adminLogin method
	 * 
	 * @param username {@code String}, password {@code String} ,response
	 *                 {@code Object}
	 * @return {@code true} if login successfully , otherwise {@code false}
	 */

	boolean adminLogin(String username, String password, LoginResponse response);
}
