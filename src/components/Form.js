import React, { useState } from "react";
import { useBooksContext } from '../hooks/useBooksContext'
const Form = () => {
    // const [formData, setFormData] = useState({
    //     question1: "",
    //     question2: ""
    // });

    // const handleChange = e => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const { dispatch } = useBooksContext()

    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add logic here to submit form data to database
        const book = { title }

        const response = await fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'content-type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setError(null)
            dispatch({ type: 'CREATE_BOOKS', payload: json })
            console.log('new book added', json)
        }

    };

    return (
        <form onSubmit={handleSubmit} className="bg-accent p-6 rounded-lg shadow-lg">
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="question1"
                >
                    What type of story do you prefer?
                </label>
                {/* options could include adventure, romance, mystery, etc. */}
                <input
                    type="text"
                    // id="question1"
                    // name="question1"
                    className="w-full border border-gray-400 p-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="question2"
                >
                    Which of the following describes your reading preferences?
                </label>
                <select
                    id="question2"
                    name="question2"
                    className="w-full border border-gray-400 p-2"
                // value={formData.question2}
                // onChange={handleChange}
                >
                    <option value="">Select an option</option>
                    <option value="option1">Romance and drama</option>
                    <option value="option2">Action and adventure</option>
                    <option value="option3">Science fiction and fantasy</option>
                    <option value="option3">Mystery and suspense</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Submit
            </button>
            {error && <p className="text-red-900 font-bold">{error}</p>}
        </form>
    );
};

export default Form;
