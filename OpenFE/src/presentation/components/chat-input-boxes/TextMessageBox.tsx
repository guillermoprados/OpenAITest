import type { FormEvent } from 'react';

interface Props {
  onSendMessage: (message: string) => void;
  placeHolder?: string;
  disableCorrections?: boolean;
}
export const TextMessageBox = ({
  onSendMessage,
  placeHolder,
  disableCorrections = false,
}: Props) => {
  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message') as string;

    if (message.trim() === '') return;

    onSendMessage(message);

    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4"
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            className="flex h-10 w-full rounded-xl border pl-4 text-gray-800 focus:border-indigo-300 focus:outline-none"
            placeholder={placeHolder}
            autoComplete={disableCorrections ? 'on' : 'off'}
            autoCorrect={disableCorrections ? 'on' : 'off'}
            spellCheck={disableCorrections ? 'true' : 'false'}
          ></input>
        </div>
      </div>

      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2">Send</span>
          <i className="fa-regular fa-paper-plane" />
        </button>
      </div>
    </form>
  );
};
