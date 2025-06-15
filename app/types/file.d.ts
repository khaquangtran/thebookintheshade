import type { ChangeEvent, DragEvent } from 'react'

export type FileContext = {
  file: File | null
  onDrop: (e: DragEvent<HTMLDivElement>) => void
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
}
