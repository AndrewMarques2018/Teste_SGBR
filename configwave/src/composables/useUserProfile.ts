import { useQuery } from '@tanstack/vue-query'
import { fetchUserProfile } from '@/api/mockApi'

/**
 * Composable para buscar os dados do perfil do usuário.
 * Gerencia automaticamente o cache, loading, e estados de erro.
 */
export const useUserProfile = () => {
  
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['userProfile'], // Chave única para esta query
    queryFn: fetchUserProfile,  // A função que realmente busca os dados
  })

  return {
    profile: data,
    isLoading,
    isError,
    error,
  }
}