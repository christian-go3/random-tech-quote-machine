import './AppInfoFooter.css';

export default function AppInfoFooter() {
  return (
    <footer>
      <div className="info-container">
        <p className="info-text">
          Developed by{' '}
          <a
            href="https://github.com/christian-go3"
            target="_blank"
            rel="noreferrer"
            className="info-link"
          >
            christian-go3
          </a>
        </p>
        <p className="info-text">
          View project on{' '}
          <a
            href="https://github.com/christian-go3/random-tech-quote-machine"
            target="_blank"
            rel="noreferrer"
            className="info-link"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
