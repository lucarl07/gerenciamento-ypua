import axios from "axios"
import { redirect } from "react-router-dom"

async function dashboardLoader() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const authToken = localStorage.getItem('user')

  // Validação da existência do token no cliente:
  if (!authToken) {
    return redirect('/login')
  }

  // Validação da existência do token no servidor:
  try {
    const response = await axios({
      method: 'GET',
      headers: { Authorization: authToken },
      url: `${baseUrl}/funcionarios/listByToken`
    })
    
    return response.data;
  } catch (error) {
    console.log(error)
    throw redirect('/login')
  }
}

export default dashboardLoader