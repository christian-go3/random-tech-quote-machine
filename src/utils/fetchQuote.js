export async function fetchQuote() {
  try {
    const response = await fetch(
      'https://api.quotable.io/random?tags=technology'
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error(error);
  }
}
