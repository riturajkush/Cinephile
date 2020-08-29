const API_KEY = "7357590fc94ec4610cf2ebc299360ac9";

const requests = {
  fetchAmazon: `/discover/tv?api_key=${API_KEY}&with_networks=1024`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchHboeu: `/discover/tv?api_key=${API_KEY}&with_networks=1129`,
  fetchHulu: `/discover/tv?api_key=${API_KEY}&with_networks=453`,
  fetchHotstar: `/discover/tv?api_key=${API_KEY}&with_networks=3919`,
};

export default requests;
