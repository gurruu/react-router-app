import React from 'react'
import { useRouteError } from 'react-router-dom'
import PageContent from '../components/PgeContent'

export default function Error() {
    const error=useRouteError()
    let title='An error occured'
    let message='Something went wrong'

    if(error.status===500)
    {
        message=JSON.parse(error.data).message
    }
    if(error.status===404)
    {
        title='not found'
        message='Cound not find page'
    }
  return (
    <>
    <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
    </>
  )
}
