package com.hotel.symbiosys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Register {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private String name,city,country,email,password;
public Register() {
	super();
	// TODO Auto-generated constructor stub
}
public Register(String name, String city, String country, String email, String password) {
	super();
	this.name = name;
	this.city = city;
	this.country = country;
	this.email = email;
	this.password = password;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getCountry() {
	return country;
}
public void setCountry(String country) {
	this.country = country;
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
	return "Register [id=" + id + ", name=" + name + ", city=" + city + ", country=" + country + ", email=" + email
			+ ", password=" + password + "]";
}

}
