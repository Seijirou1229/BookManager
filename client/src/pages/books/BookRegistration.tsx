import "./BookRegistration.css";
import {type SubmitEventHandler} from "react";
import {useNavigate} from "react-router";

export default function BookRegistration() {


    const navigate = useNavigate();

    const submitHandler: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const requestBody = {
            title: formData.get("title"),
            author: formData.get("author"),
            status: formData.get("status"),
            rating: formData.get("rating"),
        };
        fetch(`${import.meta.env.VITE_REST_HOST}/api/books`, {
                method: "POST",
                body: JSON.stringify(requestBody),
                headers: {
                    "Content-type": "application/json"
                },
            }
        ).then(async (response: Response) => {
            if (!response.ok) {
                console.log("Error!!!")
            } else {
                navigate("/");
            }
        });

    }

    return (
        <>
            <div className={"register-container"}>
                <p>Enter the book's information</p>
                <form onSubmit={submitHandler}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name={"title"} id={"title"}/>
                    <label htmlFor="author">Author</label>
                    <input type="text" name={"author"} id={"author"}/>
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status">
                        <option value="READ">READ</option>
                        <option value="WANT TO READ">WANT TO READ</option>
                    </select>
                    <label htmlFor="rating">Rating</label>
                    <input type="number" name={"rating"} id={"rating"}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    );
}