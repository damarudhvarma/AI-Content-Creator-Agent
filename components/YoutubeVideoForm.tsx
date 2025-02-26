import React from 'react'
import Form from "next/form";
;const YoutubeVideoForm = () => {
  return (
    <div>
        <Form 
        className='flex flex-col sm:flex-row gap-2 items-center'
            >
            <input name='url' type="text" placeholder='Enter YouTube URL'/> 


        </Form>
    </div>
  )
}

export default YoutubeVideoForm