import React from 'react'
import BlogHero from '@/components/blog/BlogHero'
import BlogPost from '@/components/blog/BlogPost'
import BlogNewsletter from '@/components/blog/BlogNewsletter'


const blog = () => {
  return (
    <div>
        <BlogHero />
        <BlogPost />
        <BlogNewsletter />
    </div>
   
  )
}

export default blog