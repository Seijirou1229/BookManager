package server.controller;

import jakarta.validation.Valid;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import server.model.Book;
import server.service.BookService;

import java.util.List;

@RequestMapping("/api/books")
@RestController
public class BookController {

    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public void createBook(@RequestBody @Valid Book book) {
        bookService.createBook(book);
    }

    @GetMapping
    public List<Book> getBooks(){
        return bookService.getBooks();
    }

}
