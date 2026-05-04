package server.service;

import org.springframework.stereotype.Service;
import server.model.Book;
import server.repository.BookRepository;

import java.util.List;

@Service
public class BookService {

    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void createBook(Book book) {
        bookRepository.createBook(book);
    }

    public List<Book> getBooks() {
        return bookRepository.getBooks();
    }
}
