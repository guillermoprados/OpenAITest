import { useState, type FormEvent } from 'react';

interface Props {
  onSendMessage: (message: string, selectedOption: string) => void;
  placeHolder?: string;
  disableCorrections?: boolean;
  options: Option[];
}

interface Option {
  id: string;
  text: string;
}

const DEFAULT_OPTION = 'Select one option';

export const TextMessageBoxSelect = ({
  onSendMessage,
  placeHolder,
  disableCorrections = false,
  options,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message') as string;

    if (message.trim() === '') return;
    if (!isValidOption()) return;

    onSendMessage(message, selectedOption);

    event.currentTarget.reset();
  };

  const isValidOption = () => {
    return selectedOption.length > 0 && selectedOption !== DEFAULT_OPTION;
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4"
    >
      <div className="flex-grow">
        <div className="w-full">
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

      <select
        name="select"
        className="ml-5 h-10 w-2/5 rounded-xl border pl-4 text-gray-800 focus:border-indigo-300 focus:outline-none"
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
      >
        <option key={'invalid'}>{DEFAULT_OPTION}</option>
        {options.map(({ id, text }) => (
          <option key={id} value={id}>
            {text}
          </option>
        ))}
      </select>

      <div className="ml-4">
        <button className="btn-primary" disabled={!isValidOption()}>
          <span className="mr-2">Send</span>
          <i className="fa-regular fa-paper-plane" />
        </button>
      </div>
    </form>
  );
};
