# 📧 AI-Powered Smart Email Assistant

An AI-powered email assistant that generates **context-aware replies** directly inside Gmail using the **Google Gemini API**. The system includes a **React web application**, a **Chrome Extension**, and a **Spring Boot backend** for seamless AI-powered email reply generation.

---

## 🚀 Features

- 🤖 AI-generated email replies using Google Gemini API  
- ✉️ Context-aware responses based on email content  
- ⚡ One-click **“AI Reply”** button integrated inside Gmail  
- 🌐 React web application for testing and previewing replies  
- 🔐 Spring Boot REST API for secure request handling  
- 🧩 Chrome Extension built with Manifest V3  

---

## 🛠️ Tech Stack

### Frontend
- React  
- JavaScript  
- HTML & CSS  

### Backend
- Spring Boot  
- REST APIs  

### AI & Integration
- Google Gemini API  
- Chrome Extension (Manifest V3)  

---

## 🧠 System Architecture

1. User opens an email in Gmail  
2. Chrome Extension injects an **“AI Reply”** button  
3. Email content is sent to the Spring Boot backend  
4. Backend sends a structured prompt to the Google Gemini API  
5. AI-generated reply is returned  
6. Reply is displayed in Gmail for editing and sending  

---

## 📂 Project Structure

```text
AI-Powered-Smart-Email-Assistant
│
├── frontend/          # React web application
├── backend/           # Spring Boot REST API
├── chrome-extension/  # Gmail Chrome Extension (MV3)
├── README.md
