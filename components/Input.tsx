interface InputProps {
  onChange: any;
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  id,
  label,
  onChange,
  value,
}) => {
  return (
    <div className="relative">
      <input
        value={value}
        type={type}
        name={name}
        id={id}
        className="block bg-neutral-700 w-full rounded-md focus:outline-none appearance-none focus:ring-0 text-white px-6 pt-6 pb-1 peer"
        placeholder=" "
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="text-zinc-400 origin-[0] absolute left-6 top-4 scale-75 -translate-y-3 duration-150 ease-linear peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
