import React,{useState} from 'react';
import Message from './Message';

const Chat = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [textInput, setTextInput] = useState('');
    const [messages, setMessages] = useState([
        { message: "Upload an image to analyze", isMessageFromUser: false }
    ]); // Initial bot message

    const handleImageChange = (event) => {

        const file = event.target.files[0];
        setSelectedImage(file); // Update state with the selected file
        setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the selected image
    };

    const handleTextInputChange = (event) => {
        setTextInput(event.target.value); // Update state with the text input value
    };

    const handleAnalysis = async (event) => {

        event.preventDefault();
        
        if (!selectedImage) {
          alert('Please upload an image.');
          return;
        }

        if(textInput !== ''){

            setMessages(prevMessages => [
                ...prevMessages,
                { message: textInput, isMessageFromUser: true }
            ]);
        }
    
        console.log(selectedImage);

        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('prompt', `This is the prompt : ", ${textInput}, ". Write in detail about the symptoms or disease or medical/health problem that you see in the picture, and recommend the specific doctor to consult. Do not diagnose, just give some information about it. If you do not detect any disease or problem, write that 'Kindly provide a medical image' and write about given image in a sentence.`);
    
        
        const response = await fetch("http://127.0.0.1:4000/chat", {
            method: 'POST',
            body: formData,
          });
      
          if (!response.ok) {
            console.error('Error sending image:', response.statusText);
            return;
          }
      
          const data = await response.json();
          console.log('Analysis result:', data);

        setMessages(prevMessages => [
            ...prevMessages,
            { message: data.analysisResult, isMessageFromUser: false }
        ]);

      };

  return (
    <>
    <div className="container chat-outer-container">
        <div className="container chat-inner-container">
        {messages.map((msg, index) => (
            <Message
                key={index}
                isMessageFromUser={msg.isMessageFromUser}
                message={msg.message}
            />
        ))}
        </div>
    </div>
    <div className='container generate-container'>
        <form>
                <div className="d-flex flex-col align-items-center mb-96">

                        <input type="file" name="disease-photo" id="disease-photo" accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange}/>

                        <input 
                            type="text" 
                            name="text-input" 
                            value={textInput} 
                            onChange={handleTextInputChange} 
                            placeholder="Enter your text here" 
                            className='text-input'
                        />
                    
                </div>


            {imagePreview && (
                <div className="row">
                    <div className="col col-lg-12">
                        <img 
                            src={imagePreview} 
                            alt="Selected Preview" 
                            style={{ width: '300px', height: 'auto', marginTop: '10px' }} 
                        />
                    </div>
                </div>
            )}
            <br /><br /><br />


            <div className="row">
                <div className="col col-lg-12">
            <button type="submit" className='analyze-button' onClick={handleAnalysis}>Generate Analysis</button>
            </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Chat
