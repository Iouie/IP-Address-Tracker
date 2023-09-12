export default function Info({ getLocation, checkLoading }) {
  const { ip, location, isp } = getLocation;

  const FinishedLoading = () => {
    if (!location) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <div className="flex flex-col px-4 mx-auto mb-10 mt-4 ">
          <p className="text-[#969696] font-medium tracking-widest py-2 text-sm">
            IP ADDRESS
          </p>
          <p className="text-[#2b2b2b] font-bold">{ip}</p>
        </div>
        <div className="flex flex-col px-4 mx-auto mb-10 mt-4 ">
          <p className="text-[#969696] font-medium tracking-widest py-2 text-sm">
            LOCATION
          </p>
          <p className="text-[#2b2b2b] font-bold">
            {location.city}, {location.region} {location.postalCode}
          </p>
        </div>
        <div className="flex flex-col px-4 mx-auto mb-10 mt-4">
          <p className="text-[#969696] font-medium tracking-widest py-2 text-sm">
            TIMEZONE
          </p>
          <p className="text-[#2b2b2b] font-bold">UTC {location.timezone}</p>
        </div>
        <div className="flex flex-col px-4  mx-auto mb-10 mt-4">
          <p className="text-[#969696] font-medium tracking-widest py-2 text-sm">
            ISP
          </p>
          <p className="text-[#2b2b2b] font-bold">{isp}</p>
        </div>
      </>
    );
  };

  return (
    <section className="flex flex-col md:flex-row  md:divide-x md:divide-[#d8d8d8] max-w-3xl bg-white rounded-lg text-[18px] mx-auto relative bottom-14 z-10  ">
      <FinishedLoading />
    </section>
  );
}
