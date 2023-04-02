export default function TextareaField(props) {
  const { name, placeholder, value, handleChange } = props;
  return (
    <>
      <textarea
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        required
      ></textarea>
    </>
  );
}
