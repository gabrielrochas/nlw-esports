import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css';
import logoImg from './assets/logo_esports.svg';


function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Your{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        is here.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-text-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game name</strong>
            <span className="text-zinc-300 text-sm block">Ads info</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-text-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game name</strong>
            <span className="text-zinc-300 text-sm block">Ads info</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-text-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game name</strong>
            <span className="text-zinc-300 text-sm block">Ads info</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-text-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game name</strong>
            <span className="text-zinc-300 text-sm block">Ads info</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-text-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game name</strong>
            <span className="text-zinc-300 text-sm block">Ads info</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-text-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game name</strong>
            <span className="text-zinc-300 text-sm block">Ads info</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Have you found your duo?
            </strong>
            <span className="text-zinc-400">Publish your ads</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:via-violet-600 text-white rounded-lg flex gap-2 items-center">
            <MagnifyingGlassPlus size={24}/>
            Publish ads
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
