'use client'

const Magazine = () => {
    return (
      <div className="bg-white rounded-lg w-full h-full flex">
        <div className="relative pt-[max(60%,324px)] w-full h-0 bg-transparent">
          <iframe
            className="absolute border-none w-full h-full left-0 top-0"
            src="https://online.fliphtml5.com/zrrbe/svue/"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  };
  
  export default Magazine;
  