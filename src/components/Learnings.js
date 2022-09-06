import React from "react";

const Learnings = () => {
  return (
    <section class="can-be-learned container mtop-100">
      <h1 class="main-title text-center">এই কোর্স থেকে কি কি শিখতে পারবে:</h1>
      <div class="row">
        <div class="col-xl-5">
          <div class="learn-info shadow">
            <video controls src="./video/Tips.mp4"></video>
            <div class="registration-closed mt-3">Registration is closed</div>
            <div class="d-flex justify-content-between text-center mt-4">
              <div>
                <img src="images/icons/required.png" alt="required" />
                <p class="mt-3 fs-4 mb-0">
                  <strong>3</strong>
                </p>
                <p class="fs-5 learn-req">Month Required</p>
              </div>
              <div>
                <img src="images/icons/enrolled.png" alt="enrolled" />
                <p class="mt-3 fs-4 mb-0">
                  <strong>3000</strong>
                </p>
                <p class="fs-5 learn-req">Enrolled</p>
              </div>
              <div>
                <img src="images/icons/certificate.png" alt="required" />
                <p class="mt-3 fs-4 mb-0">
                  <strong>Yes</strong>
                </p>
                <p class="fs-5 learn-req">Certificate</p>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex align-items-center shadow-sm p-3">
                <img src="images/icons/video.png" alt="video" />
                <p class="mb-0 mx-2">550 Videos</p>
              </div>
              <div class="d-flex align-items-center shadow-sm p-3">
                <img src="images/icons/quize.png" alt="quize" />
                <p class="mb-0 mx-2">60 Quizzes</p>
              </div>
              <div class="d-flex align-items-center shadow-sm p-3">
                <img src="images/icons/assignment.png" alt="assignment" />
                <p class="mb-0 mx-2">11 Assignment</p>
              </div>
            </div>
            <h2 class="mt-5 fs-1">৳ 5500</h2>
          </div>
        </div>
        <div class="col-xl-7">
          <div class="row">
            <div class="col-md-6 d-flex mb-4">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="text">
                ফটাফট কয়েকটা ভিডিও দেখে HTML, CSS শিখে ফটাফট চমৎকার দুইটা
                ওয়েবসাইট বানিয়ে ফেলবে। এবং সেগুলার লিংক যেকারো সাথে শেয়ার করে
                ভাব পেটাতে পারবে।
              </div>
            </div>
            <div class="col-md-6 d-flex mb-4">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="text">
                বুটস্ট্রাপ (bootstrap) নামক পপুলার ফ্রেমওয়ার্ক এর খুঁটিনাটি ভাজা
                ভাজা করে ফেলবে। তারপর সেটা দিয়েও দুইটা ই-কমার্স ওয়েবসাইট বানিয়ে
                ফেলবে। কি মজা !
              </div>
            </div>
            <div class="col-md-6 d-flex mb-4">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="text">
                জাভাস্ক্রিপ্টের ছয়টা মেইন জিনিস, জাভাস্ক্রিপ্ট দিয়ে প্রবলেম
                সলভিং, ইন্টারভিউ এর প্রশ্ন-উত্তর। এমনকি ES6 দিয়ে তোমার নলেজকে
                যোগোপযোগী করে তুলবে।
              </div>
            </div>
            <div class="col-md-6 d-flex mb-4">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="text">
                জাভাস্ক্রিপ্ট দিয়ে ব্যাংকের deposit, withdraw এর লাইভ
                ক্যালকুলেশন থাকছে। তারপরই থাকছে ই-কমার্স সাইটের শপিং কার্টের
                হিসাব-নিকাশ করার সিস্টেম।
              </div>
            </div>
            <div class="col-md-6 d-flex mb-4">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="text">
                সার্ভার সম্পর্কে ধারণা, REST API কল করে JSON ডাটা লোড করা, node,
                mongodb (database), chrome devtool দিয়ে ডিবাগিং সম্পর্কে ধারণা
                দেয়া হবে।
              </div>
            </div>
            <div class="col-md-6 d-flex mb-4">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="text">
                কোর্সের সবচেয়ে গুরুত্বপূর্ণ দিক হচ্ছে দুনিয়ার সবচেয়ে বেশি চাকরি
                যে জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক এ (React), সেটা দিয়ে পরিপূৰ্ণ একটা
                ওয়েবসাইট একদম শূন্য থেকে শেষ পর্যন্ত দেখানো হয়েছে।
              </div>
            </div>
            <div class="col-md-6 d-flex mb-4">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="text">
                React দিয়ে সম্পূর্ণ প্রফেশনাল ওয়েবসাইট। ডাটাবেজ, সার্ভার সাইড,
                হোস্টিং, পেমেন্ট সিস্টেম, লগইন, রাউটিং দিয়ে ১০০% ক্লায়েন্ট-রেডি
                ওয়েবসাইট বানিয়ে দেখানো হবে।
              </div>
            </div>
            <div class="col-md-6 d-flex mb-4">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <div class="text">
                সর্বমোট ১০টা প্রজেক্ট তুমি নিজে করবে। আমাদের হেল্প নিয়ে। এছাড়াও
                ৫টা ওয়েবসাইট আমরা দেখিয়ে দিবো। যেগুলা করতে করতে তুমি নিজের
                অজান্তেই পরিপূর্ন ওয়েব ডেভেলপার হয়ে উঠবে।
              </div>
            </div>
            <div class="col-md-12 text mt-5">
              তবে যারা একটু ফাঁকিবাজ তাদের জন্য দুঃসংবাদ হচ্ছে। প্রত্যেক ভিডিও
              এর পরে প্রশ্ন থাকছে। প্রত্যেক মডিউল শেষে ফাইনাল কুইজ আছে। আর
              প্রত্যেকটা প্রজেক্টের পর একটা করে টেক-এওয়ে হোমওয়ার্ক আছে।
              <br />
              <br />
              এই কোর্স ফলো করে কেউ যদি ওয়েব ডেভেলপার না হতে পারে, দুনিয়ার আর কেউ
              তাকে ওয়েব ডেভেলপার বানাতে পারবে না।
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learnings;
