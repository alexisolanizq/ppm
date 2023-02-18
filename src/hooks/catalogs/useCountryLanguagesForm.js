import useModal from '@Hooks/common/useModal'
import { useCountriesActiveListService } from '@Services/countries/useCountriesService'
import { useCountryLanguageAddService, useCountryLanguageUpdateService } from '@Services/countryLanguage/useCountryLanguageService'
import { useLanguageActiveListService } from '@Services/languages/useLanguageService'
import { useForm } from 'react-hook-form'

const useCountryLanguagesForm = ({ row, isUpdate, onEnd }) => {
  const modalLanguage = useModal()
  const { control, handleSubmit } = useForm({
    mode: 'all',
    defaultValues: row ?? null
  })

  const { data: countries, isLoading: isLoadingCountries } = useCountriesActiveListService()
  const { data: languages, isLoading: isLoadingLanguages } = useLanguageActiveListService()
  const addMutation = useCountryLanguageAddService()
  const updateMutation = useCountryLanguageUpdateService(row?.clanId)

  const onSubmit = async ({countries: countriesForm, language, ...data}) => {
    if (isUpdate) {
      const body = {
        ...data,
        language
      }
      await updateMutation.mutateAsync(body)

    } else {
      const body = countriesForm.map((country) => ({
        country: {
          counId: country
        },
        language,
        status: true
      }))
        
      await addMutation.mutateAsync(body)
    }
    onEnd()
  }

  const isLoading = isLoadingCountries || isLoadingLanguages
  const isLoadingMutation = addMutation.isLoading || updateMutation.isLoading

  return {
    control,
    handleSubmit,
    onSubmit,
    countries,
    languages,
    isLoading,
    isLoadingMutation,
    modalLanguage
  }
}

export default useCountryLanguagesForm