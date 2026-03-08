# 🌟 Welcome To (সহজ সরল সিম্পল) Assignment - 5

# **📅 Deadline For 60 marks:** 9th March, 2026 (11:59 pm ⏱️)  
#  📅 No Deadline For 50 marks  
# **📅 Deadline For 30 marks:** Any time after 9th March.

---

# Assignment-05: GitHub Issues Tracker


### **API Endpoints:**
###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues 


###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications


---

## 📝 Main Requirements

## 🎨 Design Part

## Login Page
- Create a login page containing a logo, title, and sub-title
- Below that, there will be 2 inputs, a sign-in button, and a demo credential to sign in. Follow the Figma for this page 
- Styled as per Figma

## Main Page: 

### Navbar: 

- Navbar with website logo/name on the left
- Search input and button on the right

### Tab Section like Figma: 

- 3 tab ( All, Open, Closed) at the top of this section.(**All**, **Open**, **Closed**)

- Below the tab, there will be an icon, the issue count, some text on the left, and an open and closed marker on the right

- Responsiveness: The website should be responsive for mobile devices. It is totally up to you. 


--- 


## ⚙️ Functionalities
- In login page, there will be default admin credentials (username, password). You need to sign in using these credentials.

- Load all issues and display as per Figma

- On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data 

- Each card shows:
  - Title
  - Description
  - Status
  - Category
  - Author
  - Priority
  - Label
  - CreatedAt
- Clicking on a tree name in a card will open a modal and show all the information about that Issue. 

### 🚀 Challenges


- Show the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top. 

- Loading spinner on data load

- Show active button on changing category names

- Implement Search Functionality and 8 meaningful github commit.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 
<!-- question and answer -->
 1️⃣ What is the difference between var, let, and const?

উত্তর: var, let, এবং const এই তিনটিই জাভাস্ক্রিপ্টে ডেটা বা তথ্য জমা রাখার জন্য ব্যবহৃত হয়। নিচে এদের পার্থক্য তুলে ধরা হলো:

var: এটি অনেক পুরনো পদ্ধতি। এর নির্দিষ্ট কোনো সীমানা বা Block Scope নেই। var-এর মাধ্যমে একই নামে একাধিক ভ্যারিয়েবল ডিক্লেয়ার করা যায়।

let: এটি একটি Block Scoped ভ্যারিয়েবল। এটি সাধারণত একই নামে দ্বিতীয়বার ডিক্লেয়ার করা যায় না, কিন্তু এর মান পরিবর্তন করা যায়।

const: এটিও একটি Block Scoped ভ্যারিয়েবল। এতে সাধারণত একবার মান সেট করে দিলে তা আর কখনো পরিবর্তন করা যায় না।
2️⃣ What is the spread operator (...)?
উত্তর: স্প্রেড অপারেটরকে সাধারণত তিনটি ডট (...) দিয়ে প্রকাশ করা হয়। এর কাজ হলো কোনো অ্যারে বা অবজেক্ট থেকে উপাদানগুলোকে আলাদা আলাদা করে ছড়িয়ে দেওয়া।

 3️⃣ What is the difference between map(), filter(), and forEach()?
উত্তর: map(), filter(), ও forEach() সাধারণত এই তিনটিই অ্যারের ওপর লুপ চালানোর জন্য ব্যবহার করা হয়।

map(): এটি সাধারণত প্রতিটি তথ্যের ওপরে কাজ করে এবং সেই কাজের ওপর ভিত্তি করে একটি নতুন অ্যারে তৈরি করে দেয়।

filter(): এটি নির্দিষ্ট শর্ত বা কন্ডিশন চেক করে এবং যারা সেই শর্ত পূরণ করে, শুধু তাদের নিয়ে একটি আলাদা অ্যারে তৈরি করে দেয়।

forEach(): এটি সাধারণত প্রতিটি তথ্যের কাছে যায় এবং নির্দিষ্ট কাজ সম্পাদন করে, কিন্তু কোনো নতুন রেজাল্ট বা অ্যারে ফেরত দেয় না।

 4️⃣ What is an arrow function?
উত্তর: অ্যারো ফাংশন হলো একটি আধুনিক ও শর্টকাট উপায়, যার মাধ্যমে সহজে ফাংশন লেখা যায় এবং এটি দেখতে অনেক পরিষ্কার লাগে।

5️⃣ What are template literals?
উত্তর: টেমপ্লেট লিটারেল হলো স্ট্রিং বা টেক্সট লেখার বিশেষ বা আধুনিক পদ্ধতি। যেখানে সাধারণত কোটেশনের বিপরীতে ব্যাকটিক (`) চিহ্ন ব্যবহার করা হয়। এর সবচেয়ে বড় সুবিধা হলো টেক্সটের ভেতরেই ${ } (ডলার বা কার্লি ব্র্যাকেট) এর মধ্যে সরাসরি কোনো ভ্যারিয়েবল বা মান বসিয়ে দেওয়া যায়।

---

## 🛠️ Technology Stack

- **HTML**
- **CSS** (Vanilla/Tailwind/DaisyUI)
- **JavaScript** (Vanilla)

---

## 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```


---

### Optional: 
 - No need to show status: Open, Closed styles On modals. 
 - No Need to show icon on labels 
 - No need to apply styles on Priority 
--- 


## 📤 What to submit

- **GitHub Repository Link:**
- **Live Site Link:**

---


