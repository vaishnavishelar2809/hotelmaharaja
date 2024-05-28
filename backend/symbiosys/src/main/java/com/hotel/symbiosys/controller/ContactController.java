package com.hotel.symbiosys.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.symbiosys.model.Contact;
import com.hotel.symbiosys.repository.ContactRepository;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/hotel/")
public class ContactController {
	
	@Autowired
	@Qualifier("conRepo")
	ContactRepository conRepo;
	@GetMapping("/contact")
	public ArrayList<Contact> contact()
	{
		return (ArrayList<Contact>)conRepo.findAll() ;
	}
	@PostMapping("/contact")public Contact savecontact(@RequestBody Contact c)
	{
		return conRepo.save(c);
	}
}