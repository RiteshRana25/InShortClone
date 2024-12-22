import { Container } from '@mui/material'
import React from 'react'
import './NewsContentDiv.css'
import Download from '../DownloadDiv/DownloadDiv.js'
import NewsCard from '../NewsCardDiv/NewsCardDiv.js'

const NewsContent = ({newsArray,newsResult,lodeMore,setLodeMore}) => {
  return (
    <>
    <Download></Download>
    <Container maxWidth="md">
      {newsArray.map((newsItem)=>(
      <NewsCard newsItem={newsItem} key={newsItem.title}></NewsCard>
    ))
    }
    {lodeMore<=newsResult && (
    <div className='lodemorediv'>
      <button className='loadMore' onClick={()=>setLodeMore(lodeMore+10)}>
        load more
      </button>
    </div>
    )
    }
    </Container>
    </>
  )
}

export default NewsContent