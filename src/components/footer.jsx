import { profile } from '../data';

function Footer() {
  return (
    <footer className="footer footer-center bg-neutral p-6 text-neutral-content">
      <aside>
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, and daisyUI.
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
