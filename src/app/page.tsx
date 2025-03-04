import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded-sm font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <div className="container mx-auto">
      <header className="flex flex-row py-10">
        <div className="flex-1">Logo</div>
        <ul className="flex flex-1 flex-row">
          <li className="flex-1">
            <a href="#">About</a>
          </li>
          <li className="flex-1">
            <a href="#">Pricing</a>
          </li>
          <li className="flex-1">
            <a href="#">Project</a>
          </li>
        </ul>
        <div className="flex flex-1 justify-end">
          <button className="text-red-600 border border-red-600 rounded-full cursor-pointer py-1.5 px-10">Contact</button>
        </div>
      </header>

      <div className="h-screen flex flex-row items-center">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Build Your Business</h1>
          <p className="mb-8">Provide the best service for your business</p>
          <div>
            <button className="font-bold text-white bg-red-500 rounded-lg cursor-pointer py-3 px-16">Get Started</button>
          </div>
        </div>
        <div className="flex flex-1">
          <Image
            aria-hidden
            src="/overview.svg"
            alt="Image"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex-1">
          <Image
            className="mx-auto"
            aria-hidden
            src="/services.svg"
            alt="Image"
            width={400}
            height={400}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">We Provide Many Services You Can Use</h2>
          <ul>
            <li>
              <span>
                <Image
                  className="inline"
                  aria-hidden
                  src="/done.svg"
                  alt="Image"
                  width={20}
                  height={20}
                />
              </span>
              Web application development
            </li>
            <li>
              <span>
                <Image
                  className="inline"
                  aria-hidden
                  src="/done.svg"
                  alt="Image"
                  width={20}
                  height={20}
                />
              </span>
              Mobile application development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
