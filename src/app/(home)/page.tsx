import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage()
{
  return (
    <div className="container max-w-md">
      <Textarea/>
      <Button>Create</Button>
    </div>
  )
}