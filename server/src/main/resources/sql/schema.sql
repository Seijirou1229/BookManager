CREATE TABLE books (
                       id BIGSERIAL NOT NULL PRIMARY KEY ,
                       title VARCHAR(225) NOT NULL,
                       author VARCHAR(225) NOT NULL DEFAULT 'Unknown',
                       status VARCHAR(20) NOT NULL,
                       rating INTEGER NOT NULL DEFAULT (0),
                       input_date_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
                       updated_date_time TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
                       comment TEXT, --nullable
                       CONSTRAINT check_status -- CHECK constraint
                           CHECK (status IN ('WANT_TO_READ', 'READ'))
);

-- function updates updated_date_time automatically
CREATE OR REPLACE FUNCTION set_updated_date_time()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_date_time = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- create trigger implemented when the row is updated
CREATE TRIGGER trg_books_updated_date_time
    BEFORE UPDATE ON books
    FOR EACH ROW
    EXECUTE FUNCTION set_updated_date_time();