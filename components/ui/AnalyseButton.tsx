"use client";
import React from 'react'
import { useFormStatus } from 'react-dom'

const AnalyseButton = () => {
  const {pending}= useFormStatus();
  return (
    <button
    type='submit'
    disabled={pending}
    className=' px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium'>
      {pending ?"Analysing..." : "Analyze"}
    </button>
  )
}

export default AnalyseButton