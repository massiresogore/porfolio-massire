export default function TextareaField(props) {
  const { name, label, value, handleChange } = props;
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <textarea
          name={name}
          onChange={handleChange}
          value={value}
          required
        ></textarea>
      </label>
    </div>
  );
}
