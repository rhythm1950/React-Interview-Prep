import React from "react";

const NextBatch = () => {
  return (
    <section class="next-batch shadow mx-auto container">
      <h1 class="main-title text-center">পরবর্তী ব্যাচের সময় সূচি</h1>
      <div class="row">
        <div class="col-md-6 d-flex">
          <div class="icon icon-1">
            <i class="far fa-address-book"></i>
          </div>
          <div>
            <h5>রেজিস্ট্রেশন শুরু: জুন ১০, ২০২১ (বৃহস্পতিবার)</h5>
          </div>
        </div>
        <div class="col-md-6 d-flex">
          <div class="icon icon-2">
            <i class="far fa-bell"></i>
          </div>
          <div>
            <h5>ব্যাচের ওরিয়েন্টশন: জুন ২৮, ২০২১ (সোমবার)</h5>
          </div>
        </div>
        <div class="col-md-6 d-flex">
          <div class="icon icon-3">
            <i class="fab fa-accusoft"></i>
          </div>
          <div>
            <h5>রেজিস্ট্রেশন শেষ: জুন ২৪, ২০২১ (বৃহস্পতিবার)</h5>
          </div>
        </div>
        <div class="col-md-6 d-flex">
          <div class="icon icon-4">
            <i class="fas fa-desktop"></i>
          </div>
          <div>
            <h5>ক্লাস শুরু: জুলাই ১, ২০২১ (বৃহস্পতিবার)</h5>
          </div>
        </div>
      </div>
      <div class="next-batch-btn d-flex align-items-center justify-content-between rounded-pill">
        <h5>তুমি ৪র্থ ব্যাচে এনরোল করতে আগ্রহি হলে, ঝাঁপিয়ে পড়ো</h5>
        <button class="btn custom-btn text-white rounded-pill">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default NextBatch;
