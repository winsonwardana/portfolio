export default function CardPort({ data }) {
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg "
        style={{
          backgroundColor: "white",
          marginTop: 40,
          justifyItems: "center",
        }}
      >
        <img className="w-full" src={data.img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.title}</div>
          <p className="text-gray-700 text-base">{data.tools}</p>
        </div>
      </div>
    </>
  );
}
