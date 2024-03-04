import PropTypes from 'prop-types';

Quote.propTypes = {
  quote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  fetchError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(TypeError)
  ]).isRequired,
};

export default function Quote({ quote, fetchError }) {
  return (
    <div className="quote-component-div">
      {fetchError ? (
        <p className="error-text">Error: Could not get quote</p>
      ) : (
        <blockquote>
          <p id="text" className="quote-text">
            <i className="fa-solid fa-quote-left"></i>
            {quote.content}
            <i className="fa-solid fa-quote-right"></i>
          </p>
          <p id="author" className="author">
            -{quote.author}
          </p>
        </blockquote>
      )}
    </div>
  );
}
