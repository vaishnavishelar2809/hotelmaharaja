package com.hotel.symbiosys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long id;
private String name,email,phone,room_no,date,guest,stay,floor;
public Book() {
	super();
	// TODO Auto-generated constructor stub
}
public Book(String name, String email, String phone, String room_no, String date,String guest,String stay,String floor) {
	super();
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.room_no = room_no;
	this.date = date;
	this.guest = guest;
	this.stay=stay;
	this.floor=floor;
}
public String getGuest() {
	return guest;
}
public void setGuest(String guest) {
	this.guest = guest;
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
public String getRoom_no() {
	return room_no;
}
public void setRoom_no(String room_no) {
	this.room_no = room_no;
}
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public String getStay() {
	return date;
}
public void setStay(String stay) {
	this.stay = stay;
}public String getFloor() {
	return date;
}
public void setFloor(String floor) {
	this.floor = floor;
}
@Override
public String toString() {
	return "Book [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", room_no=" + room_no
			+ ", date=" + date + ", guest=" + guest + ", stay=" + stay + ", floor=" + floor + "]";
}



}
