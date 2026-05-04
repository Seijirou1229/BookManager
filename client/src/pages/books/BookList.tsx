import "./BookList.css";
import {useEffect, useState} from "react";
import axios from 'axios';
import type Book from "../../model/Book.ts";
import {format} from 'date-fns';


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
                    const inputDateTime = book.input_date_time;
                    const formattedInputDateTime = format(inputDateTime, 'yyyy/MM/dd HH:mm');
                    return (
                        <tr key={i}>
                            <th>{formattedInputDateTime}</th>
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