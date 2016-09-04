import axios from 'axios'
const ENDPOINT_URL = 'https://tell-me-where-to-eat-v2-rails.herokuapp.com/api/establishments/find'

const EstablishmentAPI = {
  getEstablishment(latitude, longitude, radius) {
    let url = `${ENDPOINT_URL}?latitude=${latitude}&longitude=${longitude}&radius=${radius}`

    return axios.get(url)
      .then((response) => (response.data))
      .catch((error) => (error))
  }
}

export default EstablishmentAPI
