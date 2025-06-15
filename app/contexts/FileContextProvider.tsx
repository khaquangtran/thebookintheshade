'use client'

import React, { ChangeEvent, createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { FileContext } from '@/app/types/file'

const fileContext = createContext<FileContext>({
  file: null,
  onDrop: null!,
  onFileChange: null!,
})

export default function FileContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    const file = e.dataTransfer.files[0]

    if (file?.type === 'application/pdf') {
      setFile(file)
    }
  }

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const file = e.target.files?.[0]

    if (file?.type === 'application/pdf') {
      setFile(file)
    }
  }

  return (
    <fileContext.Provider value={{ file, onDrop, onFileChange }}>
      {children}
    </fileContext.Provider>
  )
}

export const useFileContext = () => useContext(fileContext)
