import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useMessages } from '../MessagesContext';

export function ChatBox({ itemId, ownerName }: { itemId: string; ownerName: string }) {
  const { user } = useAuth();
  const { messagesForItem, sendMessage } = useMessages();
  const [text, setText] = useState('');

  const thread = messagesForItem(itemId);

  if (!user) {
    return (
      <div className="chat-box">
        <h3>Message {ownerName}</h3>
        <p className="owner-sub">
          <Link to={`/auth?redirect=/items/${itemId}`}>Log in or sign up</Link> to send a message.
        </p>
      </div>
    );
  }

  function handleSend(e: FormEvent) {
    e.preventDefault();
    sendMessage(itemId, user!.name, text);
    setText('');
  }

  return (
    <div className="chat-box">
      <h3>Message {ownerName}</h3>

      {thread.length > 0 && (
        <ul className="chat-thread">
          {thread.map((m) => (
            <li key={m.id} className="chat-message">
              <span className="chat-sender mono">{m.senderName}</span>
              <p>{m.text}</p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSend} className="chat-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`Ask ${ownerName} about this item…`}
          aria-label="Message"
        />
        <button type="submit" className="chat-send" disabled={!text.trim()}>
          Send
        </button>
      </form>
      <p className="chat-hint">
        This is a mock thread for the prototype — there's no real owner on the other end yet, so
        don't expect a reply.
      </p>
    </div>
  );
}
