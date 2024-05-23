export default function Provider({ element }) {
  return (
    <button
      type="button"
      className="w-full h-auto py-2 px-4 flex justify-start items-center gap-4 border border-[#D6DBF5] shadow rounded-md hover:opacity-65 transition duration-150 ease-in-out"
    >
      <img src={element.image} alt="Logo" />
      <div className="text-lg font-light text-black">{element.label}</div>
    </button>
  );
}
