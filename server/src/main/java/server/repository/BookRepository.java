package server.repository;

import org.hibernate.type.descriptor.jdbc.AdjustableJdbcType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import server.model.Book;

@Repository
public class BookRepository {

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
}
