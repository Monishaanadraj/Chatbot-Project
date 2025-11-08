# 💬 Chatbot Project

A simple and interactive **Chatbot Web Application** built using **React.js**.  
It allows users to chat with a friendly AI bot that responds instantly with predefined answers, jokes, and conversational messages. The app also stores chat history in local storage, so messages remain even after a page refresh.

---

## 🚀 Features

- 💡 Real-time chat interface with smooth scrolling  
- 🤖 AI bot responses using the `supersimpledev` Chatbot API  
- ⏰ Message timestamps displayed with `dayjs`  
- 💬 Predefined responses (like greetings and jokes)  
- 🔁 Persistent chat history (stored in `localStorage`)  
- 🧹 “Clear” button to reset the chat  
- ⚡ Keyboard support (Press **Enter** to send, **Escape** to clear input)  
- 🧠 React hooks (`useState`, `useEffect`, `useRef`) for dynamic updates  

---

## 🖥️ Tech Stack

- **Frontend:** React.js  
- **Styling:** CSS  
- **Date Formatting:** Day.js  
- **Assets:** Custom profile images and loading spinner  
- **Package:** [supersimpledev Chatbot API](https://www.npmjs.com/package/supersimpledev)  

---

## 🧩 How It Works

1. Type a message and hit **Enter** or click **Send**.  
2. The chatbot replies automatically with either a predefined response or a random joke.  
3. Your messages and responses are saved locally.  
4. Click **Clear** to delete chat history.

---

## 🧠 Example Chat

**You:** Who are you?  
**Bot:** I am your friendly chatbot!  

**You:** Tell me a joke  
**Bot:** Why don't scientists trust atoms? Because they make up everything! 😄  

---

## 🪄 Customization

You can easily add your own responses inside `ChatInput.jsx`:

```js
Chatbot.addResponses({
  'hello': 'Hi there! How can I help you today?',
  'how are you': 'I’m just code, but I’m doing great! 🤖'
});
