import React from 'react'
import { Helmet } from 'vtex.render-runtime'

function HeadScripts() {
  return (
    <>
      <Helmet>
      <title>Titulo teste Helmet</title>
        <meta property="og:type" content="article" />
      </Helmet>
    </>
  )
}

export default HeadScripts

