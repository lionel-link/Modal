import './Modal.css';

export default function Modal({ display, title = '', onClose }) {
  if (display === false) {
    return null;
  }
  return (
    <div className="modalContainer">
      <div className="modal">
        {title}
        <div className="closeTagButton">
        <svg width="16" height="16" viewBox="0 0 42 42" fill="black" xmlns="http://www.w3.org/2000/svg" onClick={onClose}>
          <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="white"/>
        </svg>
        </div>
      </div>
    </div>
  );
}
