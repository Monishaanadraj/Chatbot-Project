import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css';
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import dayjs from 'dayjs';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputs(event) {
    setInputText(event.target.value);
  }

  function clearMessage() {
    setChatMessages([]);
  }

  async function sendMessage() {
    if (isLoading || inputText === '') {
      return;
    }
    setIsLoading(true)


    setInputText('');

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]

    setChatMessages([...newChatMessages,
    {
      message: <img className="loading-spinner-image" src={LoadingSpinnerImage} />,
      sender: 'robot',
      id: crypto.randomUUID()
    }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]);

    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape') {
      setInputText('');
    }
  }

  // Add more responses
  Chatbot.addResponses({
    'good morning': 'Good morning! Hope you have a wonderful day',
    'good night': 'Good night! Sweet dreams',
    'who are you': 'I am your friendly chatbot!',
    'tell me a joke': function () {
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the computer go to the doctor? Because it caught a virus!",
        "Why was the math book sad? Because it had too many problems."
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }
  });


  return (
    <div className="chat-input-container">
      <input className="chat-input"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputs}
        value={inputText}
        onKeyDown={handleKeyDown}

      />
      <button className="send-button" onClick={sendMessage}>Send</button>

      <button className="clear-button" onClick={clearMessage}>Clear</button>
    </div>
  );
}
