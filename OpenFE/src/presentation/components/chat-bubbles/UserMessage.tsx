interface Props {
  text: string;
}

export const UserMessage = ({ text }: Props) => {
  return (
    <div className="col-start-1 col-end-8 rounded-lg p-3">
      <div className="flex flex-row-reverse items-center justify-start">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
          You
        </div>
        <div className="relative mr-3 rounded-xl bg-indigo-700 bg-opacity-50 px-4 pb-2 pt-3 text-sm">
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};
