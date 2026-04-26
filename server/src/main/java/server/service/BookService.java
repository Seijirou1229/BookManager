package server.service;

import org.springframework.stereotype.Service;
import server.model.Book;
import server.repository.BookRepository;

@Service
public class BookService {

    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void createBook(Book book) {
        bookRepository.createBook(book);
    }

}
