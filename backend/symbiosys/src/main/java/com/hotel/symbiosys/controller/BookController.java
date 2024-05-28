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

import com.hotel.symbiosys.model.Book;
import com.hotel.symbiosys.repository.BookRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/hotel/")
public class BookController {
	@Autowired
	@Qualifier("bookRepo")
	BookRepository bookRepo;
	@GetMapping("/book")
	public ArrayList<Book> Book()
	{
		return (ArrayList<Book>)bookRepo.findAll() ;
	}
	@PostMapping("/book")public Book saveBook(@RequestBody Book b)
	{
		return bookRepo.save(b);
	}
}
