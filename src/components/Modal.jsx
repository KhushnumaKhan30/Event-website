import { Calendar, Clock, Users, MapPin, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Modal() {
  return (
    <div className="container mx-auto py-12 px-4 absolute h-screen w-screen z-50 bg-white">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <h1 className="text-4xl font-bold">Code-a-Thon</h1>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-muted-foreground">
            <p>
              The coding contest allows only individual participation, ensuring that every competitor showcases their
              personal skills and knowledge. Participants can choose any programming language from the platform's list
              of supported options. A standardized coding environment with compiler support for all listed languages
              will be available on the platform to ensure fairness and consistency.
            </p>
            <p>
              Before submitting solutions, participants are advised to test their code, as submitted solutions cannot be
              altered. Each problem carries a predefined score based on its level of difficulty, rewarding participants
              proportional to the complexity of the challenges they solve. In the event of a tie, rankings will be
              determined based on the total time taken, with faster submissions earning a higher position.
            </p>
            <p>
              The contest maintains a strict no-tolerance policy against plagiarism and cheating, with violations
              leading to immediate disqualification. Participants are expected to uphold integrity and fairness
              throughout the competition.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">Tuesday, February 11, 2025</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">10:00 AM</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">Team Size: 1 members</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Location: TBD (To be Decided)</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" size="lg">
            <LogIn className="mr-2 h-4 w-4" /> Register Now
          </Button>
          <p className="text-center text-sm text-muted-foreground">You need to login first to register for events.</p>
        </CardFooter>
      </Card>
    </div>
  )
}

