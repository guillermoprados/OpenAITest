import { useState } from 'react';
import {
  AiMessage,
  TextMessageBox,
  TextMessageBoxFile,
  TextMessageBoxSelect,
  UserMessage,
} from '../../components';
import { TypingBubble } from '../../components/chat-bubbles/TypingBubble';

interface OrthographyMessage {
  text: string;
  source: 'user' | 'ai';
}

export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<OrthographyMessage[]>([]);

  const handlePost = async (message: string) => {
    setIsLoading(true);
    console.log('Message:', message);
    setMessages(prev => [...prev, { text: message, source: 'user' }]);

    //todo: call use case
    setIsLoading(false);
    //todo: show gpt message
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="">
          <AiMessage text="Welcome! write your code and I can help you fixing it! " />
          {messages &&
            messages.map((message, index) =>
              message.source === 'ai' ? (
                <AiMessage key={index} text={message.text} />
              ) : (
                <UserMessage key={index} text={message.text} />
              )
            )}
          {isLoading && (
            <div className="fade-in col-start-1 col-end-12">
              <TypingBubble />
            </div>
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={message => {
          handlePost(message);
        }}
        placeHolder="Write here"
        disableCorrections
      />
      {/* <TextMessageBoxFile
        onSendMessage={message => {
          handlePost(message);
        }}
        placeHolder="Write here"
        disableCorrections
      /> */}
      {/* <TextMessageBoxSelect
        onSendMessage={message => {
          handlePost(message);
        }}
        placeHolder="Write here"
        disableCorrections
        options={[
          { id: '1', text: 'first' },
          { id: '2', text: 'second' },
          { id: '3', text: 'third' },
        ]}
      /> */}
    </div>
  );
};
