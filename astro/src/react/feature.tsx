
const Feature = ({ blok }: any):any => {
  return (
    <>
        <div className="feature rounded-xl bg-white text-black p-6 border-4">
          <h2 className="text-2xl font-bold mb-2">Feature</h2>
          <p className="italic">{blok.name}</p>
        </div>
    </>
  );
};

export default Feature;
