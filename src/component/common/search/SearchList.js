import React, { useState } from 'react'
import { VALUE_EVENT_ENTER } from '@Const/const';
import SearchIcon from '@mui/icons-material/Search';
import ButtonIcon from '../button/ButtonIcon'
import '@Assets/styles/searchList.css'

// eslint-disable-next-line no-unused-vars
const SearchList = ({ onSearch = (value) => {} }) => {
  const [value, setValue] = useState('')

  const handleOnChange = ({target}) => setValue(target.value)

  const handleOnClick = () => onSearch(value)

  const handleOnKeyDown = (event) => {
    if (event.key === VALUE_EVENT_ENTER) {
      event.preventDefault()
      onSearch(event.target.value)
    }
  }

  return (
    <div className='searchList'>
      <div className='searchList__input'>
        <input type="text" onChange={handleOnChange} onKeyDown={handleOnKeyDown} />
      </div>
      <ButtonIcon Icon={SearchIcon} onClick={handleOnClick} />
    </div>
  )
}

export default SearchList