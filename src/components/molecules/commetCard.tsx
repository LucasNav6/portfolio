import { CometCard } from "../atoms/comet-card";

export default function CommetExperience() {
  return (
    <CometCard className="animate-appear-ticket">
      <span
        className="flex cursor-pointer flex-col items-stretch rounded-tl-3xl rounded-br-3xl rounded-bl-xl border-0 bg-foreground saturate-0"
      >
        <div className="flex-shrink-0 justify-between font-mono text-white flex flex-col py-8 pl-2 pr-8">
          <strong className='text-background scroll-m-20 text-7xl font-extrabold tracking-tight'>
            +4
          </strong>
          <p className='text-background text-sm leading-none'>years of experience</p>
        </div>
      </span>
    </CometCard>
  )
}