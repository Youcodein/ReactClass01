import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { Category, Videos } from './'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('decoration')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=decoration`).then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em> 유튜브
        </h2>
        <Videos 
        videos={videos}
        setVideos = {setVideos}
        />
      </section>
    </main>
  )
}

export default MainConts