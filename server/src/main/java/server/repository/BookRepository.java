package server.repository;

import org.springframework.jdbc.core.DataClassRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import server.model.Book;

import java.util.List;

@Repository
public class BookRepository {

    private final RowMapper<Book> mapper = new DataClassRowMapper<>(Book.class);

    private JdbcTemplate jdbcTemplate;

    public BookRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void createBook(Book book) {
        if (book.getAuthor().isBlank()) {
            jdbcTemplate.update(
                    "INSERT INTO books (title, status, rating, comment) VALUES(?,?,?,?)",
                    book.getTitle(),
                    book.getStatus().toString(),
                    book.getRating(),
                    book.getComment()
            );
        } else {
            jdbcTemplate.update(
                    "INSERT INTO books (title, author, status, rating, comment) VALUES(?,?,?,?,?)",
                    book.getTitle(),
                    book.getAuthor(),
                    book.getStatus().toString(),
                    book.getRating(),
                    book.getComment()
            );
        }
    }

    public List<Book> getBooks() {
        return jdbcTemplate.query("SELECT * FROM books", mapper);
    }
}
