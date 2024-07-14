import Link from 'next/link'
import React from 'react'

const projects = [
  {
    title: 'Weather App',
    mockup: '/mockups/weatherAppMock.png',
    live: 'https://weather-app.paytonpierce.dev',
    code: 'https://github.com/paytonjewell/react-weather-app-v2'
  },
  {
    title: 'Portfolio Template',
    mockup: '/mockups/portfolioTemplateMock.png',
    live: 'https://reactportfoliotemplate.paytonpierce.dev/',
    code: 'https://github.com/paytonjewell/ReactPortfolioTemplate'
  },
  {
    title: 'Alarm Clock',
    mockup: '/mockups/clockMock.png',
    live: 'https://darkmodeclock.paytonpierce.dev/',
    code: 'https://github.com/paytonjewell/Analog-Clock-With-Darkmode-Toggle'
  },
  {
    title: 'To-Do List',
    mockup: '/mockups/todoMock.png',
    live: 'https://todolist.paytonpierce.dev/',
    code: 'https://github.com/paytonjewell/To-Do-List'
  },
]

const Portfolio = () => {
  return (
    <div className="text-center">
      <p>Open Source Contributions:</p>
      <Link className="link link-primary" href="https://github.com/danielcranney/profileme-dev/pull/34">ProfileMe.dev</Link>
      <div className="flex flex-wrap items-start mb-10">
      {projects.map((project, index) => (
        <div key={index} className="md:w-1/2 flex flex-col items-center justify-center">
          <img src={project.mockup} />
          <h1 className="text-3xl mb-2">{project.title}</h1>
          <div className="flex gap-2">
            <Link href={project.live} target='_blank' className="btn btn-secondary">Live</Link>
            <Link href={project.code} target='_blank' className="btn btn-primary">Source</Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Portfolio