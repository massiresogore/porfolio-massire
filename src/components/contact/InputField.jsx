export default function InputField(props) {
  const { name, label, type, value, handleChange } = props;
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <input
          name={name}
          onChange={handleChange}
          type={type}
          value={value}
          required
        />
      </label>
    </div>
  );
}
