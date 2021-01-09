export default function Button({ label, disabled, onClick }) {
  return <button onClick={disabled ? null : onClick}>{label}</button>;
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};
