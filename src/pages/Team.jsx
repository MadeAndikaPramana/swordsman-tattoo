import Reveal from '../components/Reveal'
import PlaceholderImage from '../components/PlaceholderImage'
import { TEAM } from '../data/team'
import { STUDIO } from '../constants'

export default function Team() {
  return (
    <section className="pt-36 pb-28 md:pb-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blood-bright mb-4">Our Team</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-bone mb-5">
            The Artists
          </h1>
          <p className="text-bone-dim">
            Every piece at Swordsman is built on {STUDIO.rating}★-rated craft, hospital-grade
            sterilization, and years of dedicated practice.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-10">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <PlaceholderImage
                label={member.name}
                src={member.src}
                className="relative aspect-[4/5] w-full mb-6"
              />
              <h2 className="font-display text-2xl text-bone mb-1">{member.name}</h2>
              <p className="text-xs uppercase tracking-widest text-blood-bright mb-4">
                {member.role}
              </p>
              <p className="text-bone-dim leading-relaxed">{member.bio}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 border-t border-bone/10 pt-8 text-center">
          <p className="text-bone-dim text-sm">
            More of the team coming soon — get in touch on{' '}
            <a
              href={STUDIO.instagram}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blood-bright"
            >
              Instagram
            </a>{' '}
            to see who's available.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
