package com.hotel.symbiosys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AdminLogin {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private String email,password;
public AdminLogin() {
	super();
	// TODO Auto-generated constructor stub
}
public AdminLogin(String email, String password) {
	super();
	this.email = email;
	this.password = password;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
@Override
public String toString() {
	return "AdminLogin [id=" + id + ", email=" + email + ", password=" + password + "]";
}
}