import React from 'react'
import ReactDOM from 'react-dom/client'
import IndexPage from '@/pages/Index'
import { MusicPlayer } from "@/components/MusicPlayer"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IndexPage />
    <MusicPlayer />
  </React.StrictMode>
)
