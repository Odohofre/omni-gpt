import IntroBanner from "./IntroBanner";
import IntroText from "./IntroText";

export default function Intro() {
  return (
    <section className="flex flex-col">
      <IntroBanner />
      <IntroText />
    </section>
  )
}
