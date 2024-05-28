package com.hotel.symbiosys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contact {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private String name,massage,email,phone,subject;
public Contact() {
	super();
	// TODO Auto-generated constructor stub
}
public Contact(String name, String email, String phone, String subject, String message) {
	super();
	this.name = name;
	this.massage = massage;
	this.email = email;
	this.phone = phone;
	this.subject = subject;
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
public String getMassage() {
	return massage;
}
public void setMassage(String massage) {
	this.massage = massage;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public String getSubject() {
	return subject;
}
public void setSubject(String subject) {
	this.subject = subject;
}

@Override
public String toString() {
	return "Contact [id=" + id + ", name=" + name + ", massage=" + massage + ", email=" + email + ", phone=" + phone
			+ ", subject=" + subject +  "]";
}

}
