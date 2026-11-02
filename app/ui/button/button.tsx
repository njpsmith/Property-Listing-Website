export const Button = ({ copy }: { copy: string }) => {
  return (
    <button className="button button--blue font-bold py-2 px-4 rounded">
      {copy}
    </button>
  );
};

export default Button;
