import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bananaImage from "@/assets/banana_main.png";
import { Navbar } from "@/components/ui/mini-navbar";

function Hero() {
  return (
    <div className="w-full  py-30 px-20">
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Grab yours!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular text-yellow-400">
                The Banana Cheese Spot
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Get ready to fall in love with The Banana Cheese Spot— the
                perfect mix of crispy fried banana and melty cheese in every
                bite!
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square">
            <img src={bananaImage} alt="Banana" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };