import { children, createEffect, createSignal, onCleanup, ParentComponent } from "solid-js";
import HumanComputerImage from "./assets/human_computers.webp";
import AsciiImage from "./assets/ascii.webp";
import ComputerVideo from "./assets/computer_video.webm";

const [slide, setSlide] = createSignal(0);

function App() {
  return (
    <Slides>
      <Slide>
        <AlignVertical>
          <H1>THE SESSION WILL START IN</H1>
          <Countdown jump={false} time={30 * 60} />
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>BEHIND THE SCREENS</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <Title>Goal 1</Title>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-20 h-20 text-yellow-200">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <H1>THINK LIKE AN <Highlight>INVENTOR</Highlight></H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <Title>Goal 2</Title>
          <svg class='w-20 h-20' fill="#ef4444" color="#f43f5e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z" /></svg>
          <H1>EMBRACE <Highlight>COGNITIVE DISSONANCE</Highlight></H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <Title>Goal 3</Title>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-20 h-20 text-indigo-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>
          <H1><Highlight>OWN</Highlight> YOUR TECH</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>WHAT IS A COMPUTER?</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>A COMPUTER IS ANYTHING THAT <Highlight>COMPUTES</Highlight></H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>TO COMPUTE IS TO <Highlight>CALCULATE</Highlight></H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>TO TAKE SOME <Highlight>INPUT</Highlight>, CALCULATE AND <Highlight>OUTPUT</Highlight></H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical class="gap-20">
          <Title>A Computer</Title>
          <div class="flex gap-10 text-indigo-50 items-center">
            <div class="text-3xl font-semibold">Input</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-indigo-50 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            <div class="rounded w-40 h-40 bg-slate-900"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-indigo-50 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            <div class="text-3xl font-semibold">Output</div>
          </div>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>EXAMPLES?</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <Title>Example 1</Title>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-indigo-100 w-20 h-20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
          </svg>
          <H1>YOUR HAND</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <Title>Example 2</Title>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="text-indigo-100 w-20 h-20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <H1>AN ACCOUNTANT</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <Title>Exhibit A</Title>
          <img src={HumanComputerImage} class="rounded shadow" />
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <Title>Notable Examples:</Title>
          <div class="flex flex-col items-center gap-5">
            <H1 class="text-3xl font-normal">ABACUS</H1>
            <H1 class="text-3xl font-normal">SUN DIALS</H1>
            <H1 class="text-3xl font-normal">CALCULATORS</H1>
          </div>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>THE MOST POWERFUL COMPUTER TO EVER EXIST?</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <svg class='w-20 h-20' fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z" /></svg>
          <H1>YOUR BRAIN!</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>SO SPIN UP A SIMULATION IN YOUR HEAD</H1>
          <H1 class="font-semibold">LET'S BUILD A COMPUTER!</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <Title>Step 1</Title>
          <H1>BINARY</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>WHY BINARY?</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>THINK ELECTRIC!</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>WHAT CAN ELECTRICITY DO?</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <div class="flex items-center gap-2">
            <div class="h-0.5 w-20 bg-indigo-100"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-yellow-300 w-14 h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            <div class="h-0.5 w-20 bg-indigo-100"></div>
          </div>
          <H1>FLOW</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <div class="flex items-center gap-2">
            <div class="h-0.5 w-20 bg-indigo-100"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-red-300 w-14 h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
            </svg>
            <div class="h-0.5 w-20 bg-indigo-100"></div>
          </div>
          <H1>NOT FLOW</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-yellow-300 w-14 h-14">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <H1>ON</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-indigo-300 w-14 h-14">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <H1>OFF</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>1</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>0</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>LET'S ASSIGN THEM MEANING</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>ASSIGN NUMBERS?</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>0 - 0</H1>
          <H1>1 - 1</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>00 - 0</H1>
          <H1>01 - 1</H1>
          <H1>10 - 2</H1>
          <H1>11 - 3</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>000 - 0</H1>
          <H1>001 - 1</H1>
          <H1>010 - 2</H1>
          <H1>011 - 3</H1>
          <H1>100 - 4</H1>
          <H1>101 - 5</H1>
          <H1>110 - 6</H1>
          <H1>111 - 7</H1>
          <H1>...</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>NOW WHAT?</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>ASSIGN MEANING TO NUMBERS!</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>65 - A</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>65 - A</H1>
          <H1>66 - B</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>65 - A</H1>
          <H1>66 - B</H1>
          <H1>67 - C</H1>
          <H1>...</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>97 - a</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>97 - a</H1>
          <H1>98 - b</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>97 - a</H1>
          <H1>98 - b</H1>
          <H1>99 - c</H1>
          <H1>...</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <Title>Exhibit B</Title>
          <img class="rounded shadow" src={AsciiImage} />
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <H1>TO THE BLACKBOARD!</H1>
        </AlignVertical>
      </Slide>
      <Slide>
        <AlignVertical>
          <video controls class="container mx-auto">
            <source src={ComputerVideo} />
          </video>
        </AlignVertical>
      </Slide>
    </Slides>
  );
}

const Highlight: ParentComponent<{ class?: string }> = (props) => {
  return (
    <span class={`underline underline-offset-8 italic font-medium text-indigo-100 ${props.class}`}>{props.children}</span>
  );
};

const Title: ParentComponent<{ class?: string }> = (props) => {
  return (
    <div class={`text-indigo-50 text-xl font-black underline underline-offset-4 ${props.class}`}>{props.children}</div>
  );
};

const AlignVertical: ParentComponent<{ class?: string }> = (props) => {
  return (
    <div class={`flex flex-col justify-center items-center h-full gap-10 ${props.class}`}>
      {props.children}
    </div>
  );
};

const H1: ParentComponent<{ class?: string }> = (props) => {
  return (
    <h1 class={`text-5xl text-indigo-50 font-light tracking-wider ${props.class}`}>{props.children}</h1>
  );
};

const Countdown = (props: { time: number, jump?: boolean }) => {
  const [time, setTime] = createSignal(props.time);
  const [mins, setMins] = createSignal(0);
  const [secs, setSecs] = createSignal(0);

  const timeIntervalHandler = () => {
    if (time() > 0) {
      setTime((time) => time - 1);
    }
  };

  const intervalId = setInterval(timeIntervalHandler, 1000);

  createEffect(() => {
    if (time() === 0) {
      clearInterval(intervalId);

      if (props.jump !== undefined && props.jump) {
        setTimeout(() => {
          setSlide((slide) => slide + 1);
        }, 1000);
      }
    }
  });

  createEffect(() => {
    let currTime = time();
    let mins = Math.floor(currTime / 60);
    let seconds = currTime % 60;
    setMins(mins);
    setSecs(seconds);
  });

  return (
    <div class="text-6xl font-thin text-indigo-50 tracking-widest font-mono">
      {mins()}:{secs() === 0 ? '00' : (secs() > 9 ? secs() : `0${secs()}`)}
    </div>
  );
};

const Slides: ParentComponent = (props) => {
  const Children = children(() => props.children);
  const ChildrenArray = Children.toArray();

  const slideEventHandler = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' && slide() < ChildrenArray.length - 1) {
      setSlide((slide) => slide + 1);
    } else if (e.key === 'ArrowLeft' && slide() > 0) {
      setSlide((slide) => slide - 1);
    }
  };

  window.addEventListener('keyup', slideEventHandler);

  onCleanup(() => {
    window.removeEventListener('keyup', slideEventHandler);
  });

  return (
    <div class="bg-gradient-to-b to-indigo-950 from-violet-400">{ChildrenArray[slide()]}</div>
  );
}

const Slide: ParentComponent = (props) => {
  return (
    <div class='w-full h-screen'>{props.children}</div>
  );
}

export default App
