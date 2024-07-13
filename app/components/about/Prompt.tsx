interface PromptProps {
    directory?: string;
    branch?: boolean;
    content: string;
  }
  
  const Prompt = ({ directory, branch = false, content }: PromptProps) => {
    return (
      <p>
        <span className='text-violet-400 font-semibold'>
          ~/paytonpierce{directory}
          <span className="text-success">{branch && " (main)"}</span> $
        </span> {content}</p>
    );
  };
  
  export default Prompt;
  