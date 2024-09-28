import { Button } from "@/components/ui/button";

export default function GreetingButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="bg-secondary text-secondary-foreground"
    >
      Say Hello
    </Button>
  );
}
