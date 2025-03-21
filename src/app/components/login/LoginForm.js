'use client';

import ValidateForm from "../../utils/ValidateForm"; 
import Link from 'next/link';

export default function LoginForm() {
  

  async function handleSubmit(event) {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const newErrors = ValidateForm(email, password);
    
    if (newErrors.email || newErrors.password) {
      alert('Error: ' + newErrors.email + ' ' + newErrors.password);
      return;
    }
    
  }

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Login</h2>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md text-black"
          />
          
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-300 rounded-md text-black"
          />

        </div>


        <Link href="./components/dashboard">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
