export default function InputField(props) {
  const { name, placeholder, type, value, handleChange } = props;
  return (
    <>
      <input
        name={name}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        value={value}
        required
      />
    </>
  );
}
