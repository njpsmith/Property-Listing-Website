import { ArrowRight } from "../arrows/ArrowRight";

export const Button = ({ copy, arrow }: { copy: string; arrow?: true }) => {
  return (
    <button className="button button--blue font-bold py-2 px-4 rounded">
      {copy}

      {arrow && (
        <div className="inline-block ml-2">
          <ArrowRight />
        </div>
      )}
    </button>
  );
};

export default Button;
