import "./BookRegistration.css";
import {type ChangeEvent, type SubmitEventHandler, useState} from "react";
import {useNavigate} from "react-router";

export default function BookRegistration() {
    const navigate = useNavigate();

    const [isREAD, setIsREAD] = useState<boolean>(false);
    const [status, setStatus] = useState<string>("");
    const [rating, setRating] = useState<number>(0);

    // If status is "WANT_TO_READ", make rating 0. If the status is "READ", set setIsREAD true.
    const isREADHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const status = (e.target.value);
        setStatus(status);
        if (status === "READ") {
            setIsREAD(true);
        } else {
            setIsREAD(false);
            setRating(0);
        }
    }

    const ratingHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const rating: number = (e.target.valueAsNumber);
        setRating(rating);
    }

    const submitHandler: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const requestBody = {
            title: formData.get("title"),
            author: formData.get("author"),
            status: formData.get("status"),
            rating: rating,
            comment: formData.get("comment")
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
                console.log(requestBody);
                console.log("Error!!!")
            } else {
                navigate("/");
            }
        });
    }

    return (
        <>
            <div className={"register-container"}>
                <form onSubmit={submitHandler} className={"input-container"}>
                    <p>Enter the book's information</p>
                    <div>
                        <div>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div>
                            <input type="text" name={"title"} id={"title"} required={true}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="author">Author</label>
                        </div>
                        <div>
                            <input type="text" name={"author"} id={"author"}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="status">Status</label>
                        </div>
                        <div>
                            <select name="status" id="status" value={status} onChange={isREADHandler} required={true}>
                                <option value="WANT_TO_READ">WANT TO READ</option>
                                <option value="READ">READ</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="rating">Rating</label>
                        </div>
                        <div>
                            <input type="number" name={"rating"} id={"rating"} min={1} max={5} disabled={!isREAD}
                                   value={rating} onChange={ratingHandler}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="comment">Comment</label>
                        </div>
                        <div>
                            <input type="text" name={"comment"} id={"comment"}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="submit" value="Submit"/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}