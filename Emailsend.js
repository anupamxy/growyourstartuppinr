import React, { useState } from 'react';
import './Emailsend.css';
import emailjs from 'emailjs-com';

const Emailsend = (props) => {
  const [transcription, setTranscription] = useState('');

  const handleTranscription = (event) => {
    setTranscription(event.target.value);
  };

  const handleSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscription(transcription + transcript + ' ');
        }
      }
    };
    recognition.start();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_preoeo8', 'template_eokkqpc', e.target, 'ZSp8z_wBwZkly-eba')
      .then(res => {
        console.log(res);
        props.showAlert('MESSAGE SEND SUCCESFULLY', 'success');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
    <div>
      <h1 className='fix'>WE WELCOME YOUR IDEAS</h1>
      <div className='container'>
        <form className='form' onSubmit={sendEmail}>
          <label htmlFor='name'>Enter your Name:</label>
          <input type='text' id='name' name='name' required />

          <label htmlFor='email'>Enter your Email:</label>
          <input type='email' id='useremail' name='useremail' required />

          <label htmlFor='message'>Enter your Ideas/Sugestion</label>
          <textarea value={transcription} onChange={handleTranscription} id='message' name='message' required></textarea>
          <button onClick={handleSpeechRecognition} className='button-85'>YOU CAN SPEAK AND GET YOUR MESSAGE </button>

          <button type='submit' className='button-85'>Send</button>
        </form>
      </div>
    </div>
    {/* <footer>


  <div className='timeshow'><span id="current-time"></span></div>

</footer> */}

    </>
  );
};

export default Emailsend;
