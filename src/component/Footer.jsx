import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        {/* Brand Section */}
        <aside>
          <h2 className="text-2xl font-bold text-primary">
            <img
              className="w-10"
              src="https://i.ibb.co.com/FkCX7FLp/Movie-Deck.png"
              alt="Movie Deck"
            />
            Movie Deck
          </h2>
          <p className="text-sm">
            Explore movies, add favorites, and enjoy a personalized movie hub.
            <br />© {new Date().getFullYear()} Movie Portal. All rights
            reserved.
          </p>
        </aside>

        {/* Navigation */}
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">All Movies</a>
          <a className="link link-hover">My Favorites</a>
          <a className="link link-hover">About</a>
        </nav>

        {/* Contact */}
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">support@movieportal.com</a>
          <a className="link link-hover">+880 123-456-789</a>
        </nav>

        {/* Social */}
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="flex gap-4">
            <a className="hover:text-primary">
              <FaFacebook size={20} />
            </a>
            <a className="hover:text-primary">
              <FaTwitter size={20} />
            </a>
            <a className="hover:text-primary">
              <FaInstagram size={20} />
            </a>
            <a className="hover:text-primary">
              <FaYoutube size={20} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
