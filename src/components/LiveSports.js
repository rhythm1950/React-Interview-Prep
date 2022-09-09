import React from "react";

const LiveSports = () => {
  return (
    <section className="live-sports">
      <div className="live-sports-content">
        <div className="text-xl">Live Sports</div>
        <div className="sub-text">
          From football and basketball, to baseball and beyond, catch all the
          action live on Hulu. Get access to over 75 live channels, plus Hulu’s
          entire streaming library.
        </div>

        <div className="live-sports-logos">
          <div>
            <img src="img/live-sports-logo-1.png" alt="" />
          </div>
          <div>
            <img src="img/live-sports-logo-2.png" alt="" />
          </div>
          <div>
            <img src="img/live-sports-logo-3.svg" alt="" />
          </div>
          <div>
            <img src="img/live-sports-logo-4.png" alt="" />
          </div>
        </div>

        <div className="legal-text">
          Offer available to new and eligible returning Hulu + Live TV
          subscribers only. See details
        </div>
      </div>
    </section>
  );
};

export default LiveSports;
