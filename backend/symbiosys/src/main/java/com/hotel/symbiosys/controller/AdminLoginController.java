package com.hotel.symbiosys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.symbiosys.model.AdminLogin;
import com.hotel.symbiosys.repository.AdminLoginRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/hotel/")
public class AdminLoginController {
	@Autowired
	@Qualifier("admRepo")
	AdminLoginRepository admRepo;
	@GetMapping("/admin/{email}/{password}")
	public AdminLogin login(@PathVariable("email") String email,@PathVariable ("password") String password)
	{
		return admRepo.findByEmailAndPassword(email, password);
	}
}
