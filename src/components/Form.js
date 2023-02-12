import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        question1: "",
        question2: ""
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Add logic here to submit form data to database
        console.log(formData);
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
                    id="question1"
                    name="question1"
                    className="w-full border border-gray-400 p-2"
                    value={formData.question1}
                    onChange={handleChange}
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
                    value={formData.question2}
                    onChange={handleChange}
                >
                    <option value="">Select an option</option>
                    <option value="option1">Romance and drama</option>
                    <option value="option2">Action and adventure</option>
                    <option value="option3">Science fiction and fantasy</option>
                    <option value="option3">Mystery and suspense</option>
                </select>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Submit
            </button>
        </form>
    );
};

export default Form;
