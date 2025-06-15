'use client'

import React from 'react'
import { pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import FileContextProvider from '@/app/contexts/FileContextProvider'
import DropFile from '@/app/components/DropFile'
import FileRenderer from '@/app/components/FileRenderer'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function PDFViewer() {
  return (
    <FileContextProvider>
      <DropFile />
      <FileRenderer />
    </FileContextProvider>
  )
}
