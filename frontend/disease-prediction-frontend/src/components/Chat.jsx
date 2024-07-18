import React,{useState} from 'react';
import Message from './Message';

const Chat = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {

        const file = event.target.files[0];
        setSelectedImage(file); // Update state with the selected file
    };

    const handleAnalysis = async (event) => {

        event.preventDefault();
        
        if (!selectedImage) {
          alert('Please upload an image.');
          return;
        }
    
        console.log(selectedImage);

        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('prompt', "What's different between these pictures?"); // Add your prompt
    
        
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

      };

  return (
    <>
    <div className="container chat-outer-container">
        <div className="container chat-inner-container">
            <Message isMessageFromUser={false} message={"Upload an image to analyze"}/>
            <Message  isMessageFromUser={true} message={"Hello im user"}/>
        </div>
    </div>
    <div className='container generate-container'>
        <form>
            <div className="row">
            <div className="col col-lg-12">
            <input type="file" name="disease-photo" id="disease-photo" accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange}/>
            </div>
            </div><br /><br />
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
