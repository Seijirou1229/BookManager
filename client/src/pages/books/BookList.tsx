import "./BookList.css";
import {useEffect, useState} from "react";
import axios from 'axios';
import type Book from "../../model/Book.ts";


export default function BookList() {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REST_HOST}/api/books`)
            .then(res => setBooks(res.data))
            .catch(error => {
                console.log(error)
            })
    }, []);


    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Rating</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, i) => {
                    return (
                        <tr key={i}>
                            <th>{book.input_date_time.toLocaleDateString()}</th>
                            <th>{book.title}</th>
                            <th>{book.author}</th>
                            <th>{book.status.toString()}</th>
                            <th>{book.rating.toString()}</th>
                            <th>{book.comment}</th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
        ;
}