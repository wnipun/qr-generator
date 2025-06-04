"use client"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useRef, useState } from "react"
import QRCode from "qrcode"

export default function HomePage() {
  const [input, setInput] = useState("")
  const qrCanvas = useRef(null)

  /**
   * Handles the creation of a QR code by converting the current canvas element to a data URL.
   *
   * This asynchronous function checks if the `qrCanvas` reference is set, and if so,
   * uses the `QRCode.toDataURL` method to generate a data URL from the canvas element
   * using the provided `input` value.
   *
   * @returns {Promise<void>} A promise that resolves when the QR code has been generated.
   */
  async function handleCreate(): Promise<void> {
    if (qrCanvas.current) {
      await QRCode.toDataURL(qrCanvas.current as HTMLCanvasElement, input)
    }
  }

  return (
    <div className="container max-w-md mx-auto space-y-4">
      <canvas ref={qrCanvas} className="mx-auto"></canvas>
      <Textarea onChange={(e) => setInput(e.target.value)} value={input} />
      <Button onClick={handleCreate} disabled={input === ""}>
        Create
      </Button>
    </div>
  )
}
