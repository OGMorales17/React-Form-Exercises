import React, { useState } from "react";
import './NewBoxForm.css';

const NewBoxForm = ({ createBox }) => {
    const INITIAL_STATE = {
        height: "",
        width: "",
        backgroundColor: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = evt => {
        evt.preventDefault();
        createBox({ ...formData });
        setFormData(INITIAL_STATE)
    };

    return (
        <form onSubmit={gatherInput}>
            <label htmlFor="height">Height</label>
            <div>
                <input
                    id="height"
                    type="text"
                    required
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>

            <label htmlFor="width">Width</label>
            <div>
                <input
                    id="width"
                    type="text"
                    required
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>

            <label htmlFor="backgroundColor">Background Color</label>
            <div>
                <input
                    id="backgroundColor"
                    type="text"
                    required
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
            </div>
            <button id="newBoxButton">Add new box!</button>
        </form>
    )
}

export default NewBoxForm;
