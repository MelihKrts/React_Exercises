import React from 'react'
import { useState } from 'react'


export default function MainArea() {

  const [fileData, setFileData] = useState(null)
  const [audioUrl, setAudioUrl] = useState(null)
  const [isPlaying,setIsPlaying] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileData(file)
    if (file) {
      console.log("Music started", file.name)
      const audioObjectUrl = URL.createObjectURL(file)
      setAudioUrl(audioObjectUrl)
    }
    
  }

  const togglePlayback = () =>{
    setIsPlaying(!isPlaying)
  }

  return (
    <main className='w-full mt-20 relative'>
      <div className='container sm:container md:container: lg:container'>
        <div className='w-full border rounded-md py-4 px-4'>
          <input type='file' onChange={handleFileChange} />
        </div>
        </div>
        {audioUrl && (

            <div className='w-full fixed bottom-0 z-10 bg-black flex items-center justify-center'>
              <audio className='w-1/3 rounded-xl mb-4 mt-4' src={audioUrl} controls autoPlay={isPlaying}>
              </audio>
            </div>
          )}
    </main>
  )
}

