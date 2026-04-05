/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url
 * @returns {Promise}
 */
function fetchModel(url) {
  const ENDPOINT = "https://k8zzvn-3001.csb.app";
  return fetch(ENDPOINT + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Lỗi khi lấy dữ liệu từ:", url, error);
      throw error;
    });
}

export default fetchModel;
