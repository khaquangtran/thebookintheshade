'use client'

import { useFileContext } from '@/app/contexts/FileContextProvider'

export default function DropFile() {
  const { file, onDrop, onFileChange } = useFileContext()

  if (file) return null

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-20">
      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-400 p-20 rounded-xl text-center w-full"
      >
        <input
          id="files"
          type="file"
          accept="application/pdf"
          onChange={onFileChange}
          className="hidden"
        />
        <label
          htmlFor="files"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          Drag & drop a PDF file here
        </label>
      </div>
    </div>
  )
}
