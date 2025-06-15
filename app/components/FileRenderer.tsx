import { Document, Page } from 'react-pdf'
import { useFileContext } from '@/app/contexts/FileContextProvider'
import { ReactElement, useState } from 'react'

export default function FileRenderer() {
  const { file } = useFileContext()

  const [numPages, setNumPages] = useState<number>(0)

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const onRender = (numPages: number): ReactElement[] => {
    const pages: ReactElement[] = []

    for (let i = 1; i < numPages; i += 2) {
      pages.push(
        <div className="w-full grid grid-cols-2" key={`page_${i}`}>
          <Page
            pageNumber={i}
            renderAnnotationLayer={true}
            renderTextLayer={true}
            width={window.innerWidth / 2}
          />
          <Page
            pageNumber={i + 1}
            renderAnnotationLayer={true}
            renderTextLayer={true}
            width={window.innerWidth / 2}
          />
        </div>
      )
    }

    return pages
  }

  if (!file) return null

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onLoadSuccess}
        className="filter invert hue-rotate-180 w-full"
      >
        {onRender(numPages)}
      </Document>
    </div>
  )
}
