import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css'
import Download from '../Download/Download.js'
import NewsCard from '../NewsCard/NewsCard.js'

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