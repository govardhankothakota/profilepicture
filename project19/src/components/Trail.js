import React, { useState } from 'react';

function FileUploadComponent() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
  
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
  
    const handleUploadComplete = () => {
        setSelectedFile(null);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <br />
            <label>
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                />
                Option 1
            </label>
            <label>
                <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                />
                Option 2
            </label>
            <br />
            <button onClick={handleUploadComplete}>Clear File Selection</button>
        </div>
    );
}

export default function Trail() {
    return <FileUploadComponent />;
}
