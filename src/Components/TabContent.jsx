import "./style.css";
export default function TabContent({ children, onSelect }) {
  return (
    <button className="btn btn-primary" onClick={onSelect}>
      {children}
    </button>
  );
}
