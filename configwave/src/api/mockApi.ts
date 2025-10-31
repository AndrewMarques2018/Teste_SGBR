import logo from '@/assets/logo.png' // Reutilizando sua logo

// 1. Defina a interface do seu Perfil
export interface UserProfile {
  id: string
  name: string
  email: string
  bio: string
  avatarUrl: string // Vamos usar a logo como avatar
}

// 2. Crie os dados mockados
const mockProfileData: UserProfile = {
  id: 'uuid-12345-abcde',
  name: 'Usuário ConfigWave',
  email: 'usuario@configwave.com',
  bio: 'Este é um perfil de usuário simulado, carregado com TanStack Query.',
  avatarUrl: logo,
}

// 3. Crie a função de "fetch" assíncrona
export const fetchUserProfile = async (): Promise<UserProfile> => {
  console.log('API: Buscando dados do perfil...')
  
  // Simula um atraso de 1 segundo (1000ms)
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  console.log('API: Dados recebidos com sucesso.')
  return mockProfileData
}