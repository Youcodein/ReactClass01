import React from 'react'

import {SearchBar} from './'

import { SlSocialYoutube } from 'react-icons/sl'


const HeaderCont = () => {
  return (
    <div id="header">
      <h1 className="logo">
        <SlSocialYoutube className="icon" />
        Deco Youtube
      </h1>
      <SearchBar />
    </div>
  )
}

export default HeaderCont
