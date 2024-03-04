import { useState, useEffect } from 'react';
import Quote from './components/Quote.jsx';
import AppInfoFooter from './components/AppInfoFooter/AppInfoFooter.jsx';
import NetworkStatusAlert from './components/NetworkStatusAlert.jsx';
import { fetchQuote } from './utils/fetchQuote.js';
import './App.css';

export default function App() {
  const [quote, setQuote] = useState({
    id: 'VgsphQQC9g',
    author: 'John Brunner',
    content:
      "It's supposed to be automatic, but actually you have to push this button.",
  });
  const [fetchError, setFetchError] = useState('');
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleOnlineEvent() {
      console.log('online');
      setIsOnline(true);
      setFetchError('');
      setIsVisible(true);
    }

    function handleOfflineEvent() {
      console.log('offline');
      setIsOnline(false);
      setIsVisible(true);
    }

    window.addEventListener('online', handleOnlineEvent);

    window.addEventListener('offline', handleOfflineEvent);

    return () => {
      window.removeEventListener('online', handleOnlineEvent);
      window.removeEventListener('offline', handleOfflineEvent);
    };
  });

  const handleQuoteButtonClick = () => {
    fetchQuote()
      .then((response) => response.json())
      .then((data) => {
        // prevent back-to-back quote duplicates by reinvoking handleQuoteButtonClick()
        if (isOnline && data._id === quote.id) {
          handleQuoteButtonClick();
        }

        setQuote({
          id: data._id,
          author: data.author,
          content: data.content,
        });
      })
      .catch((error) => {
        setFetchError(error);
      });
  };

  const handleCloseButtonClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="app-container">
      <NetworkStatusAlert
        isOnline={isOnline}
        isVisible={isVisible}
        onCloseButtonClick={handleCloseButtonClick}
      />
      <h1>Random Tech Quote Machine</h1>
      <div id="quote-box" className="quote-box">
        <Quote quote={quote} fetchError={fetchError} />
        <button
          id="next-quote-btn"
          title="Get next quote"
          onClick={handleQuoteButtonClick}
        >
          Next Quote
        </button>
      </div>
      <AppInfoFooter />
    </div>
  );
}
