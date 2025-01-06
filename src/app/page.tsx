import TransitionEffect from "@/components/TransitionEffect";
import Home from "@/components/ui/Home";
import RetroGrid from "@/components/ui/retro-grid";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <div>
      <TransitionEffect/>
      <RetroGrid />
      <Home />
    </div>
  );
}
