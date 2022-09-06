import React from "react";

const Slider = () => {
  return (
    <section class="slider-area">
      <div
        id="carouselExampleIndicators"
        class="carousel slide container"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row align-items-center">
              <div class="col-md-7 m-bottom-50">
                <h1>Complete Web Development Course with Jhankar Mahbub.</h1>
                <p class="my-4">
                  একদম জিরো থেকে, কোন প্রকার পূর্ব অভিজ্ঞতা ছাড়াই একজন প্রফেশনাল
                  ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগবে তার সবকিছুই সহজ করে
                  গিলিয়ে খাওয়ানো হবে এই কোর্সে।
                </p>
                <button class="btn custom-btn text-white rounded-pill">
                  Enroll Now
                </button>
              </div>
              <div class="col-md-5">
                <img
                  src="images/home-1.png"
                  class="d-block w-100"
                  alt="home-1"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row align-items-center">
              <div class="col-md-7 m-bottom-50">
                <h1>Build 10 professional projects while learning.</h1>
                <p class="my-4">
                  কোর্সের অংশ হিসেবে হাতে কলমে নতুন দশটা প্রজেক্ট (এসাইনমেন্ট)
                  করবে তুমি। আমরা তোমার প্রজেক্ট এর ফিডব্যাক দিবো। মার্কস দিবো।
                  যাতে প্রফেশনাল ওয়েবসাইট বানিয়েই চাকরির ইন্টারভিউতে যেতে পারো।
                </p>
                <button class="btn custom-btn text-white rounded-pill">
                  Enroll Now
                </button>
              </div>
              <div class="col-md-5">
                <img
                  src="images/home-2.png"
                  class="d-block w-100"
                  alt="home-2"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row align-items-center">
              <div class="col-md-7 m-bottom-50">
                <h1>Got stuck? We will always be there for you.</h1>
                <p class="my-4">
                  ২৪ ঘন্টার মধ্যে কোর্স রিলেটেড সকল প্রশ্নের উত্তর দেয়ার জন্য
                  চারজন প্রফেশনাল ওয়েব ডেভেলপার স্ট্যান্ডবাই থাকে (ছুটির দিন
                  বাদে)। প্রয়োজনে গুগল মিট এ স্ক্রিনশেয়ার করে সমস্যা সমাধান করা
                  হয়।
                </p>
                <button class="btn custom-btn text-white rounded-pill">
                  Enroll Now
                </button>
              </div>
              <div class="col-md-5">
                <img
                  src="images/home-3.png"
                  class="d-block w-100"
                  alt="home-3"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </section>
  );
};

export default Slider;
