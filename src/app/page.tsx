import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
       <div className="flex flex-col w-full max-w-md gap-6 mt-22">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg">I'm a software engineer with a passion for backend architecture and Highly performant systems</p>
          </div>
          {/* generate flex row for skills */}
          <div className="flex flex-row flex-wrap gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Skills</h1>
              <p>During my training as software engineer i've not only learned to work with programming languages and frameworks but also a critical problemsolving workethic. </p>
               <p> I am able to visualize a project and see how the pieces work together. This allows me to work on projects of variable scale</p> { /* weird wording */ }
               <br />
                <p> I am a fast learner and am able to pick up new technologies and frameworks quickly. </p>
          </div>
        </div>
        {/* generate flex row for programming languages */}
        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Programming Languages</h2>
            <p>C#, Java, Javascript - Typescript </p>
          </div>
        </div>
        {/* generate flex row for framworks */}
        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl ">Frameworks</h2>
            <p>ASP.NET core, .NET core, NextJS, NodeJS</p>
          </div>
        </div>
        {/* generate flex row for miscelanious */}
        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Miscelanious</h2>
            <p>Git CLI, Docker, SQL, Postgres</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Experience</h1>
            <p>I've worked on a variety of projects, ranging from small websites to large scale applications. </p>
            <p> I've worked on projects for small businesses, startups and large companies. </p>
          </div>
        </div>
       </div>
      </div>
    </main>
  )
}
