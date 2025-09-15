import { useRef, useState, type FormEvent } from 'react';

interface Props {
  onSendMessage: (message: string, file: File) => void;
  placeHolder?: string;
  disableCorrections?: boolean;
  accept?: string;
}
export const TextMessageBoxFile = ({
  onSendMessage,
  placeHolder,
  disableCorrections = false,
  accept,
}: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>();

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message') as string;

    if (message.trim() === '') return;
    if (!selectedFile) return;

    onSendMessage(message, selectedFile);

    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4"
    >
      <div className="mr-3">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-400"
          onClick={() => inputFileRef.current?.click()}
        >
          <i className="fa-solid fa-paperclip text-xl"></i>
        </button>
      </div>
      <input
        type="file"
        ref={inputFileRef}
        accept={accept}
        multiple={false}
        onChange={e => setSelectedFile(e.target.files?.item(0))}
        hidden
      />
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
        <button className="btn-primary" disabled={selectedFile === null}>
          <span className="mr-2">
            {selectedFile
              ? `${selectedFile.name.substring(0, 10)}${selectedFile.name.length > 10 ? '...' : ''}`
              : 'Send'}
          </span>
          <i className="fa-regular fa-paper-plane" />
        </button>
      </div>
    </form>
  );
};
