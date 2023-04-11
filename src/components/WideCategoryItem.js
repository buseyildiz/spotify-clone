function WideCategory({ category }) {
    return (
      <div
        style={{ "--color": category.color }}
        className="bg-[var(--color)] rounded-lg relative w-[27.375rem] h-[13.75rem] flex-shrink-0 "
      >
        <div className="absolute inset-0 overflow-hidden">
          <h3 className="p-4 tracking-tighter font-semibold text-[2.5rem]">
            {category.title}
          </h3>
          <img
            src={category.cover}
            className="shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0"
          />
        </div>
      </div>
    );
  }

  export default WideCategory