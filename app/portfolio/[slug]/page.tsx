import React from 'react'

const PortfolioDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <div>PortfolioDetail for {params.slug}</div>
  )
}

export default PortfolioDetail