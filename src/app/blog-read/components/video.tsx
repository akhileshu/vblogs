import { cn } from "@/lib/utils";
interface InputProps {
  className?: string;
}

export function Video({ className }: InputProps) {
  return (
    <div className={cn("", className)}>
      <video className="aspect-video rounded-sm" controls>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
