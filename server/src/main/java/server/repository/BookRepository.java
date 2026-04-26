package server.repository;

import org.hibernate.type.descriptor.jdbc.AdjustableJdbcType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import server.model.Book;

@Repository
public class BookRepository {

    private JdbcTemplate jdbcTemplate;

    public void createBook(Book book) {
        jdbcTemplate.update(
                "insert into books (title, author, status, rating ) value(?,?,?,?)",
                book.getTitle(),
                book.getAuthor(),
                book.getStatus(),
                book.getRating()
        );
    }
}
