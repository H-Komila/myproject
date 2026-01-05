import React from 'react'
import Article from '../Article/Article'
import Summary from '../Summary/Summary'
import Energiy from '../Energiy/Energiy'
import Work from '../Work/Work'
import Local from '../Local/Local'

const Home = () => {
  return (
    <>
      <Article/>
      <Energiy/>
      <Local/>
      <Work/>
      <Summary/>
    </>
  )
}

export default Home