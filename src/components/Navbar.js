import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => setToggle(!toggle)

  return (
    <header class="bg-gray-900">
      <div class="flex items-center justify-between px-4 py-3">
        <div class="">
          <img
            class="h-8"
            src="../assets/fat-kitten-header.svg"
            alt="Fat Kitten Web Services"
          />
        </div>
        <div class="">
          <button
            onClick={menuToggle}
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {toggle && (
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              )}
              {!toggle && (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div class={`px-2 pt-2 pb-4 ${toggle ? 'block' : 'hidden'}`}>
        <Link class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800" href="/" onClick={menuToggle}>Home</Link>
        <Link class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800" href="/about" onClick={menuToggle}>About</Link>

      </div>
    </header>
  );
};

export default Navbar;